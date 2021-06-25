import { Link } from "react-scroll";

export default function MenuItem({ title, scrollTo, dropdownOpen }) {
  return (
    <div className="border-b border-dotted py-2">
      <Link
        to={scrollTo}
        spy={true}
        smooth={true}
        className="text-sm font-medium tracking-wider cursor-pointer my-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        onClick={() => dropdownOpen(false)}
      >
        {title}
      </Link>
    </div>
  );
}
