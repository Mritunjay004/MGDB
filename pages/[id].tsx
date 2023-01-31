import { basicFetch } from "@/api/fetchFunctions";
import { Cast, Credits, Crew, Movie } from "@/api/types";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Grid from "@/components/Grid/Grid";
import Header from "@/components/Header";
import MovieInfo from "@/components/MovieInfo";
import { creditsUrl, IMAGE_BASE_URL, movieUrl, POSTER_SIZE } from "@/config";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  movie: Movie;
  directors: Crew[];
  cast: Cast[];
};

const Movie: NextPage<Props> = ({ movie, cast, directors }) => (
  <main>
    <Header />
    <Breadcrumb title={movie.original_title} />
    <MovieInfo
      thumbUrl={
        movie.poster_path
          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
          : "/no_image.jpg"
      }
      rating={movie.vote_average}
      backgroundImgUrl={
        movie.backdrop_path
          ? IMAGE_BASE_URL + POSTER_SIZE + movie.backdrop_path
          : "/no_image.jpg"
      }
      title={movie.original_title}
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
      directors={directors}
      year={movie.release_date.split("-")[0]}
      summary={movie.overview}
    />
    <Grid className="p-4 max-w-7xl m-auto" title="Actors">
      {cast.map((actor) => (
        <Card
          key={actor.credit_id}
          imgUrl={
            actor.profile_path
              ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
              : "/no_image.jpg"
          }
          title={actor.name}
          subtitle={actor.character}
        />
      ))}
    </Grid>
  </main>
);

export default Movie;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const movieEndpoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const movie = await basicFetch<Movie>(movieEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  const directors = credits.crew.filter((member) => member.job === "Director");

  return {
    props: {
      movie,
      directors,
      cast: credits.cast,
    },
    revalidate: 60 * 60 * 24,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
