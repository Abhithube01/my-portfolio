import { useDarkMode } from "../contexts/DarkModeContext";


function HeroSection() {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      id="home"
      className="relative grid grid-cols-2 items-center px-32 pt-[14rem] desktop:px-20 laptop:flex laptop:justify-center laptop:flex-col tablet:px-10"
    >
      <div className="laptop:text-center laptop:flex laptop:flex-col laptop:items-center">
        <h1
          className={`text-[5rem] laptop:text-[3rem] font-bold tracking-[-0.1rem] leading-[120%] max-w-[45rem] font-ibarra pb-4 ${
            isDarkMode ? "text-white" : "text-[#42446e]"
          }`}
        >
          Hello there, I'm Abhinav Thube
        </h1>
        <p
          className={`text-[1.8rem] leading-[2.6rem] max-w-[45rem] laptop:max-w-[55rem] ${
            isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
          }`}
        >
          I'm a fullstack developer skilled in building beautiful and functional
          user interfaces. I enjoy working on projects that utilize both
          front-end and back-end technologies to create seamless user
          experiences.
        </p>
      </div>

      <div className="laptop:hidden">
          <div>
            <img
              src="/hero-1.png"
              alt="image1"
              className="h-[60rem] w-full object-cover"
            />
          </div>
      </div>
    </section>
  );
}

export default HeroSection;
