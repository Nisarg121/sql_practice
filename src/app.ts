import { client } from "./database";
import { createEmployeesTable } from "./query";

async function executeQuery(query: string, value: any[]) {
  const res = await client.query(query, value);

  console.log(res.rows);
}

executeQuery(`ALTER TABLE employees ADD UNIQUE (email)`, []).catch((e) => console.log(e));
