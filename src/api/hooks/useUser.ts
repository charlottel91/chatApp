import { QueryClient, UseQueryOptions, useQuery } from "react-query";
import { UserAPI } from "../api";
import { User } from "src/types/user";

export function useUsers(options?: UseQueryOptions<User[]>) {
  return useQuery(["users"], () => UserAPI.getUsers(), {
    keepPreviousData: true,
    staleTime: 5000,
    refetchOnWindowFocus: false,
    ...options,
  });
}

export async function prefetchUsers(queryClient: QueryClient) {
  return queryClient.fetchQuery(
    ["users"],
    () => UserAPI.getUsers(),
    { staleTime: 28800000 }, // 8 hours
  );
}

export function useUsersById(id: number) {
  return useQuery(["user", id], () => UserAPI.getUser(id), {
    keepPreviousData: true,
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });
}
