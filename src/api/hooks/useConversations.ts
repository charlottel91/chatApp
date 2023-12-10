import { useQuery } from "react-query";
import { ConversationsAPI } from "../api";
import { Conversation } from "src/types/conversation";

export function useConversationsBySender(id: number) {
  return useQuery<Conversation[]>(
    ["conversations", id],
    () => ConversationsAPI.getConversationsbySender(id),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      notifyOnChangeProps: "tracked",
    },
  );
}
