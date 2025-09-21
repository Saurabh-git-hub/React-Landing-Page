import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-1">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        CodeFlow tools
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-8 text-lg text-center text-neutral-500 max-w-4xl">
        Transform your development workflow with our powerful suite of tools. Build, test, and deploy
        with confidence using our integrated development environment.
      </p>
      <div className="flex justify-center my-8">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-1 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-2 border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
