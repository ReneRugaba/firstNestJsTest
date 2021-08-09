import { createConnection } from "typeorm";

export const databaseprovider = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: async () =>
      await createConnection({
        type: "mysql",
        host: process.env.HOST,
        port: parseInt(process.env.PORT),
        username: process.env.USER_NAME,
        password: process.env.PASS_WORD,
        database: process.env.DATA_BASE,
        entities: [__dirname + "/../**/*.entity{.js,.ts}"],
        synchronize: true,
      })
        .then(() =>
          console.log(
            "connection effective sur le port " + process.env.APP_PORT
          )
        )
        .catch((err) => console.log(err)),
  },
];
