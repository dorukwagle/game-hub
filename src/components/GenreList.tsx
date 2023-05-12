import { ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres"


const GenreList = () => {
    const { genres, error, isLoading } = useGenres();

  return (
    <ListGroup>
        {error && <ListGroup.Item>{error}</ListGroup.Item>}
        {genres.length > 0 && genres.map(genre => <ListGroup.Item key={genre.id}>{genre.name}</ListGroup.Item>)}
    </ListGroup>
  )
}
export default GenreList