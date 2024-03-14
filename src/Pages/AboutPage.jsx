import MateusCard from "../Components/devCards/MateusCard";
import FernandaCard from "../Components/devCards/FernandaCard";
function AboutPage() {
  return (
    <div className="flex items-center  justify-around	">
      <div className="w-80 text-justify">
        <article className="text-4xl mt-16 mb-20">
          <b>Iron WorkFlow</b>
        </article>

        <p className="text-lg">
          Welcome to our MERN stack masterpiece, the result of relentless
          dedication by developers Mateus Lima and Maria Fernanda. This project
          seamlessly integrates MongoDB, Express.js, React, and Node.js,
          showcasing real-time interactions, a user-friendly interface, and
          secure authentication. Join us in exploring the culmination of our
          bootcamp journey, where challenges were conquered, and innovation
          thrived. Dive into the experience crafted by Mateus and Maria, a
          testament to their passion for web development.
        </p>
      </div>
      <MateusCard />
      <FernandaCard />
    </div>
  );
}

export default AboutPage;
