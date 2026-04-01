/**
 * SoilWatch Dashboard - UI Module
 * Handles UI rendering and interactions
 */

const UIModule = {
    selectedZone: null,
    activeFilter: 'all',

    /**
     * Initialize UI
     */
    init() {
        this.renderIndicators();
        this.renderStats();
        this.renderZonesList();
        this.renderNutrients();
        this.renderTypeDistribution();
        this.renderLegend();
        this.bindEvents();
        this.updateLastUpdate();
        return this;
    },

    /**
     * Calculate and render indicators
     */
    renderIndicators() {
        const container = document.getElementById('indicators-grid');
        const stats = Utils.calculateGlobalStats(ZONES_DATA);
        const indicators = stats.avgIndicators;

        // Only probe indicators
        const probeIndicators = Object.keys(INDICATORS_CONFIG).filter(k => INDICATORS_CONFIG[k].source === 'probe');

        let html = '';
        
        // Probe indicators section
        html += '<div class="indicators-section"><div class="indicators-section__header"><span class="indicators-section__badge indicators-section__badge--probe">📡 Sonde - Temps réel</span></div><div class="indicators-section__grid">';
        
        probeIndicators.forEach(key => {
            const config = INDICATORS_CONFIG[key];
            const value = indicators[key];
            const statusClass = Utils.getStatusClass(value, config.optimal);
            const trend = Utils.generateTrend();
            const trendClass = `trend--${trend}`;
            const trendValue = (Math.random() * 2).toFixed(1);
            const trendText = Utils.getTrendText(trend, trendValue, config.unit ? '' : '');

            html += `
                <div class="indicator-card indicator-card--probe" data-indicator="${key}">
                    <div class="indicator__header">
                        <div class="indicator__icon" style="background: ${config.color}">
                            ${config.icon}
                        </div>
                        <div class="indicator__status ${statusClass}"></div>
                    </div>
                    <div class="indicator__label">${config.label}</div>
                    <div class="indicator__value">
                        ${Utils.formatNumber(value, key === 'etn' ? 2 : 1)}
                        <span class="indicator__unit">${config.unit}</span>
                    </div>
                    <div class="indicator__trend ${trendClass}">${trendText}</div>
                </div>
            `;
        });
        
        html += '</div></div>';

        container.innerHTML = html;
    },

    /**
     * Render global statistics
     */
    renderStats() {
        const stats = Utils.calculateGlobalStats(ZONES_DATA);
        
        document.getElementById('stat-score').textContent = `${stats.avgScore}%`;
        document.getElementById('stat-zones').textContent = stats.totalZones;
        document.getElementById('stat-samples').textContent = stats.totalZones * 4; // Mock samples
        document.getElementById('stat-excellent').textContent = stats.excellentZones;
    },

    /**
     * Render zones list
     */
    renderZonesList(filter = 'all') {
        const container = document.getElementById('zones-list');
        
        let zones = [...ZONES_DATA];
        if (filter !== 'all') {
            zones = zones.filter(z => z.type === filter);
        }
        
        // Sort by score descending
        zones.sort((a, b) => b.score - a.score);

        let html = '';
        zones.forEach(zone => {
            const zoneType = ZONE_TYPES[zone.type];
            const scoreClass = Utils.getScoreClass(zone.score);
            const isActive = this.selectedZone && this.selectedZone.id === zone.id;

            html += `
                <div class="zone-item ${isActive ? 'active' : ''}" data-zone-id="${zone.id}">
                    <div class="zone-item__info">
                        <div class="zone-item__marker" style="background: ${Utils.getScoreColor(zone.score)}"></div>
                        <div class="zone-item__details">
                            <span class="zone-item__name">${zone.name}</span>
                            <span class="zone-item__type">${zoneType.icon} ${zoneType.label}</span>
                        </div>
                    </div>
                    <span class="zone-item__score ${scoreClass}">${zone.score}</span>
                </div>
            `;
        });

        container.innerHTML = html;
        this.bindZoneEvents();
    },

    /**
     * Render nutrients bars
     */
    renderNutrients(zone = null) {
        const container = document.getElementById('nutrients-bars');
        let nutrients;

        if (zone) {
            nutrients = zone.nutrients;
        } else {
            const stats = Utils.calculateGlobalStats(ZONES_DATA);
            nutrients = stats.avgNutrients;
        }

        let html = '';
        Object.keys(NUTRIENTS_CONFIG).forEach(key => {
            const config = NUTRIENTS_CONFIG[key];
            const value = nutrients[key];
            const percent = Utils.percentOfOptimal(value, config.optimal);

            html += `
                <div class="nutrient-item">
                    <div class="nutrient-item__header">
                        <span class="nutrient-item__name">${config.label}</span>
                        <span class="nutrient-item__value">${value} mg/kg</span>
                    </div>
                    <div class="nutrient-item__bar">
                        <div class="nutrient-item__fill" style="width: ${percent}%; background: ${config.color}"></div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    },

    /**
     * Render type distribution
     */
    renderTypeDistribution() {
        const container = document.getElementById('type-distribution');
        const grouped = Utils.groupByType(ZONES_DATA);
        const total = ZONES_DATA.length;

        // Sort by count
        const sorted = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);

        let html = '';
        sorted.forEach(([type, zones]) => {
            const config = ZONE_TYPES[type];
            const count = zones.length;
            const percent = (count / total) * 100;

            html += `
                <div class="type-item">
                    <span class="type-item__icon">${config.icon}</span>
                    <div class="type-item__info">
                        <span class="type-item__name">${config.label}</span>
                        <div class="type-item__bar">
                            <div class="type-item__fill" style="width: ${percent}%; background: ${config.color}"></div>
                        </div>
                    </div>
                    <span class="type-item__count">${count}</span>
                </div>
            `;
        });

        container.innerHTML = html;
    },

    /**
     * Render map legend
     */
    renderLegend() {
        const container = document.getElementById('map-legend-items');
        
        let html = '';
        const scoreRanges = [
            { label: '90+', color: '#4ade80' },
            { label: '80-89', color: '#84cc16' },
            { label: '70-79', color: '#f59e0b' },
            { label: '<70', color: '#ef4444' }
        ];

        scoreRanges.forEach(range => {
            html += `
                <div class="map-legend__item">
                    <div class="map-legend__color" style="background: ${range.color}"></div>
                    <span>${range.label}</span>
                </div>
            `;
        });

        container.innerHTML = html;
    },

    /**
     * Bind filter events
     */
    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.setActiveFilter(filter);
            });
        });
    },

    /**
     * Bind zone list events
     */
    bindZoneEvents() {
        document.querySelectorAll('.zone-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const zoneId = item.dataset.zoneId;
                const zone = ZONES_DATA.find(z => z.id === zoneId);
                this.selectZone(zone);
            });
        });
    },

    /**
     * Set active filter
     */
    setActiveFilter(filter) {
        this.activeFilter = filter;
        
        // Update button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        // Update zones list
        this.renderZonesList(filter);

        // Filter map markers
        MapModule.filterByType(filter);
    },

    /**
     * Select a zone
     */
    selectZone(zone) {
        this.selectedZone = zone;
        
        // Update zones list
        document.querySelectorAll('.zone-item').forEach(item => {
            item.classList.toggle('active', item.dataset.zoneId === zone.id);
        });

        // Update nutrients
        this.renderNutrients(zone);

        // Focus map on zone
        MapModule.focusZone(zone.coords);
        MapModule.openZonePopup(zone.id);

        // Update indicators for selected zone
        this.updateIndicatorsForZone(zone);
    },

    /**
     * Update indicators for a specific zone
     */
    updateIndicatorsForZone(zone) {
        Object.keys(zone.indicators).forEach(key => {
            const card = document.querySelector(`.indicator-card[data-indicator="${key}"]`);
            if (card) {
                const config = INDICATORS_CONFIG[key];
                const value = zone.indicators[key];
                const statusClass = Utils.getStatusClass(value, config.optimal);
                
                card.querySelector('.indicator__value').innerHTML = `
                    ${Utils.formatNumber(value, key === 'etn' ? 2 : 1)}
                    <span class="indicator__unit">${config.unit}</span>
                `;
                
                const statusEl = card.querySelector('.indicator__status');
                statusEl.className = `indicator__status ${statusClass}`;
            }
        });
    },

    /**
     * Reset to global view
     */
    resetToGlobal() {
        this.selectedZone = null;
        this.renderIndicators();
        this.renderNutrients();
        MapModule.resetView();
        
        document.querySelectorAll('.zone-item').forEach(item => {
            item.classList.remove('active');
        });
    },

    /**
     * Update last update timestamp
     */
    updateLastUpdate() {
        const el = document.getElementById('last-update');
        const now = new Date();
        el.textContent = `Dernière mise à jour: ${Utils.formatDate(now.toISOString())}`;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIModule;
}
