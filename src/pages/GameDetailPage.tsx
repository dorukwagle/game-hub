import { useParams } from "react-router-dom";

const GameDetailPage = () => {  
    const param = useParams();
  return (
    <div>{param.toString()}</div>
  )
}
export default GameDetailPage;