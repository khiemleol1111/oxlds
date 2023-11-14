function Hero() {
  return (
    <section className="md:mt-[100px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-2 pr-4 mb-7 text-sm border-[1px] border-neutral-800 text-text2 bg-neutral800 rounded-full"
          role="alert"
        >
          
          <span className="text-sm font-medium">
            Version v.1
          </span>
          
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text1 md:text-5xl lg:text-6xl ">
          Oxalis Design System
        </h1>
        <p className="mb-8 text-lg font-normal text-text2 lg:text-xl sm:px-16 xl:px-48 ">
          Design and build beautiful, usable products.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="text-text1 focus:ring-2 bg-primary  focus:ring-text2 font-medium rounded-lg px-4 py-2 text-center mr-3 md:mr-0"
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
