import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    const notFound = isRouteErrorResponse(error);

    return (
        <>  
            <NavBar />
            <div className="text-bold text-xl">Oops...!</div>
            <div>{notFound ? "The page doesn't yet exists..." : "Something went wrong!"}</div>
        </>
    );
};
export default ErrorPage;
