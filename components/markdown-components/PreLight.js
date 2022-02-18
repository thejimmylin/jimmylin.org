import Highlight, { defaultProps } from "prism-react-renderer";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const tailwindTheme = resolveConfig(tailwindConfig).theme;
const theme = {
  plain: {
    color: "#393A34",
    // Changed
    backgroundColor: tailwindTheme.colors.paper.light,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#e3116c",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#393A34",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#36acaa",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db",
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(80, 120, 140)",
      },
    },
  ],
};

const PreLight = ({ children }) => {
  const code = children[0].props.children[0].trim();
  const className = children[0].props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang || "";
  return (
    <div className="relative mb-5">
      <span className="text-xs italic bg-paper-light rounded-sm pl-2.5 pr-3.5 pt-0.5 absolute top-0 left-0 transform -translate-y-1/2 text-moonlight select-none">
        {language ? language.toUpperCase() : "Code"}
      </span>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="p-5 text-sm overflow-x-scroll rounded-sm shadow-sm"
            style={style}
          >
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default PreLight;
