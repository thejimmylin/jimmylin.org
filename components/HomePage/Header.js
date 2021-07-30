import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import LightFilter from "./Header/LightFilter";
import wall from "../../public/wall-1440x810.jpg";

const Header = ({
  isDark,
  setIsDark,
  windowScrollY,
  scrollIntoMain,
  scrollIntoFooter,
}) => {
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="relative h-screen font-pretty">
      <LightFilter isDark={isDark} windowScrollY={windowScrollY} />
      <div
        className="absolute w-full h-screen -z-10 bg-graywhite-99"
        style={{ transform: `translateY(${windowScrollY / 2}px)` }}
      >
        <div
          className={classNames(
            "relative",
            "w-full",
            "h-screen",
            "transition-filter",
            "ease-out",
            "duration-2000",
            { "blur-2xl": !loaded }
          )}
        >
          <Image
            src={wall}
            alt="wall"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
      <div className="absolute h-12 right-8 top-5">
        <div className="flex items-center self-center animate-fadein-1000-700">
          <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="absolute block w-6 h-6 border-4 rounded-full appearance-none cursor-pointer focus:outline-none checked:right-0 bg-graywhite-198 checked:bg-white border-graywhite-594"
              onClick={toggleDarkMode}
            />
            <label
              htmlFor="toggle"
              className="block h-6 overflow-hidden rounded-full cursor-pointer bg-graywhite-594"
            ></label>
          </div>
          <label htmlFor="toggle" className="text-xl text-white">
            {isDark ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </label>
        </div>
      </div>
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/5">
        <p className="mb-4 text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-graywhite-660 hover:text-white text-center whitespace-nowrap">
          <span className="animate-fadein-1000-0">I</span>
          <span className="animate-fadein-1000-50">'</span>
          <span className="animate-fadein-1000-100">m</span>
          <span className="animate-fadein-1000-150"> </span>
          <span className="animate-fadein-1000-200">J</span>
          <span className="animate-fadein-1000-250">i</span>
          <span className="animate-fadein-1000-300">m</span>
          <span className="animate-fadein-1000-350">m</span>
          <span className="animate-fadein-1000-400">y</span>
          <span className="animate-fadein-1000-450"> </span>
          <span className="animate-fadein-1000-500">L</span>
          <span className="animate-fadein-1000-550">i</span>
          <span className="animate-fadein-1000-600">n</span>
          <span className="animate-fadein-1000-650">.</span>
        </p>
        <p className="mb-16 text-sm text-center text-graywhite-660 hover:text-white">
          <span className="animate-fadein-2000-1500">
            Welcome to my personal page.
          </span>
        </p>
        <div className="flex">
          <a
            href="https://github.com/j3ygithub"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-32 h-12 m-1 bg-graywhite-660 hover:bg-white animate-fadein-1000-900"
          >
            <span className="mr-1 text-2xl">
              <i className="bi bi-github"></i>
            </span>
            Github
          </a>
          <button
            onClick={scrollIntoFooter}
            className="w-32 h-12 m-1 border-2 focus:outline-none text-graywhite-660 hover:text-white border-graywhite-660 hover:border-white text-md animate-fadein-1000-800"
          >
            Contact
          </button>
        </div>
      </div>
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-4/5">
        <span
          onClick={scrollIntoMain}
          className="text-4xl text-graywhite-594 hover:text-white cursor-pointer animate-fadein-1000-900 transform hover:translate-y-0.5"
        >
          <i className="bi bi-chevron-compact-down"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
