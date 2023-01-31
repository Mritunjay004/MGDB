export type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_title: string;
  budget: number;
  revenue: number;
  runtime: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  character: string;
  name: string;
  credit_id: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: string;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};
