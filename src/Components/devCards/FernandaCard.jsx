import React from "react";

export default function FernandaCard() {
  return (
    <div className="h-90 card w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img
          src="https://res.cloudinary.com/dzqderyhm/image/upload/v1710343889/final-project/mbtsegiyctsoysef5iky.png"
          alt="Mateus"
          className=""
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Maria Fernanda</h1>
        <p>
          <strong>Age:</strong> 27
        </p>
        <p>
          <strong>Occupation:</strong> Full Stack Web Developer
        </p>
        <p>
          <strong>Location:</strong> Portugal
        </p>
        <div className="card-actions justify-between">
          <a
            href="https://github.com/fernandacarv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a href="mailto:fernandaantunesw@gmail.com">
            <img
              src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Gmail"
              className="rounded-full"
            />
          </a>

          <a
            href="https://linkedin.com/in/maria-fernanda-c-265b541a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
