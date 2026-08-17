// Shared Firebase project config — used by both index.html (public price lookup)
// and admin.html (internal price management). The apiKey below is a public
// client identifier, not a secret; access control is enforced by Firestore
// security rules (public read, authenticated write only).
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDqN5jH4AG8T4LeHXEy1gEgwdLRGrtaN-w",
  authDomain: "cs-chung-seng-motor-v2.firebaseapp.com",
  projectId: "cs-chung-seng-motor-v2",
  storageBucket: "cs-chung-seng-motor-v2.firebasestorage.app",
  messagingSenderId: "621144341511",
  appId: "1:621144341511:web:7571060f5b1183316efea2"
};

const FIREBASE_SDK_VERSION = "12.17.1";
const MOTO_COLLECTION = "motorcycles";
const USED_MOTO_COLLECTION = "usedMotorcycles";
const TRADE_IN_SETTINGS_PATH = "settings/tradeInConfig";
const STAFF_COLLECTION = "staff";
const USED_INVENTORY_COLLECTION = "usedInventory";
const NEW_CAR_INSTALLMENT_COLLECTION = "newCarInstallmentData";
const IMPORT_HISTORY_COLLECTION = "importHistory";
const INSURANCE_RATES_COLLECTION = "insuranceRates";
const ROAD_TAX_RATES_COLLECTION = "roadTaxRates";
