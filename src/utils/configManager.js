// --- Define constants ---

// Imports
const fs = require("fs");
const path = require("path");
const { version } = require("../../package.json");


// Default values
const config_folder = "config";
const config_file_name = "config.json";
const default_port = 8000;
const default_db_type = "sqlite";

// Global variables
let config = {};


// --- Default config ---

const default_config = {

    server: {
        port: 8000
    },
    
    database: {
        type: "sqlite"
    },

    auth: {
        jwtSecret: '1234567890',
        tokenExpiry: '1h'
      },
};


// --- Functions ---

function loadConfig() {
    
    let user_config;

    // Parse
    try {
        // Get user config
        user_config = JSON.parse(fs.readFileSync(path.join(config_folder, config_file_name)));

        // Merge default and user configs (default values)
        config = { ...default_config, ...user_config };
    }
    catch (err) {
        console.error("Error loading configuration, using the default settings");
    }

    return config;
}

async function getConfig() {
    return config;
}

async function getJWTSecret() {
    return config.JWT_Secret || process.env.JWT_Secret;
}

async function getVersion() {
    // Could be done with process.env.npm_package_version
    // but may not work without without npm
    return version;
}


// --- Exports ---
module.exports = { loadConfig, getJWTSecret, getConfig, getVersion };