const MainLayout = ({ children }) => {
  return (
    <>
      <main className="min-h-screen bg-paper py-20 font-sans text-ink transition-bg dark:bg-night dark:text-light">
        <div className="mx-auto max-w-screen-lg">
          <div className="max-w-screen-md">{children}</div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
