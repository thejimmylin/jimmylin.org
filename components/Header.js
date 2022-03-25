import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import Brand from "./Brand";
import DarkModeToggler from "./DarkModeToggler";
import ObservedDiv from "./ObservedDiv";

const Header = ({ useIsDark, headerRef }) => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const router = useRouter();
  const headerClassName = classNames(
    "font-sans text-ink dark:text-light transition-header duration-header sticky top-0 z-10",
    {
      "bg-paper dark:bg-night": isIntersecting,
    },
    {
      "bg-paper-light dark:bg-night-light shadow py-1.5": !isIntersecting,
    }
  );
  const postsClassName = classNames(
    "animate-fadein-1000-1000 font-semibold text-sm xs:text-lg hover:text-blue-700 dark:hover:text-yellow-300",
    {
      "text-blue-700 dark:text-yellow-300": router.asPath.startsWith("/posts"),
    },
    {
      "text-blue-600 dark:text-yellow-400": !router.asPath.startsWith("/posts"),
    }
  );
  const contactClassName = classNames(
    "animate-fadein-1000-1000 font-semibold text-sm xs:text-lg hover:text-blue-700 dark:hover:text-yellow-300",
    {
      "text-blue-700 dark:text-yellow-300":
        router.asPath.startsWith("/contact"),
    },
    {
      "text-blue-600 dark:text-yellow-400":
        !router.asPath.startsWith("/contact"),
    }
  );

  return (
    <>
      <ObservedDiv setIsIntersecting={setIsIntersecting} />
      <header className={headerClassName} ref={headerRef}>
        <div className="mx-auto max-w-screen-lg">
          <ul className="flex items-baseline justify-between gap-4 whitespace-nowrap px-8">
            <li className="xs:text-2xl select-none text-lg font-semibold hover:text-black dark:hover:text-white">
              <Brand />
            </li>
            <li className={postsClassName}>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li className={contactClassName}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="my-5 ml-auto flex items-center">
              <DarkModeToggler useIsDark={useIsDark} />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
