// import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

// Create a generic data fetching hook
// const useGenres = () => useData<Genre>("/genres");

// Shipping Static data
// 因为 GenreList 导入该模块时解构了这三个属性，所以为了最小化影响，构建这样的对象
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
