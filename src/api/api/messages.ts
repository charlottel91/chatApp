import messengerApiClient from "./client";
import { Message } from "src/types/message";

export function getMessagebyId(id: number | null) {
  return messengerApiClient
    .get<Message[]>(`http://localhost:3005/messages?conversationId=${id}`)
    .then((response) => response.data);
}
