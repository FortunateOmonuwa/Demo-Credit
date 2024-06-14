import db from "../database/connection";
export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export const createUser = async (user: User) => {
  const [id] = await db("users").insert(user);
  return id;
};

export const getUserByEmail = async (email: string) => {
  return await db("users").where({ email }).first();
};
