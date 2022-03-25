import Link from "next/link";
import classNames from "classnames";

const getTitleClassNames = (postIndex) => {
  const basic = [
    "text-2xl",
    "font-semibold",
    "text-transparent",
    "bg-clip-text",
    "bg-gradient-to-br",
  ];
  if (postIndex % 2 === 0) {
    const extra = [
      "from-blue-600",
      "to-blue-400",
      "hover:from-blue-500",
      "hover:to-blue-300",
      "dark:from-yellow-400",
      "dark:to-yellow-200",
      "dark:hover:from-yellow-300",
      "dark:hover:to-yellow-100",
    ];
    return classNames(basic, extra);
  } else {
    const extra = [
      "from-blue-700",
      "to-blue-400",
      "hover:from-blue-600",
      "hover:to-blue-300",
      "dark:from-yellow-500",
      "dark:to-yellow-200",
      "dark:hover:from-yellow-400",
      "dark:hover:to-yellow-100",
    ];
    return classNames(basic, extra);
  }
};

const PostCover = ({ post, index }) => {
  return (
    <div
      key={post.slug}
      className="my-8 rounded-md bg-paper-light shadow-sm transition-bg dark:bg-night-light"
    >
      <article className="p-8">
        {post.frontmatter.isDraft && (
          <span className="text-xs text-pencil dark:text-moonlight">
            This is a draft that may be updated at any time.
          </span>
        )}
        <h2 className={getTitleClassNames(index)}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.frontmatter.title}</a>
          </Link>
        </h2>
        <p className="mb-5 text-xs text-pencil dark:text-moonlight">
          <span className="text-pencil dark:text-moonlight">
            {post.frontmatter.author || "Jimmy Lin"}
          </span>
          {" · "}
          {post.frontmatter.createdAt}
        </p>
        {post.frontmatter.subtitle && (
          <p className="mb-5 text-sm text-pencil dark:text-moonlight">
            {post.frontmatter.subtitle}
          </p>
        )}
        <p className="flex justify-end text-blue-400 hover:text-blue-300 dark:text-yellow-200 dark:hover:text-yellow-100">
          <Link href={`/posts/${post.slug}`}>
            <a>Read more</a>
          </Link>
        </p>
      </article>
    </div>
  );
};

const SorryNoPostCover = () => {
  const index = 0;
  return (
    <div className="my-8 rounded-md bg-paper-light shadow-sm transition-bg dark:bg-night-light">
      <article className="p-8">
        <h2 className={classNames([getTitleClassNames(index), "mb-5"])}>
          Sorry, no posts found.
        </h2>
        <p className="mb-5 text-sm text-pencil dark:text-moonlight">
          Maybe you want to try searching for something else?
        </p>
      </article>
    </div>
  );
};

const PostCovers = ({ postOutlines, textSearched }) => {
  const relatedPosts = postOutlines.filter((post) => {
    const title = post?.frontmatter?.title || "";
    return title.toLowerCase().includes(textSearched.toLowerCase());
  });
  if (relatedPosts.length === 0) {
    return <SorryNoPostCover />;
  } else {
    return relatedPosts.map((post, index) => (
      <PostCover key={post.slug} post={post} index={index} />
    ));
  }
};

export default PostCovers;
