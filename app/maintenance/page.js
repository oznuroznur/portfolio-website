
export default function Maintenance() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 rounded-xl bg-gray-900/70 shadow-xl max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-6">
          My Website is currently <br /> under maintenance{" "}
          {/* <span role="img" aria-label="maintenance">
            🔧
          </span> */}
        </h1>
           <img
            src="/assets/images/hero/banner.png"
            alt="Author"
            className="object-contain animate-bounce my-4"
            width={80}
            height={80}
            draggable={false}
          />
        <p className="text-lg text-gray-300 text-center max-w-lg">
          Sorry for the inconvenience.
          <br />
          I am working hard to bring everything back online soon.
          <br />
          Thank you for your patience!
        </p>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
