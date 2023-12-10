import messengerApiClient from "./client";
import { Message } from "src/types/message";

export function getMessagebyId(id: number | null) {
  return messengerApiClient
    .get<Message[]>(`http://localhost:3005/messages?conversationId=${id}`)
    .then((response) => response.data);
}

export function createMessage({
  id,
  message,
}: {
  id: number;
  message: Omit<{ body: string; timestamp: number; authorId: number }, "id">;
}) {
  return messengerApiClient
    .post<Message[]>(`http://localhost:3005/messages?conversationId=${id}`, {
      body: message.body,
      timestamp: message.timestamp,
      authorId: message.authorId,
      conversationId: id,
    })
    .then((response) => response.data);
}
