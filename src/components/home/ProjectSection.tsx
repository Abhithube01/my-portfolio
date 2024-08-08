import { useDarkMode } from "../contexts/DarkModeContext";
import ProjectBox from "./ProjectBox";

function ProjectSection() {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      id="project"
      className="px-32 desktop:px-20 pt-80 laptop:pt-40 tablet:px-10 tablet:pt-[7.5rem]"
    >
      <h2
        className={`text-[4.8rem] font-bold leading-[4.8rem] pb-10 font-ibarra text-center laptop:text-[3rem] laptop:leading-[3rem] laptop:pb-4 ${
          isDarkMode ? "text-white" : "text-[#42446e]"
        }`}
      >
        Projects
      </h2>
      <h3
        className={`text-[2rem] laptop:text-[1.6rem] leading-[2.6rem] text-center ${
          isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
        }`}
      >
        Some of my works
      </h3>

      <div className="grid grid-cols-2 gap-32 pt-32 desktop:grid-cols-2 laptop:gap-20 tablet:grid-cols-1 tablet:pt-16">
        <ProjectBox
          img="./quiz.png"
          title="Quiz App"
          description="The Quiz Application offers a dynamic platform for creating and taking quizzes on various topics. With features like multiple-choice questions and score tracking, it provides an interactive and educational experience for users. Dive into the world of HTML, CSS, JavaScript, and accessibility as you test your knowledge across these four essential categories."
          url="https://frontend-quiz-app-abhithube01.netlify.app/"
          github="https://github.com/Abhithube01/Frontend-Quiz-App"
          techStack="React, Redux, Tailwind"
        />
        <ProjectBox
          img="./src/images/image.png"
          title="Live Weather App"
          description="The Quiz Application offers a dynamic platform for creating and taking quizzes on various topics. With features like multiple-choice questions and score tracking, it provides an interactive and educational experience for users. Dive into the world of HTML, CSS, JavaScript, and accessibility as you test your knowledge across these four essential categories."
          url="https://abhithube01.github.io/live-weather-app/"
          github="https://github.com/Abhithube01/live-weather-app"
          techStack="React, Redux, Tailwind"
        />
        <ProjectBox
          img="./connect-four.png"
          title="An Interactive Offline Game with AI & Multiplayer"
          description="Connect Four is a classic strategy game where players take turns dropping colored discs into a grid with the goal of connecting four of their own discs in a row. It's a fun and challenging game suitable for players of all ages. Test your skills against our competitive AI, which strategically plays to win and blocks your moves, providing an engaging challenge for solo play."
          url="https://connect-four-abhinav.netlify.app"
          github="https://github.com/Abhithube01/connect-four-game-main"
          techStack="React, Redux, Tailwind, Framer"
        />
        <ProjectBox
          img="./hangman.png"
          title="Hangman game"
          description="The Hangman Game offers an entertaining way to test your knowledge across six diverse categories: movies, TV shows, animals, capital cities, countries, and sports. Challenge yourself with word-guessing fun and explore a variety of topics as you uncover hidden phrases and expand your vocabulary. With a total of 8 guesses, test your deduction skills and see if you can guess the phrase before the hangman is complete!"
          url="https://hangman-game-abhinav.netlify.app/"
          github="https://github.com/Abhithube01/hangman-game-main"
          techStack="React, TypeScript, Tailwind, Framer"
        /> 
      </div>
    </section>
  );
}

export default ProjectSection;
