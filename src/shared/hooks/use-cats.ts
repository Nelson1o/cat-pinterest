import { useInfiniteQuery } from "@tanstack/react-query";

import { getCatsList } from "../api";

export const useCats = () => {
  return useInfiniteQuery({
    queryKey: ["list", "cat"],
    queryFn: getCatsList,
    select: (data) => data.pages.flat(),
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length : undefined,
  });
};
