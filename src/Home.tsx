import { Button } from "flowbite-react";


const Home = () => {
  return (
      <div>
          <div className="flex flex-row justify-between ">
              <div className="text-black text-4xl font-extrabold">hello</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block">
                  <Button color="purple">left panel</Button>
              </div>
              <div className="">
                  <Button color="purple">Right panel</Button>
              </div>
          </div>
      </div>
  );
}

export default Home;
