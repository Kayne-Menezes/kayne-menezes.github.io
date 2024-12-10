import * as Path from 'node:path'
import * as URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'), // Use dev.sqlite3 for development
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:', // Use an in-memory database for testing
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'), // Migrations are in the same db folder
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'), // Seeds are in the same db folder
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, 'dev.sqlite3'), // Use dev.sqlite3 for production as well
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },
}

export default config
