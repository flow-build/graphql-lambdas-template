import { BatchedSQLDataSourceProps } from "@nic-jennings/sql-datasource";

type KnexConnection = {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
};

export type KnexConfig = { client: string; connection: KnexConnection };

export type BatchedDataSourceProps = {
  knexConfig: KnexConfig;
  writeKnexConfig?: BatchedSQLDataSourceProps["writeKnexConfig"];
  cache?: BatchedSQLDataSourceProps["cache"];
  context?: BatchedSQLDataSourceProps["context"];
};

// eslint-ignore-next-line @typescript-eslint/no-explicit-any
export type LooseObject = {
  // eslint-ignore-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}