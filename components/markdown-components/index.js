import PreDark from "./PreDark";
import PreLight from "./PreLight";

const P = ({ children }) => (
  <p className="my-5 first:mt-0 last:mb-0">{children}</p>
);

const H1 = ({ children }) => (
  <h1 className="my-8 text-4xl font-semibold first:mt-0 last:mb-0">
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 className="my-8 text-2xl font-semibold first:mt-0 last:mb-0">
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="my-8 text-lg font-semibold first:mt-0 last:mb-0">
    {children}
  </h3>
);

const Ol = ({ children }) => <ol className="list-decimal">{children}</ol>;

const Ul = ({ children }) => <ul className="list-disc">{children}</ul>;

const Li = ({ children }) => (
  <li className="my-5 first:mt-0 last:mb-0">{children}</li>
);

const Blockquote = ({ children }) => {
  return (
    <div className="relative">
      <blockquote className="my-5 rounded-sm bg-paper-light p-5 pt-1 text-sm italic shadow-sm dark:bg-night-light">
        <span className="absolute top-0 left-0 -translate-y-1/4 transform select-none text-3xl text-pencil dark:text-moonlight">
          “
        </span>
        {children}
      </blockquote>
    </div>
  );
};

const Table = ({ children }) => (
  <div className="my-8 overflow-x-scroll shadow-sm first:mt-0 last:mb-0">
    <table className="min-w-full whitespace-nowrap bg-paper-light text-sm dark:bg-night-light">
      {children}
    </table>
  </div>
);

const Thead = ({ children }) => <thead>{children}</thead>;

const Tbody = ({ children }) => <tbody>{children}</tbody>;

const Tr = ({ children }) => <tr>{children}</tr>;

const Th = ({ children }) => (
  <th className="border border-gray-100 py-2.5 px-5 text-left align-top dark:border-gray-900">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="border border-gray-100 py-2.5 px-5 dark:border-gray-900">
    {children}
  </td>
);

const A = ({ children, href }) => (
  <a
    className="break-words text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Code = ({ children }) => (
  <code className="text-sm text-purple-500 dark:text-pink-500">
    <span className="select-none">`</span>
    {children}
    <span className="select-none">`</span>
  </code>
);

const getMarkdownComponents = ({ isDark }) => ({
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  ol: Ol,
  ul: Ul,
  li: Li,
  blockquote: Blockquote,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  a: A,
  code: Code,
  pre: isDark ? PreDark : PreLight,
});

export {
  P,
  H1,
  H2,
  H3,
  Ol,
  Ul,
  Li,
  Blockquote,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  A,
  Code,
  PreDark,
  PreLight,
  getMarkdownComponents,
};
