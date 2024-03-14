import Signup from "./Signup";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Half with Existing Content */}
      <section className="bg-gray-900 text-white lg:w-1/2 p-8">
        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-3 p-4">
              Empower your business with Iron Workflow.
              <span className="sm:block">
                {" "}
                Your solution for seamless operations and unparalleled
                efficiency{" "}
              </span>
            </h1>
            <p className="mx-auto max-w-xl sm:text-xl/relaxed">
              Iron Workflow streamlines HR and budget management processes with
              intuitive software solutions tailored to your company's needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#">
                Get Started
              </a>

              <Link to={"/about"}>
                <p className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 text-white lg:w-1/2 p-8">
        <Signup />
      </div>
    </div>
  );
}

export default MainPage;
