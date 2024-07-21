import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <div>
      {data.map((genre) => (
        <ul key={genre.id}>{genre.name}</ul>
      ))}
    </div>
  );
};

export default GenreList;
