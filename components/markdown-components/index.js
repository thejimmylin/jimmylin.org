import PreDark from "./PreDark";
import PreLight from "./PreLight";

const P = ({ children }) => <p className="my-5 first:mt-0 last:mb-0">{children}</p>;

const H1 = ({ children }) => (
  <h1 className="text-4xl font-semibold my-8 first:mt-0 last:mb-0">{children}</h1>
);

const H2 = ({ children }) => (
  <h2 className="text-2xl font-semibold my-8 first:mt-0 last:mb-0">{children}</h2>
);

const H3 = ({ children }) => (
  <h3 className="text-lg font-semibold my-8 first:mt-0 last:mb-0">{children}</h3>
);

const Ol = ({ children }) => <ol className="list-decimal">{children}</ol>;

const Ul = ({ children }) => <ul className="list-disc">{children}</ul>;

const Li = ({ children }) => <li className="my-5 first:mt-0 last:mb-0">{children}</li>;

const Blockquote = ({ children }) => {
  return (
    <div className="relative">
      <blockquote className="text-sm italic bg-paper-light dark:bg-night-light shadow-sm rounded-sm pt-6 px-5 pb-1 my-5 first:mt-0 last:mb-0">
        <span className="text-3xl text-pencil dark:text-moonlight select-none absolute top-0 left-0 transform -translate-y-1/4">
          “
        </span>
        {children}
      </blockquote>
    </div>
  );
};

const Table = ({ children }) => (
  <div className="overflow-x-scroll shadow-sm my-8 first:mt-0 last:mb-0">
    <table className="text-sm bg-paper-light dark:bg-night-light min-w-full whitespace-nowrap">
      {children}
    </table>
  </div>
);

const Thead = ({ children }) => <thead>{children}</thead>;

const Tbody = ({ children }) => <tbody>{children}</tbody>;

const Tr = ({ children }) => <tr>{children}</tr>;

const Th = ({ children }) => (
  <th className="py-2.5 px-5 align-top text-left border border-gray-100 dark:border-gray-900">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="py-2.5 px-5 border border-gray-100 dark:border-gray-900">
    {children}
  </td>
);

const A = ({ children, href }) => (
  <a
    className="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300 break-words"
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
