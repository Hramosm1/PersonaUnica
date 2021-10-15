import { config, ConnectionPool } from "mssql";

const sqlconfig: config = {
  server: process.env.PU_SERVER || "",
  database: process.env.PU_DATABASE || "",
  user: process.env.PU_USER || "",
  password: process.env.PU_PASSWORD || "",
  port: 1433,
  options: { encrypt: false, trustedConnection: true },
};

export async function GetPool(): Promise<ConnectionPool> {
  const connectionPool = new ConnectionPool(sqlconfig);
  const pool = await connectionPool.connect();
  return pool;
}
