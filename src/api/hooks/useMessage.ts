import { UseQueryOptions, useQuery } from "react-query";
import { Message } from "src/types/message";
import { MessageAPI } from "../api";

export function useMessagesById(
  id: number | null,
  options?: UseQueryOptions<any>
) {
  return useQuery<Message[]>(
    ["message", id],
    () => MessageAPI.getMessagebyId(id),
    {
      keepPreviousData: true,
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      notifyOnChangeProps: "tracked",
      ...options,
    }
  );
}
