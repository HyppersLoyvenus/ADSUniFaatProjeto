import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        logging: console.log, // tirar dps
    }
);

export default sequelize;