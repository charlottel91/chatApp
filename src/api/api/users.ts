import { User } from "src/types/user";
import messengerApiClient from "./client";

export function getUsers() {
  return messengerApiClient
    .get<User[]>("http://localhost:3005/users")
    .then((response) => response.data);
}

export function getUser(id: number) {
  return messengerApiClient
    .get<User>(`http://localhost:3005/users/?id=:${id}`)
    .then((response) => response.data);
}
