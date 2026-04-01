/**
 * SoilWatch Dashboard - Utility Functions
 */

const Utils = {
    /**
     * Get score class based on value
     */
    getScoreClass(score) {
        if (score >= 90) return 'score--excellent';
        if (score >= 80) return 'score--good';
        if (score >= 70) return 'score--moderate';
        return 'score--poor';
    },

    /**
     * Get score color based on value
     */
    getScoreColor(score) {
        if (score >= 90) return '#4ade80';
        if (score >= 80) return '#84cc16';
        if (score >= 70) return '#f59e0b';
        return '#ef4444';
    },

    /**
     * Get status class based on value and optimal range
     */
    getStatusClass(value, optimal) {
        if (value >= optimal.min && value <= optimal.max) return 'status--good';
        const margin = (optimal.max - optimal.min) * 0.25;
        if (value >= optimal.min - margin && value <= optimal.max + margin) return 'status--warning';
        return 'status--danger';
    },

    /**
     * Format number with specified decimals
     */
    formatNumber(value, decimals = 1) {
        return Number(value).toFixed(decimals);
    },

    /**
     * Calculate average of array values
     */
    average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    },

    /**
     * Calculate percentage of value relative to optimal
     */
    percentOfOptimal(value, optimal) {
        return Math.min(100, (value / optimal) * 100);
    },

    /**
     * Generate random trend
     */
    generateTrend() {
        const trends = ['up', 'down', 'stable'];
        return trends[Math.floor(Math.random() * trends.length)];
    },

    /**
     * Generate trend text based on type
     */
    getTrendText(trend, value, unit = '') {
        switch (trend) {
            case 'up':
                return `↑ +${value}${unit}`;
            case 'down':
                return `↓ -${value}${unit}`;
            default:
                return '→ Stable';
        }
    },

    /**
     * Format date to locale string
     */
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Group zones by type
     */
    groupByType(zones) {
        return zones.reduce((acc, zone) => {
            const type = zone.type;
            if (!acc[type]) acc[type] = [];
            acc[type].push(zone);
            return acc;
        }, {});
    },

    /**
     * Calculate global statistics
     */
    calculateGlobalStats(zones) {
        const scores = zones.map(z => z.score);
        const avgScore = Math.round(this.average(scores));
        
        const allNutrients = zones.reduce((acc, z) => {
            Object.keys(z.nutrients).forEach(key => {
                if (!acc[key]) acc[key] = [];
                acc[key].push(z.nutrients[key]);
            });
            return acc;
        }, {});
        
        const avgNutrients = {};
        Object.keys(allNutrients).forEach(key => {
            avgNutrients[key] = Math.round(this.average(allNutrients[key]));
        });

        const allIndicators = zones.reduce((acc, z) => {
            Object.keys(z.indicators).forEach(key => {
                if (!acc[key]) acc[key] = [];
                acc[key].push(z.indicators[key]);
            });
            return acc;
        }, {});
        
        const avgIndicators = {};
        Object.keys(allIndicators).forEach(key => {
            avgIndicators[key] = this.average(allIndicators[key]);
        });

        return {
            avgScore,
            avgNutrients,
            avgIndicators,
            totalZones: zones.length,
            excellentZones: zones.filter(z => z.score >= 90).length,
            goodZones: zones.filter(z => z.score >= 80 && z.score < 90).length,
            moderateZones: zones.filter(z => z.score >= 70 && z.score < 80).length,
            poorZones: zones.filter(z => z.score < 70).length
        };
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
