import { Conversation } from "src/types/conversation";
import messengerApiClient from "./client";

export function getConversations() {
  return messengerApiClient
    .get<Conversation[]>("http://localhost:3005/conversations")
    .then((response) => response.data);
}

export function getConversationsbySender(id: number) {
  return messengerApiClient
    .get<Conversation[]>(`http://localhost:3005/conversations?senderId=${id}`)
    .then((response) => response.data);
}

export function getConversationbyId(id: number) {
  return messengerApiClient
    .get<Conversation[]>(`http://localhost:3005/conversations?id=${id}`)
    .then((response) => response.data);
}
