import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import LightFilter from "./LightFilter";
import wall from "../public/static/wall-1440x810.jpg";

const HeroBanner = ({ useIsDark, windowScrollY, headerRef }) => {
  const [loaded, setLoaded] = useState(false);
  const scrollIntoHeader = () => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="relative h-screen font-sans">
      <LightFilter useIsDark={useIsDark} windowScrollY={windowScrollY} />
      <div
        className="absolute -z-10 h-screen w-full bg-night"
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
            onLoadingComplete={() => setLoaded(true)}
            priority={true}
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-2/5 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
        <p className="xs:text-5xl mb-4 whitespace-nowrap text-center text-4xl font-semibold text-light sm:text-6xl">
          <span className="animate-fadein-1000-0">I</span>
          <span className="animate-fadein-1000-50">&apos;</span>
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
        <p className="mb-16 text-center text-light">
          <span className="animate-fadein-2000-1500">Welcome to my blog.</span>
        </p>
        <div className="flex">
          <Link href="/posts">
            <a className="m-1 flex h-12 w-32 animate-fadein-1000-900 items-center justify-center bg-light hover:bg-white">
              My posts
            </a>
          </Link>
          <button onClick={scrollIntoHeader} className="text-md m-1 h-12 w-32 animate-fadein-1000-800 border-2 border-light text-light hover:border-white hover:text-white focus:outline-none">
            About me
          </button>
        </div>
      </div>
      <div className="absolute left-1/2 top-4/5 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
        <span
          onClick={scrollIntoHeader}
          className="transform animate-fadein-1000-900 cursor-pointer text-2xl text-light hover:translate-y-0.5 hover:text-white"
        >
          <i className="bi bi-chevron-compact-down"></i>
        </span>
      </div>
    </header>
  );
};

export default HeroBanner;
