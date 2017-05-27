module.exports = {
  debug: true,
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '48106shiftb',
    database: 'nodejs_chat',
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + '/config/migrations'
  }
}
