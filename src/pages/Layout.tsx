import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
      <div className="grid grid-rows-1 ">
          <div className="sticky top-0 z-50">
              <NavBar />
          </div>
          <Outlet />
      </div>
  );
}

export default Layout;