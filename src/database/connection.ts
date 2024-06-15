import type { knex } from "knex";

const knexFile = require("/Source/Workspace/Demo-Credit/knexfile");
const environment = process.env.NODE_ENV || "development";

export default knex(knexFile[environment]);
// import Knex from "knex";
// import knexConfig from "./knexfile";
// const environment = process.env.NODE_ENV || "development";
// const config = knexConfig[environment];

// const db = Knex(config);

// export default db;
