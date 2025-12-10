import type { TUser } from "./types/user.type";

export const GET_LIST_USER = "https://jsonplaceholder.typicode.com/users";

export const getListUser = async (): Promise<TUser[]> => {
  const response = await fetch(GET_LIST_USER);
  return response.json();
};
