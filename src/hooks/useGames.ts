import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (selectedGenre: Genre | null) =>
  // 'selectedGenre' is possibly 'null'
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );

export default useGames;
