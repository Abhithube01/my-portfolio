import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#33323d] px-32 flex items-center justify-between py-8 desktop:px-20 tablet:px-10 tablet:flex-col tablet:gap-12">
      <p className="text-[1.2rem] tracking-[0.2rem] uppercase text-white">
        &copy; {new Date().getFullYear()} Abhinav Thube
      </p>
      <div className="flex items-center gap-8 mobile:flex-col">
        <p className="text-[1.3rem] text-white">Connect with me:</p>
        <Link
          to="https://github.com/Abhithube01"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          Github
        </Link>
        <Link
          to="https://twitter.com/thube_abhinav"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          Twitter
        </Link>
        <Link
          to="https://www.linkedin.com/in/abhinav-thube-4481172b0"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          LinkedIn
        </Link>
        <Link
          to="mailto:abhinavthube@gmail.com"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          Gmail
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
