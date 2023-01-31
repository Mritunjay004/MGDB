import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "./fetchFunctions";
import { Movies } from "./types";

// react query  mein first argument is key and second is fetch function and third is options

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(
    ["movies", search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
