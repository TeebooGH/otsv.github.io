/**
 * Mock data for soil monitoring zones in Évry-Courcouronnes
 * Each zone contains sensor readings and metadata
 */

const ZONES_DATA = [
    // Parcs principaux
    {
        id: "z001",
        name: "Parc des Coquibus",
        type: "parc",
        coords: [48.6285, 2.4356],
        score: 92,
        indicators: {
            ph: 6.9,
            humidity: 45,
            temperature: 18.2,
            organicMatter: 4.5,
            cnRatio: 11.8,
            cec: 19.2,
            etn: 0.31,
            conductivity: 1.1
        },
        nutrients: { n: 2650, p: 195, k: 340, ca: 2950, mg: 260 },
        lastUpdate: "2026-04-01T09:30:00"
    },
    {
        id: "z002",
        name: "Jardin de l'Agora",
        type: "jardin",
        coords: [48.6256, 2.4432],
        score: 85,
        indicators: {
            ph: 6.7,
            humidity: 38,
            temperature: 19.1,
            organicMatter: 3.8,
            cnRatio: 12.5,
            cec: 17.8,
            etn: 0.26,
            conductivity: 1.3
        },
        nutrients: { n: 2300, p: 175, k: 310, ca: 2700, mg: 235 },
        lastUpdate: "2026-04-01T09:15:00"
    },
    {
        id: "z003",
        name: "Parc Henri Fabre",
        type: "parc",
        coords: [48.6198, 2.4278],
        score: 74,
        indicators: {
            ph: 6.2,
            humidity: 32,
            temperature: 20.5,
            organicMatter: 3.2,
            cnRatio: 14.2,
            cec: 15.4,
            etn: 0.22,
            conductivity: 1.6
        },
        nutrients: { n: 1950, p: 145, k: 275, ca: 2400, mg: 198 },
        lastUpdate: "2026-04-01T08:45:00"
    },
    {
        id: "z004",
        name: "Bois de la Grange",
        type: "bois",
        coords: [48.6312, 2.4189],
        score: 91,
        indicators: {
            ph: 7.0,
            humidity: 48,
            temperature: 17.8,
            organicMatter: 5.1,
            cnRatio: 10.9,
            cec: 20.1,
            etn: 0.34,
            conductivity: 0.9
        },
        nutrients: { n: 2800, p: 210, k: 365, ca: 3100, mg: 285 },
        lastUpdate: "2026-04-01T09:00:00"
    },
    {
        id: "z005",
        name: "Parc du Lac",
        type: "parc",
        coords: [48.6178, 2.4412],
        score: 88,
        indicators: {
            ph: 6.8,
            humidity: 44,
            temperature: 18.9,
            organicMatter: 4.0,
            cnRatio: 12.1,
            cec: 18.5,
            etn: 0.28,
            conductivity: 1.2
        },
        nutrients: { n: 2450, p: 185, k: 320, ca: 2800, mg: 245 },
        lastUpdate: "2026-04-01T09:20:00"
    },
    // Espaces verts urbains
    {
        id: "z006",
        name: "Square des Épinettes",
        type: "square",
        coords: [48.6234, 2.4298],
        score: 79,
        indicators: {
            ph: 6.5,
            humidity: 35,
            temperature: 19.8,
            organicMatter: 3.4,
            cnRatio: 13.5,
            cec: 16.2,
            etn: 0.24,
            conductivity: 1.4
        },
        nutrients: { n: 2100, p: 160, k: 290, ca: 2550, mg: 215 },
        lastUpdate: "2026-04-01T08:30:00"
    },
    {
        id: "z007",
        name: "Parc Charles de Gaulle",
        type: "parc",
        coords: [48.6267, 2.4215],
        score: 86,
        indicators: {
            ph: 6.8,
            humidity: 41,
            temperature: 18.5,
            organicMatter: 4.2,
            cnRatio: 11.9,
            cec: 18.0,
            etn: 0.29,
            conductivity: 1.1
        },
        nutrients: { n: 2500, p: 190, k: 330, ca: 2850, mg: 255 },
        lastUpdate: "2026-04-01T09:10:00"
    },
    {
        id: "z008",
        name: "Jardin des Tourelles",
        type: "jardin",
        coords: [48.6301, 2.4378],
        score: 82,
        indicators: {
            ph: 6.6,
            humidity: 39,
            temperature: 19.2,
            organicMatter: 3.7,
            cnRatio: 12.8,
            cec: 17.3,
            etn: 0.25,
            conductivity: 1.3
        },
        nutrients: { n: 2250, p: 172, k: 305, ca: 2680, mg: 228 },
        lastUpdate: "2026-04-01T08:55:00"
    },
    {
        id: "z009",
        name: "Coulée Verte",
        type: "corridor",
        coords: [48.6221, 2.4345],
        score: 84,
        indicators: {
            ph: 6.7,
            humidity: 40,
            temperature: 18.8,
            organicMatter: 3.9,
            cnRatio: 12.3,
            cec: 17.6,
            etn: 0.27,
            conductivity: 1.2
        },
        nutrients: { n: 2380, p: 178, k: 315, ca: 2750, mg: 240 },
        lastUpdate: "2026-04-01T09:05:00"
    },
    {
        id: "z010",
        name: "Parc des Loges",
        type: "parc",
        coords: [48.6295, 2.4265],
        score: 89,
        indicators: {
            ph: 6.9,
            humidity: 43,
            temperature: 18.3,
            organicMatter: 4.3,
            cnRatio: 11.6,
            cec: 18.8,
            etn: 0.30,
            conductivity: 1.0
        },
        nutrients: { n: 2580, p: 198, k: 345, ca: 2920, mg: 268 },
        lastUpdate: "2026-04-01T09:25:00"
    },
    // Zones agricoles / maraîchères
    {
        id: "z011",
        name: "Jardins Familiaux Nord",
        type: "agriculture",
        coords: [48.6338, 2.4312],
        score: 87,
        indicators: {
            ph: 6.8,
            humidity: 42,
            temperature: 18.6,
            organicMatter: 4.8,
            cnRatio: 11.2,
            cec: 19.5,
            etn: 0.32,
            conductivity: 1.1
        },
        nutrients: { n: 2720, p: 205, k: 355, ca: 3020, mg: 275 },
        lastUpdate: "2026-04-01T08:40:00"
    },
    {
        id: "z012",
        name: "Jardins Familiaux Sud",
        type: "agriculture",
        coords: [48.6152, 2.4325],
        score: 85,
        indicators: {
            ph: 6.7,
            humidity: 40,
            temperature: 19.0,
            organicMatter: 4.4,
            cnRatio: 11.8,
            cec: 18.9,
            etn: 0.30,
            conductivity: 1.2
        },
        nutrients: { n: 2620, p: 195, k: 338, ca: 2880, mg: 258 },
        lastUpdate: "2026-04-01T08:50:00"
    },
    {
        id: "z013",
        name: "Potager Communautaire Agora",
        type: "agriculture",
        coords: [48.6248, 2.4455],
        score: 90,
        indicators: {
            ph: 6.9,
            humidity: 46,
            temperature: 18.1,
            organicMatter: 5.0,
            cnRatio: 10.8,
            cec: 20.2,
            etn: 0.33,
            conductivity: 1.0
        },
        nutrients: { n: 2780, p: 215, k: 362, ca: 3080, mg: 282 },
        lastUpdate: "2026-04-01T09:35:00"
    },
    // Campus et établissements
    {
        id: "z014",
        name: "Campus Université Évry",
        type: "campus",
        coords: [48.6275, 2.4485],
        score: 78,
        indicators: {
            ph: 6.4,
            humidity: 34,
            temperature: 20.2,
            organicMatter: 3.3,
            cnRatio: 13.8,
            cec: 15.8,
            etn: 0.23,
            conductivity: 1.5
        },
        nutrients: { n: 2020, p: 152, k: 282, ca: 2480, mg: 205 },
        lastUpdate: "2026-04-01T08:20:00"
    },
    {
        id: "z015",
        name: "Parc Télécom SudParis",
        type: "campus",
        coords: [48.6245, 2.4395],
        score: 81,
        indicators: {
            ph: 6.6,
            humidity: 37,
            temperature: 19.5,
            organicMatter: 3.6,
            cnRatio: 13.0,
            cec: 17.0,
            etn: 0.25,
            conductivity: 1.3
        },
        nutrients: { n: 2180, p: 165, k: 298, ca: 2620, mg: 222 },
        lastUpdate: "2026-04-01T08:35:00"
    },
    // Berges et zones humides
    {
        id: "z016",
        name: "Berges de Seine - Nord",
        type: "berge",
        coords: [48.6355, 2.4245],
        score: 83,
        indicators: {
            ph: 7.1,
            humidity: 52,
            temperature: 17.5,
            organicMatter: 4.6,
            cnRatio: 11.5,
            cec: 19.0,
            etn: 0.31,
            conductivity: 1.4
        },
        nutrients: { n: 2550, p: 188, k: 328, ca: 2780, mg: 248 },
        lastUpdate: "2026-04-01T09:40:00"
    },
    {
        id: "z017",
        name: "Berges de Seine - Centre",
        type: "berge",
        coords: [48.6298, 2.4158],
        score: 80,
        indicators: {
            ph: 7.0,
            humidity: 50,
            temperature: 17.8,
            organicMatter: 4.2,
            cnRatio: 12.0,
            cec: 18.2,
            etn: 0.28,
            conductivity: 1.5
        },
        nutrients: { n: 2420, p: 180, k: 312, ca: 2720, mg: 238 },
        lastUpdate: "2026-04-01T09:45:00"
    },
    {
        id: "z018",
        name: "Berges de Seine - Sud",
        type: "berge",
        coords: [48.6185, 2.4125],
        score: 77,
        indicators: {
            ph: 6.9,
            humidity: 48,
            temperature: 18.2,
            organicMatter: 3.8,
            cnRatio: 12.6,
            cec: 17.5,
            etn: 0.26,
            conductivity: 1.6
        },
        nutrients: { n: 2280, p: 168, k: 295, ca: 2650, mg: 225 },
        lastUpdate: "2026-04-01T09:50:00"
    },
    // Zones résidentielles
    {
        id: "z019",
        name: "Quartier des Pyramides",
        type: "urbain",
        coords: [48.6228, 2.4238],
        score: 72,
        indicators: {
            ph: 6.3,
            humidity: 30,
            temperature: 21.0,
            organicMatter: 2.9,
            cnRatio: 14.5,
            cec: 14.8,
            etn: 0.20,
            conductivity: 1.7
        },
        nutrients: { n: 1850, p: 138, k: 265, ca: 2320, mg: 188 },
        lastUpdate: "2026-04-01T08:15:00"
    },
    {
        id: "z020",
        name: "Quartier du Canal",
        type: "urbain",
        coords: [48.6318, 2.4425],
        score: 75,
        indicators: {
            ph: 6.4,
            humidity: 33,
            temperature: 20.3,
            organicMatter: 3.1,
            cnRatio: 13.9,
            cec: 15.5,
            etn: 0.22,
            conductivity: 1.5
        },
        nutrients: { n: 1980, p: 148, k: 278, ca: 2420, mg: 198 },
        lastUpdate: "2026-04-01T08:25:00"
    },
    {
        id: "z021",
        name: "Quartier Bois Sauvage",
        type: "urbain",
        coords: [48.6165, 2.4368],
        score: 76,
        indicators: {
            ph: 6.5,
            humidity: 34,
            temperature: 20.0,
            organicMatter: 3.2,
            cnRatio: 13.6,
            cec: 15.9,
            etn: 0.23,
            conductivity: 1.4
        },
        nutrients: { n: 2050, p: 155, k: 285, ca: 2500, mg: 208 },
        lastUpdate: "2026-04-01T08:10:00"
    },
    // Espaces sportifs
    {
        id: "z022",
        name: "Stade Robert Bobin",
        type: "sport",
        coords: [48.6212, 2.4195],
        score: 81,
        indicators: {
            ph: 6.6,
            humidity: 38,
            temperature: 19.3,
            organicMatter: 3.5,
            cnRatio: 12.9,
            cec: 16.8,
            etn: 0.24,
            conductivity: 1.2
        },
        nutrients: { n: 2150, p: 162, k: 295, ca: 2580, mg: 218 },
        lastUpdate: "2026-04-01T08:00:00"
    },
    {
        id: "z023",
        name: "Complexe Sportif Aunettes",
        type: "sport",
        coords: [48.6288, 2.4512],
        score: 79,
        indicators: {
            ph: 6.5,
            humidity: 36,
            temperature: 19.6,
            organicMatter: 3.3,
            cnRatio: 13.2,
            cec: 16.4,
            etn: 0.23,
            conductivity: 1.3
        },
        nutrients: { n: 2080, p: 158, k: 288, ca: 2520, mg: 212 },
        lastUpdate: "2026-04-01T07:55:00"
    },
    // Zones naturelles
    {
        id: "z024",
        name: "Prairie des Bordes",
        type: "prairie",
        coords: [48.6358, 2.4385],
        score: 93,
        indicators: {
            ph: 7.0,
            humidity: 47,
            temperature: 17.9,
            organicMatter: 5.2,
            cnRatio: 10.5,
            cec: 20.5,
            etn: 0.35,
            conductivity: 0.9
        },
        nutrients: { n: 2850, p: 218, k: 372, ca: 3150, mg: 292 },
        lastUpdate: "2026-04-01T09:55:00"
    },
    {
        id: "z025",
        name: "Zone Humide Est",
        type: "zone_humide",
        coords: [48.6195, 2.4488],
        score: 88,
        indicators: {
            ph: 6.8,
            humidity: 58,
            temperature: 17.2,
            organicMatter: 5.5,
            cnRatio: 10.2,
            cec: 21.0,
            etn: 0.36,
            conductivity: 1.3
        },
        nutrients: { n: 2900, p: 225, k: 380, ca: 3200, mg: 298 },
        lastUpdate: "2026-04-01T10:00:00"
    },
    // Points supplémentaires maillage fin
    {
        id: "z026",
        name: "Allée des Champs",
        type: "corridor",
        coords: [48.6242, 2.4168],
        score: 80,
        indicators: {
            ph: 6.6,
            humidity: 37,
            temperature: 19.4,
            organicMatter: 3.5,
            cnRatio: 13.0,
            cec: 16.9,
            etn: 0.24,
            conductivity: 1.3
        },
        nutrients: { n: 2120, p: 160, k: 292, ca: 2560, mg: 215 },
        lastUpdate: "2026-04-01T07:45:00"
    },
    {
        id: "z027",
        name: "Square Jean Jaurès",
        type: "square",
        coords: [48.6205, 2.4335],
        score: 77,
        indicators: {
            ph: 6.4,
            humidity: 34,
            temperature: 20.1,
            organicMatter: 3.2,
            cnRatio: 13.7,
            cec: 15.7,
            etn: 0.22,
            conductivity: 1.5
        },
        nutrients: { n: 1990, p: 150, k: 280, ca: 2450, mg: 202 },
        lastUpdate: "2026-04-01T07:50:00"
    },
    {
        id: "z028",
        name: "Parc de la Commune",
        type: "parc",
        coords: [48.6275, 2.4135],
        score: 84,
        indicators: {
            ph: 6.7,
            humidity: 40,
            temperature: 18.7,
            organicMatter: 3.9,
            cnRatio: 12.2,
            cec: 17.7,
            etn: 0.27,
            conductivity: 1.2
        },
        nutrients: { n: 2400, p: 182, k: 318, ca: 2760, mg: 242 },
        lastUpdate: "2026-04-01T07:40:00"
    },
    {
        id: "z029",
        name: "Esplanade François Mitterrand",
        type: "urbain",
        coords: [48.6262, 2.4382],
        score: 73,
        indicators: {
            ph: 6.3,
            humidity: 31,
            temperature: 20.8,
            organicMatter: 2.8,
            cnRatio: 14.3,
            cec: 14.5,
            etn: 0.19,
            conductivity: 1.6
        },
        nutrients: { n: 1820, p: 135, k: 262, ca: 2300, mg: 185 },
        lastUpdate: "2026-04-01T07:35:00"
    },
    {
        id: "z030",
        name: "Bois Guillaume",
        type: "bois",
        coords: [48.6345, 2.4288],
        score: 90,
        indicators: {
            ph: 6.9,
            humidity: 45,
            temperature: 18.0,
            organicMatter: 4.9,
            cnRatio: 10.9,
            cec: 19.8,
            etn: 0.33,
            conductivity: 1.0
        },
        nutrients: { n: 2750, p: 208, k: 358, ca: 3050, mg: 278 },
        lastUpdate: "2026-04-01T10:05:00"
    },
    {
        id: "z031",
        name: "Jardin Pablo Neruda",
        type: "jardin",
        coords: [48.6188, 2.4255],
        score: 82,
        indicators: {
            ph: 6.6,
            humidity: 38,
            temperature: 19.2,
            organicMatter: 3.7,
            cnRatio: 12.7,
            cec: 17.2,
            etn: 0.25,
            conductivity: 1.3
        },
        nutrients: { n: 2230, p: 170, k: 302, ca: 2670, mg: 225 },
        lastUpdate: "2026-04-01T07:30:00"
    },
    {
        id: "z032",
        name: "Parc des Sports",
        type: "sport",
        coords: [48.6322, 2.4468],
        score: 78,
        indicators: {
            ph: 6.5,
            humidity: 35,
            temperature: 19.7,
            organicMatter: 3.3,
            cnRatio: 13.4,
            cec: 16.1,
            etn: 0.23,
            conductivity: 1.4
        },
        nutrients: { n: 2050, p: 155, k: 285, ca: 2500, mg: 210 },
        lastUpdate: "2026-04-01T07:25:00"
    },
    {
        id: "z033",
        name: "Zone Industrielle Reconvertie",
        type: "friche",
        coords: [48.6158, 2.4185],
        score: 65,
        indicators: {
            ph: 6.0,
            humidity: 28,
            temperature: 21.5,
            organicMatter: 2.4,
            cnRatio: 15.2,
            cec: 13.2,
            etn: 0.17,
            conductivity: 1.9
        },
        nutrients: { n: 1620, p: 118, k: 238, ca: 2100, mg: 165 },
        lastUpdate: "2026-04-01T07:20:00"
    },
    {
        id: "z034",
        name: "Friche Ferroviaire",
        type: "friche",
        coords: [48.6335, 2.4155],
        score: 68,
        indicators: {
            ph: 6.1,
            humidity: 29,
            temperature: 21.2,
            organicMatter: 2.6,
            cnRatio: 14.8,
            cec: 13.8,
            etn: 0.18,
            conductivity: 1.8
        },
        nutrients: { n: 1720, p: 125, k: 248, ca: 2180, mg: 175 },
        lastUpdate: "2026-04-01T07:15:00"
    },
    {
        id: "z035",
        name: "Verger Municipal",
        type: "agriculture",
        coords: [48.6308, 2.4225],
        score: 91,
        indicators: {
            ph: 6.9,
            humidity: 44,
            temperature: 18.3,
            organicMatter: 4.7,
            cnRatio: 11.1,
            cec: 19.6,
            etn: 0.32,
            conductivity: 1.0
        },
        nutrients: { n: 2700, p: 202, k: 352, ca: 3000, mg: 272 },
        lastUpdate: "2026-04-01T10:10:00"
    }
];

