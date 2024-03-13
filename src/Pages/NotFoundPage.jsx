import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-10 px-4 py-10 flex flex-col lg:flex-row md:gap-10 gap-6">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
          <div className="text-center lg:text-left">
            <h1 className="my-2 text-gray-200 font-bold text-2xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="my-2 text-gray-200">
              Sorry about that! Please visit our homepage to get where you need
              to go.
            </p>
            <Link to={"/"}>
              <button className="w-full md:w-auto my-2 border rounded py-2 px-4 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Take me there!
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/G9DC8S0/404-2.png"
            alt="404 Image"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
