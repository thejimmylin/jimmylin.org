const PostLayout = ({ children }) => {
  return (
    <>
      <article className="prose dark:prose-dark max-w-none p-8">
        {children}
      </article>
    </>
  );
};

export default PostLayout;
