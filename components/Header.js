import { Link } from "react-scroll";
import { TiPowerOutline } from "react-icons/ti";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Header() {
  return (
    <header id="home" className="relative grid grid-cols-3 items-center">
      {/* Column #1 */}
      <div>
        <Link
          to="projects"
          spy={true}
          smooth="true"
          className="flex items-center cursor-pointer"
        >
          <TiPowerOutline className="text-4xl text-pink-500" />
          <span className="text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Portfolio
          </span>
        </Link>
      </div>

      {/* Column #2 */}
      <div className="hidden md:flex justify-center md:space-x-8 text-xl tracking-wide">
        <Link to="projects" spy={true} smooth="true" className="cursor-pointer">
          Projects
        </Link>

        <Link
          to="technologies"
          spy={true}
          smooth="true"
          className="cursor-pointer"
        >
          Technologies
        </Link>

        <Link to="about" spy={true} smooth="true" className="cursor-pointer">
          About
        </Link>
      </div>

      {/* Column #3 */}
      <div className="hidden md:flex justify-center space-x-5 text-3xl">
        <a href="https://github.com/soyarnold" target="blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/arnold-perez/" target="blank">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/arnoldperez" target="blank">
          <AiFillTwitterCircle />
        </a>
      </div>
    </header>
  );
}
