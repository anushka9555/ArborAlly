import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Plant() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px- px-4">
       <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Plants make for the best house companions, suitable for all your 
            moods and every aesthetic. Ugaoo brings you the widest variety of
            plants to choose from so you can buy plants online from the comfort
            of your home!
          </p>
          <Link to="/">
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300">
              Back
            </button>
          </Link>
          
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      
    </div>
    </>
  );
}

export default Plant;

