import Link from "next/link";

export default function Custom404() {
    return (
      <div class=" relative overflow-hidden">
        <div class="absolute h-full w-full bg-[url('/assets/new-bg.png')] bg-cover bg-repeat-round bg-center  bg-fixed bg-opacity-90  " />
        <div class="inset-0 bg-black opacity-25"></div>
        <div class="container mx-auto px-6 md:px-12 relative  flex items-center py-32 xl:py-40">
          <div class="w-full flex flex-col items-center relative ">
            <h1 class="font-normal text-5xl text-center text-white leading-tight mt-4 uppercase">
              You are all alone here
            </h1>
            <p class="font-extrabold text-8xl my-24  animate-bounce text-[#652adb]">
              404
            </p>
            <div className="py-2">
              <Link
                href="/"
                title="Go to Home Page"
                className=" text-2xl border rounded-full text-center px-6 py-3 hover:bg-white  hover:border-2 border-[#652adb] hover:text-[#652adb] transition duration-300 ease-in-out"
              >
                Go to Home
              </Link>
            </div>
          </div>
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
      </div>
    );
  }