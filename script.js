/* ============================================================
   FLOODAI DASHBOARD JAVASCRIPT
   ============================================================ */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDEVuVwHJdjJmy-PRL2wgf1lAoIzKhKVmw",
  authDomain: "floodai-a4646.firebaseapp.com",
  databaseURL: "PUT_YOUR_REAL_DATABASE_URL_HERE",
  projectId: "floodai-a4646",
  storageBucket: "floodai-a4646.firebasestorage.app",
  messagingSenderId: "1086937849989",
  appId: "1:1086937849989:web:7e6f7fd11da43fee9949ec",
  measurementId: "G-2EWDSXM8X6"
};

const FLOOD_MODEL = {
  waterLevel: {
    watch: 40,
    warning: 70,
    danger: 100
  },

  rateOfRise: {
    watch: 2,
    warning: 5,
    danger: 10
  },

  humidity: {
    watch: 80,
    warning: 90,
    danger: 96
  },

  weights: {
    waterLevel: 0.55,
    rateOfRise: 0.30,
    humidity: 0.15
  }
};

const HISTORY_POINTS = 24;