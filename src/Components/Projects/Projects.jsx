import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "../TiltedCard";
import MealifyImg from "../../assets/images/mealify.png";
import WeatherAppImg from "../../assets/images/weatherapp.png";
import BookmarkerImg from "../../assets/images/bookmarker.png";
import ToDoListImg from "../../assets/images/todolist.png";
import SocialAppImg from "../../assets/images/socialapp.png";
import FreshCArtImg from "../../assets/images/freshcart.png";
import { Icon } from "@iconify-icon/react";

const Projects = () => {
  const projectData = [
    {
      imageSrc: MealifyImg,
      altText: "Mealify",
      captionText: "Mealify",
      technologies: "HTML | CSS ",
      description:
        "A static, visually-appealing recipe / meal showcase built with only HTML and CSS — responsive layout, beautiful typography, and CSS animations.",
      liveDemo: "https://rahma-youssef.github.io/MeaLify/",
      githubRepo: "https://github.com/Rahma-Youssef/MeaLify"
    },
    {
      imageSrc: BookmarkerImg,
      altText: "Bookmarker",
      captionText: "Bookmarker",
      technologies: "HTML | Bootstrap | JavaScript",
      description: "A simple bookmarking app built with Vanilla JavaScript that lets users save, visit, and delete their favorite website links using local storage.",
      liveDemo: "https://rahma-youssef.github.io/Bookmark/",
      githubRepo: "https://github.com/Rahma-Youssef/Bookmark"
    },
    {
      imageSrc: ToDoListImg,
      altText: "To Do List",
      captionText: "To Do List",
      technologies: "HTML | Bootstrap | JavaScript",
      description: "A simple and interactive task manager built with Vanilla JavaScript, allowing users to add, edit, and delete tasks directly in the browser.",
      liveDemo: "https://rahma-youssef.github.io/To-do-List/",
      githubRepo: "https://github.com/Rahma-Youssef/To-do-List"
    },
    {
      imageSrc: WeatherAppImg,
      altText: "Weather App",
      captionText: "Weather App",
      technologies: "HTML | Bootstrap | JavaScript | WeatherAPI ",
      description:
        "A real-time weather application built with Vanilla JavaScript and WeatherAPI, displaying temperature, condition, and location dynamically.",
      liveDemo: "https://rahma-youssef.github.io/Weather-App/",
      githubRepo: "https://github.com/Rahma-Youssef/Weather-App"
    },

    {
      imageSrc: SocialAppImg,
      altText: "Social App",
      captionText: "Social App",
      technologies: "React.js | Tailwind CSS | React Router | React Hook Form | Zod | Context API | Axios   ",
      description:
        "A modern social media app built with React where users can add and delete posts, manage comments, and register or log in with form validation using React Hook Form and Zod.",
      liveDemo: "https://social-app-ten-sooty.vercel.app/login",
      githubRepo: "https://github.com/Rahma-Youssef/SocialApp"
    },
    {
      imageSrc: FreshCArtImg,
      altText: "FreshCart App",
      captionText: "FreshCart App",
      technologies: "Next.js | Tailwind CSS | TypeScript |  App Router | Context API ",
      description: `A fast and modern e-commerce web app built with Next.js and Tailwind CSS.Users can browse products, manage their cart, and complete checkout with a smooth and responsive experience`,
      liveDemo: "https://freshcart-virid.vercel.app/",
      githubRepo: "https://github.com/Rahma-Youssef/freshcart"
    },

  ];

  return (
    <section
      id="projects"
      className="bg-slate-50 dark:bg-neutral-900 py-20 overflow-hidden text-black dark:text-white"
    
    >
      <div className=" md:w-[80%] md:p-0 px-10  mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium mb-16 ">
          Projects
        </h1>

        <div className="flex flex-col gap-28 mt-5">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* 🖼️ Project Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center w-full md:w-1/2"
              >
                <div
                  className="w-[300px] h-[200px] sm:w-[300px] sm:h-[220px] md:w-[380px] md:h-[260px] lg:w-[450px] lg:h-[300px]"
                >
                  <TiltedCard
                    imageSrc={project.imageSrc}
                    altText={project.altText}
                    captionText={project.captionText}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                </div>
              </motion.div>


              {/* 📝 Project Info */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full md:w-1/2  md:text-left"
              >
                <h2 className="text-2xl lg:text-3xl text-center md:text-left font-bold mb-4">
                  {project.captionText}
                </h2>
                <p className="text-indigo-500 md:text-lg text:sm text-left mb-3 font-bold  ">Tech Stack : <span className="text-gray-600 dark:text-gray-300 md:text-base text-xs">{project.technologies}</span></p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>



                <div className="flex justify-center md:justify-start gap-6 mt-6">
                  {/* 🌐 Live Demo Button */}

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm lg:text-base lg:gap-2 gap-1 px-2 font-medium lg:px-6 lg:py-3 rounded-xl lg:font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Icon icon="mdi:link-variant" width="22" />
                    Live Demo
                  </a>

                  {/* 🧠 GitHub Repo Button */}

                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 md:px-6 py-3 px-3 rounded-xl font-semibold border border-gray-400 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all duration-300"
                  >
                    <Icon icon="mdi:github" width="22" />
                    GitHub
                  </a>
                </div>



              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
