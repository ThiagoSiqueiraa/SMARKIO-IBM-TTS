import config from './src/config/database';

module.exports = {
  type: 'mysql',
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.pass,
  database: config.db,
  entities: ['src/modules/**/infra/typeorm/entities/*.{js,ts}'],
  migrations: ['src/shared/infra/typeorm/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'src/shared/infra/typeorm/migrations',
    entities: ['src/modules/**/infra/typeorm/entities'],
  },
};
