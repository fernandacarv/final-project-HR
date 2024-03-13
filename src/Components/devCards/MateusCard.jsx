import React from "react";
import Link from "react-router-dom";

export default function MateusCard() {
  return (
    <div>
    <div className="flex p-5 w-700 border-5 border-silver rounded-md shadow-lg">
        <div className="flex flex-col items-center mt-8">
          <div className="flex mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"
              alt="Mateus"
              className="box-content w-200 rounded-full"
            />
            <div className="flex flex-col items-start">
              <ul className="flex flex-col items-start space-y-2 text-slate-700">
                <li>
                  <strong>Name:</strong> Mateus Lima
                </li>
                <li>
                  <strong>Age:</strong> 30
                </li>
                <li>
                  <strong>Occupation:</strong>Full Stack Web Developer
                </li>
                <li>
                  <strong>Location:</strong> Portugal
                </li>
                <div className="flex flex-col space-between">
                  <li>
                    <a href="mailto:farias.mateus@gmail.com">
                      <img
                        src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
                        alt="Gmail"
                        className="rounded-full"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/MateusCTO"
                      target="_blank"
                      rel="noopener noreferrer">
                      <button className="w-50 h-30 ml-10 mr-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 3c-1.5-4.5 3-5.5 2-9" />
                          <path d="M21 14a10 10 0 1 0-12 0" />
                        </svg>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mateusf-lima/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                        alt="LinkedIn"
                        className="rounded-full"
                      />
                    </a>
                  </li>
                </div>
                <li className="text-center">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
