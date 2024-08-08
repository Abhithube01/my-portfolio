import { useDarkMode } from "../contexts/DarkModeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "./images/port1.jpg";
import hero2 from "./images/port2.jpg";
import hero3 from "./images/port3.jpg";

function HeroSection() {
  const { isDarkMode } = useDarkMode();

  const settings = {
    dots: true,
    infinite: true,  // Enables smooth looping
    speed: 800,  // Slower transition for smoothness
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,  // Adds a fade effect for smoother transitions
  };

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
        <Slider {...settings}>
          <div>
            <img src={hero1} alt="image1" className="h-[60rem] w-full object-cover" />
          </div>
          <div>
            <img src={hero3} alt="image2" className="h-[60rem] w-full object-cover" />
          </div>
          <div>
            <img src={hero2} alt="image3" className="h-[60rem] w-full object-cover" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default HeroSection;
