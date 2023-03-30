import { DataSource } from "typeorm"
import "dotenv/config"
import 'reflect-metadata'


export const connectionSource = new DataSource({
    type: "mysql",
    host: String(process.env.HOST_ORM),
    port: Number(process.env.PORT_ORM),
    username: String(process.env.USERNAME_ORM),
    password: String(process.env.PASSWORD_ORM),
    database: String(process.env.DATABASE_ORM),
    migrations: [`./typeorm/migrations/**/*.ts`],
    logging: false,
    synchronize: Boolean(process.env.SYNCHRONIZE_ORM),
});
