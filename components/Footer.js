const Footer = () => {
  return (
    <footer className="bg-paper font-sans text-ink transition-bg dark:bg-night dark:text-light">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col flex-wrap content-end items-end gap-2 px-8 py-5">
          <p className="cursor-default select-none text-4xl font-semibold">
            Jimmy Lin
          </p>
          <p className="text-sm">contact@jimmylin.org</p>
          <p className="flex gap-2 text-3xl">
            <a
              href="https://github.com/j3ygh"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/j3y.fb"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </p>
          <p className="mt-5 text-xs">© 2021 Jimmy Lin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
