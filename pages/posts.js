import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";
import PostCovers from "../components/PostCovers";
import { getAllPostOutlines, sortPostOutlines } from "../markdowns/posts";

const Posts = ({ useIsDark, postOutlines }) => {
  const useTextSearch = useState("");
  const [textSearched, _setTextSearched] = useTextSearch;
  const [isDark, _setIsDark] = useIsDark;
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <SearchBar useTextSearch={useTextSearch} />
        <PostCovers
          isDark={isDark}
          postOutlines={postOutlines}
          textSearched={textSearched}
        />
      </MainLayout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postOutlines = getAllPostOutlines();
  sortPostOutlines(postOutlines);
  return {
    props: { postOutlines },
  };
};

export default Posts;
