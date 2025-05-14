const sqlite = require("better-sqlite3");

class SQLiteDatabase {

    constructor(config) {
        this.config = config;
        this.db = null;
      }

    async connect() {
        try {
            this.db = new sqlite("./data/sqlite.db", { verbose: console.log });
            // this.db.pragma("journal_mode = WAL")
            console.log("Connected to SQLite");
        } catch (err) {
            console.error("Error connecting to SQLite database: ", err);
            process.exit(1);
        }
    }

    async close() {
        if (this.db && this.db.open) {
            this.db.close();
            console.debug("Closed database connection");
          }
    }

    // SELECT requests (expected return value)
    async query(sql, params = []) {
        try {
            if (params.length > 0) {
                return this.db.prepare(sql).all(params);
            } else {
                return this.db.prepare(sql).all();
            }

        } catch (err) {
            console.error("Error executing query: ", err);
            throw err;
        }
    }

    // CREATE/DROP requests (One-time statements with no expected return value)
    async exec(sql) {
        try {
            return this.db.exec(sql);
        } catch (err) {
            console.error("Error executing statement:", err)}

    }

    // INSERT/DELETE requests (no expected return value)
    async prepare(sql, params = []) {
        try {
            if (params.length > 0) {
                return this.db.prepare(sql).run(params);
            } else {
                return this.db.prepare(sql);
            }
        } catch (err) {
            console.error("Error executing prepared statement:", err)}
    }

    async exists(table, attribute, value) {
        try {
            return this.db.prepare(`SELECT COUNT(*) FROM ${table} WHERE ${attribute} = ?`).get(value)['COUNT(*)'] > 0;            
        } catch (err) {
            console.error("Error checking item existence");
        }
    }

}

module.exports = SQLiteDatabase;