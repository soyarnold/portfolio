import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center space-x-12 text-3xl">
        <a href="https://github.com/soyarnold" target="blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/arnold-perez/" target="blank">
          <AiFillLinkedin />
        </a>
        {/* <a href="https://twitter.com/arnoldperez" target="blank">
          <AiFillTwitterCircle />
        </a> */}
      </div>
    </footer>
  );
}
