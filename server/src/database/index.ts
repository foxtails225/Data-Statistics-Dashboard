import sql from 'mssql';

const { MSSQL_HOST, MSSQL_USERNAME, MSSQL_PASSWORD, MSSQL_DATABASE } = process.env;

const connect = (db?: string) => {
  const database = db ? db : MSSQL_DATABASE;
  const connection = new sql.ConnectionPool(`mssql://${MSSQL_USERNAME}:${MSSQL_PASSWORD}@${MSSQL_HOST}/${database}`);
  return connection;
};

export default connect;
