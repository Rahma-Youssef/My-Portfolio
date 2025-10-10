import React from "react";
import personalPhoto from "./../../assets/images/personalphoto.png"
import TextType from "../TextType";
import TextPressure from "./../TextPressure";
import { DownloadButton } from "../download-animation";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";
import myCv from "./../../assets/files/myCv.pdf";
import LightRays from "../LightRays";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-neutral-900 text-black dark:text-white overflow-hidden px-4 sm:px-6 lg:px-12"
    >
      {/* Animated background */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <BackgroundPaths />
      </div> */}
      <div className="absolute  inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={2}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Main content */}
      <div className="z-20 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl  gap-10 py-16 sm:py-24">

        {/* Left text section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
          <TextType
            text="Hi, I'm Rahma"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold !text-black dark:!text-white"
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />

          <TextPressure
            text="Frontend Developer"
            className="uppercase font-bold tracking-tight !text-black dark:!text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)] dark:[text-shadow:2px_2px_6px_rgba(255,255,255,0.5)]"
            flex={true}
            width={true}
            weight={true}
            italic={true}
            minFontSize={28}
            maxFontSize={58}
          />

          <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed  lg:mx-0 text-gray-700 dark:text-gray-300">
            Specializing in creating clean, efficient, and visually appealing
            user interfaces. I focus on building high-performance web apps that
            combine functionality with great design.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
            <a href={myCv} download>
              <DownloadButton />
            </a>
            <a
              href="https://github.com/Rahma-Youssef"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="simple-icons:github"
                className="hover:scale-110 active:scale-95 transition-transform duration-300"
                width="45"
                height="45"
              />
            </a>
          </div>
        </div>

        {/* Right image section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated background code text */}
            <div className="absolute md:top-50 md:left-20 top-30 left-0  md:text-2xl text-sm sm:text-sm lg:text-lg xl:text-xl font-mono text-slate-500/30 dark:text-slate-400/20 whitespace-pre leading-relaxed select-none p-4 pointer-events-none">
              {`<HTML>                 <Coder>
<>FRONTEND            DEVELOPER </> 
{ }
console.log("Hello, I'm Rahma")
`}
            </div>

            {/* Main Image */}
            <img
              src={personalPhoto}
              alt="Personal"
              className="relative z-10 hover:scale-105 transition-transform duration-700 object-contain w-[260px] sm:w-[350px] md:w-[450px] lg:w-[520px] max-h-[650px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_10px_15px_rgba(255,255,255,0.2)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
