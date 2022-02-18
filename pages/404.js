import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import { H1, P } from "../components/markdown-components";

const Custom404 = ({ useIsDark }) => {
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <div className="text-[128px]">404</div>
          <H1>Sorry, no pages found.</H1>
          <P>
            Maybe you want to go back to the{" "}
            <span className="text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300">
              <Link href="/">
                <a>homepage</a>
              </Link>
            </span>
            ?
          </P>
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Custom404;
