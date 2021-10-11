import { config, ConnectionPool } from 'mssql'

const sqlconfig: config = {
    server: '192.168.8.8',
    database: 'InteligenciaDB_Fase2',
    user: 'ddonis',
    password: 'Temporal/2021',
    port: 1433,
    options: { encrypt: false, trustedConnection: true }
}

export async function GetPool ():Promise<ConnectionPool> {
    const connectionPool = new ConnectionPool(sqlconfig)
    const pool = await connectionPool.connect()
    return pool
}