/**
 * SoilWatch Dashboard - Main Application
 * Entry point and initialization
 */

const App = {
    /**
     * Initialize the application
     */
    init() {
        console.log('🌱 SoilWatch Dashboard initializing...');

        // Initialize map
        MapModule.init('map');
        MapModule.addZones(ZONES_DATA, ZONE_TYPES, (zone) => {
            UIModule.selectZone(zone);
        });

        // Initialize UI
        UIModule.init();

        // Add keyboard shortcuts
        this.bindKeyboardShortcuts();

        // Auto-refresh simulation
        this.startAutoRefresh();

        console.log(`✅ Dashboard loaded with ${ZONES_DATA.length} zones`);
    },

    /**
     * Bind keyboard shortcuts
     */
    bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Escape to reset view
            if (e.key === 'Escape') {
                UIModule.resetToGlobal();
            }

            // R to reset map view
            if (e.key === 'r' || e.key === 'R') {
                MapModule.resetView();
            }

            // F to fit all markers
            if (e.key === 'f' || e.key === 'F') {
                MapModule.fitToMarkers();
            }
        });
    },

    /**
     * Start auto-refresh timer (simulation)
     */
    startAutoRefresh() {
        // Update timestamp every minute
        setInterval(() => {
            UIModule.updateLastUpdate();
        }, 60000);

        // Simulate data refresh every 5 minutes
        setInterval(() => {
            this.simulateDataUpdate();
        }, 300000);
    },

    /**
     * Simulate data update (for demo purposes)
     */
    simulateDataUpdate() {
        // Slightly modify some values to simulate real-time updates
        ZONES_DATA.forEach(zone => {
            // Random small variations
            zone.indicators.humidity += (Math.random() - 0.5) * 2;
            zone.indicators.humidity = Math.max(20, Math.min(60, zone.indicators.humidity));

            zone.indicators.temperature += (Math.random() - 0.5) * 0.5;
            zone.indicators.temperature = Math.max(15, Math.min(25, zone.indicators.temperature));

            zone.lastUpdate = new Date().toISOString();
        });

        // Re-render UI
        UIModule.renderIndicators();
        UIModule.renderStats();
        UIModule.updateLastUpdate();

        console.log('🔄 Data refreshed');
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
