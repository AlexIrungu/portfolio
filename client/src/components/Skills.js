import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Skills() {
  return (
    <div>
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-5">Skills</h2>
        <div className="mb-3">I enjoy diving into and learning new things. Here's a list of technologies I've worked with</div>
        <ul className="flex flex-wrap list-none p-0">
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-html5"></i> HTML5
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-css3-alt"></i> CSS3
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-js-square"></i> JavaScript ES6
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-react"></i> React
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-node"></i> Node.js
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-npm"></i> npm
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-php"></i> PHP
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-ruby"></i> Ruby
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fas fa-database"></i> PostgreSQL
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fas fa-database"></i> SQLite
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 hover:scale-105 transition-transform duration-300">
            <i className="fab fa-python"></i> Python
          </li>
        </ul>
        <div className="mb-3 mt-6">Workflow</div>
        <ul className="list-none">
          <li className="flex items-start mb-2">
            <span className="mr-2">
              <i className="fas fa-check"></i>
            </span>
            Frontend Web Design using React and JavaScript
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">
              <i className="fas fa-check"></i>
            </span>
            Backend Web Design using Ruby / Ruby on Rails
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">
              <i className="fas fa-check"></i>
            </span>
            Deployment and Maintaining of Sites
          </li>
          <li className="flex items-start mb-2">
            <span className="mr-2">
              <i className="fas fa-check"></i>
            </span>
            Looking At and Editing Existing Sites upon Request
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
