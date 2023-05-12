import { ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres"


const GenreList = () => {
    const { data, error, isLoading } = useGenres();

  return (
    <ListGroup>
        {error && <ListGroup.Item>{error}</ListGroup.Item>}
        {data.length > 0 && data.map(genre => <ListGroup.Item key={genre.id}>{genre.name}</ListGroup.Item>)}
    </ListGroup>
  )
}
export default GenreList