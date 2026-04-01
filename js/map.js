/**
 * SoilWatch Dashboard - Map Module
 * Handles Leaflet map initialization and marker management
 */

const MapModule = {
    map: null,
    markers: [],
    markersLayer: null,
    boundaryLayer: null,

    /**
     * Initialize the map
     */
    init(containerId, center = [48.6244, 2.4299], zoom = 14) {
        this.map = L.map(containerId, {
            zoomControl: false,
            attributionControl: false
        }).setView(center, zoom);

        // Add zoom control to bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(this.map);

        // Add attribution
        L.control.attribution({
            position: 'bottomleft',
            prefix: false
        }).addAttribution('© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/">CARTO</a>')
          .addTo(this.map);

        // Dark map tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(this.map);

        // Initialize markers layer
        this.markersLayer = L.layerGroup().addTo(this.map);

        // Draw boundary
        this.drawBoundary();

        return this;
    },

    /**
     * Draw monitoring area boundary
     */
    drawBoundary() {
        const bounds = [
            [48.6380, 2.4080],
            [48.6380, 2.4550],
            [48.6130, 2.4550],
            [48.6130, 2.4080]
        ];

        this.boundaryLayer = L.polygon(bounds, {
            color: '#4ade80',
            weight: 1,
            fillColor: '#4ade80',
            fillOpacity: 0.03,
            dashArray: '5, 10'
        }).addTo(this.map);
    },

    /**
     * Create custom marker icon
     */
    createMarkerIcon(color, size = 14) {
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border: 2px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 8px rgba(0,0,0,0.4);
            "></div>`,
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    },

    /**
     * Create popup content
     */
    createPopupContent(zone, zoneType) {
        const scoreClass = Utils.getScoreClass(zone.score);
        const scoreColor = Utils.getScoreColor(zone.score);
        
        return `
            <div class="popup-content">
                <div class="popup-content__title">
                    ${zoneType.icon} ${zone.name}
                </div>
                <div class="popup-content__type">${zoneType.label}</div>
                <div class="popup-content__score">
                    <span class="popup-content__score-label">Score Santé</span>
                    <span class="popup-content__score-value" style="color: ${scoreColor}">${zone.score}/100</span>
                </div>
                <div class="popup-content__stats">
                    <div class="popup-content__stat">
                        <span>pH</span>
                        <span class="popup-content__stat-value">${zone.indicators.ph}</span>
                    </div>
                    <div class="popup-content__stat">
                        <span>Humidité</span>
                        <span class="popup-content__stat-value">${zone.indicators.humidity}%</span>
                    </div>
                    <div class="popup-content__stat">
                        <span>Temp.</span>
                        <span class="popup-content__stat-value">${zone.indicators.temperature}°C</span>
                    </div>
                    <div class="popup-content__stat">
                        <span>Mat. Org.</span>
                        <span class="popup-content__stat-value">${zone.indicators.organicMatter}%</span>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Add zones to map
     */
    addZones(zones, zoneTypes, onZoneClick) {
        this.clearMarkers();

        zones.forEach(zone => {
            const zoneType = zoneTypes[zone.type];
            const color = Utils.getScoreColor(zone.score);
            const icon = this.createMarkerIcon(color);

            const marker = L.marker(zone.coords, { icon })
                .bindPopup(this.createPopupContent(zone, zoneType), {
                    maxWidth: 250,
                    className: 'custom-popup'
                });

            marker.zoneId = zone.id;

            marker.on('click', () => {
                if (onZoneClick) onZoneClick(zone);
            });

            this.markers.push(marker);
            this.markersLayer.addLayer(marker);
        });

        return this;
    },

    /**
     * Clear all markers
     */
    clearMarkers() {
        this.markersLayer.clearLayers();
        this.markers = [];
        return this;
    },

    /**
     * Focus on a specific zone
     */
    focusZone(coords, zoom = 17) {
        // Ensure map is ready before setting view
        if (!this.map) return this;
        
        // Convert to Leaflet LatLng if needed
        const latLng = Array.isArray(coords) ? L.latLng(coords[0], coords[1]) : coords;
        
        // Use flyTo for smoother, more reliable centering
        this.map.flyTo(latLng, zoom, {
            animate: true,
            duration: 0.8
        });
        
        return this;
    },

    /**
     * Open popup for a zone
     */
    openZonePopup(zoneId) {
        const marker = this.markers.find(m => m.zoneId === zoneId);
        if (marker) {
            // Wait for flyTo animation to complete
            setTimeout(() => {
                marker.openPopup();
            }, 850);
        }
        return this;
    },

    /**
     * Filter markers by type
     */
    filterByType(type) {
        this.markers.forEach(marker => {
            const zone = ZONES_DATA.find(z => z.id === marker.zoneId);
            if (type === 'all' || zone.type === type) {
                this.markersLayer.addLayer(marker);
            } else {
                this.markersLayer.removeLayer(marker);
            }
        });
        return this;
    },

    /**
     * Reset map view
     */
    resetView() {
        this.map.setView([48.6244, 2.4299], 14, {
            animate: true,
            duration: 0.5
        });
        return this;
    },

    /**
     * Fit map to show all markers
     */
    fitToMarkers() {
        if (this.markers.length > 0) {
            const group = L.featureGroup(this.markers);
            this.map.fitBounds(group.getBounds().pad(0.1));
        }
        return this;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MapModule;
}
