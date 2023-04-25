/** @format */

import { connect, connection } from "mongoose";

const con = {
  isConected: false,
};

export const dbConect = async () => {
  if (con.isConected) return;

  const db = await connect(process.env.MONGO_URL);
  con.isConected = db.connections[0].readyState;
};

connection.on("connected", () => {
  console.log("mongo is connected");
});

connection.on("error", (err) => {
  console.log("error-----------------------------------------------" + err);
});
