import { useFetchMovies } from "@/api/fetchHooks";
import Card from "@/components/Card";
import Grid from "@/components/Grid/Grid";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Spinner from "@/components/Spinner";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "@/config";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, fetchNextPage, isFetching } =
    useFetchMovies(query);
  //   console.log(data);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchNextPage();
    }
  };

  return (
    // relative overflow-y-scroll
    <main
      className="relative overflow-y-scroll h-screen "
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />

      {/* Hero */}
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : "/no_image.jpg"
          }
          title={data.pages[0].results[0]?.title}
          text={data.pages[0].results[0]?.overview}
        />
      ) : null}

      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : "Popular Movies"
        }
      >
        {/* children */}
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`${movie.id}`}>
                  <div className="hover:opacity-80 duration-300 cursor-pointer">
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.poster_path
                          : "/no_image.jpg"
                      }
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>

      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  );
}
