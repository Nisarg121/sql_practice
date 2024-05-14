import { client } from "./database";

async function executeQuery(query: string, value: any[]) {
  const res = await client.query(query, value);

  console.log(res.rows);
}

executeQuery(``, []).catch((e) => console.log(e));
