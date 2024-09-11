import { GameQuery } from "../App";
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
    rating_top: number;
    background_image: string;
    parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
    // 'selectedGenre' is possibly 'null'
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            },
        },
        [gameQuery]
    );

export default useGames;
