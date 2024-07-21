import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { genres } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <ul key={genre.id}>{genre.name}</ul>
      ))}
    </div>
  );
};

export default GenreList;