// Type configurations for styling
const ZONE_TYPES = {
    parc: { label: "Parc", color: "#4ade80", icon: "🌳" },
    jardin: { label: "Jardin", color: "#22c55e", icon: "🌷" },
    bois: { label: "Bois", color: "#16a34a", icon: "🌲" },
    square: { label: "Square", color: "#86efac", icon: "🌿" },
    corridor: { label: "Corridor vert", color: "#a3e635", icon: "🛤️" },
    agriculture: { label: "Agriculture", color: "#facc15", icon: "🌾" },
    campus: { label: "Campus", color: "#60a5fa", icon: "🏫" },
    berge: { label: "Berge", color: "#38bdf8", icon: "🌊" },
    urbain: { label: "Zone urbaine", color: "#a1a1aa", icon: "🏘️" },
    sport: { label: "Espace sportif", color: "#34d399", icon: "⚽" },
    prairie: { label: "Prairie", color: "#84cc16", icon: "🌻" },
    zone_humide: { label: "Zone humide", color: "#06b6d4", icon: "💧" },
    friche: { label: "Friche", color: "#f97316", icon: "🏚️" }
};

// Indicator configurations
// source: "probe" = mesurable par sonde, "lab" = nécessite analyse en laboratoire
const INDICATORS_CONFIG = {
    ph: {
        label: "pH du Sol",
        unit: "",
        icon: "💧",
        color: "rgba(59, 130, 246, 0.2)",
        optimal: { min: 6.5, max: 7.2 },
        range: { min: 4.0, max: 9.0 },
        source: "probe",
        description: "Acidité du sol"
    },
    humidity: {
        label: "Hygrométrie",
        unit: "%",
        icon: "💦",
        color: "rgba(74, 222, 128, 0.2)",
        optimal: { min: 35, max: 55 },
        range: { min: 0, max: 100 },
        source: "probe",
        description: "Humidité du sol"
    },
    temperature: {
        label: "Température Sol",
        unit: "°C",
        icon: "🌡️",
        color: "rgba(239, 68, 68, 0.2)",
        optimal: { min: 15, max: 22 },
        range: { min: -10, max: 40 },
        source: "probe",
        description: "Chaleur du sol"
    },
    conductivity: {
        label: "Conductivité",
        unit: "dS/m",
        icon: "⚡",
        color: "rgba(99, 102, 241, 0.2)",
        optimal: { min: 0.5, max: 1.5 },
        range: { min: 0, max: 4 },
        source: "probe",
        description: "Conductivité électrique globale"
    },
    organicMatter: {
        label: "Matière Organique",
        unit: "%",
        icon: "🍂",
        color: "rgba(139, 92, 246, 0.2)",
        optimal: { min: 3.5, max: 6.0 },
        range: { min: 0, max: 10 },
        source: "lab",
        description: "Taux de matière organique"
    },
    cnRatio: {
        label: "Rapport C/N",
        unit: ":1",
        icon: "⚖️",
        color: "rgba(245, 158, 11, 0.2)",
        optimal: { min: 10, max: 12 },
        range: { min: 5, max: 30 },
        source: "lab",
        description: "Rapport Carbone/Azote"
    },
    cec: {
        label: "CEC",
        unit: "meq/100g",
        icon: "🧪",
        color: "rgba(236, 72, 153, 0.2)",
        optimal: { min: 15, max: 25 },
        range: { min: 0, max: 50 },
        source: "lab",
        description: "Capacité d'Échange Cationique"
    },
    etn: {
        label: "ETN",
        unit: "%",
        icon: "🔬",
        color: "rgba(34, 197, 94, 0.2)",
        optimal: { min: 0.2, max: 0.4 },
        range: { min: 0, max: 1 },
        source: "lab",
        description: "Éléments Traces Naturels"
    }
};

// Nutrient configurations - mesurables par sonde (NPK)
const NUTRIENTS_CONFIG = {
    n: { label: "Azote (N)", color: "#22c55e", optimal: 2500, source: "probe" },
    p: { label: "Phosphore (P)", color: "#3b82f6", optimal: 200, source: "probe" },
    k: { label: "Potassium (K)", color: "#f59e0b", optimal: 350, source: "probe" }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ZONES_DATA, ZONE_TYPES, INDICATORS_CONFIG, NUTRIENTS_CONFIG };
}
