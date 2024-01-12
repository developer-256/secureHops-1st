import logo from "../assets/svg/logo.svg";
import downArrow from "../assets/svg/NavDownArrow.svg";

function Header() {
  return (
    <nav className="flex justify-between items-center">
      <img src={logo} alt="logo" />
      <ul className="flex justify-between items-center rounded-full py-3 px-16 gap-10 border-[1.5px] border-black font-semibold">
        <li className="md:hover:text-hoverGray text-hoverGray cursor-pointer">
          Home
        </li>
        <li className="md:hover:text-hoverGray cursor-pointer">About</li>
        <li className="md:hover:text-hoverGray flex items-center gap-2 cursor-pointer group/service">
          <span>Services</span>
          <span>
            <img
              className="w-3 pt-1 group-hover/service:pb-2 group-hover/service:rotate-180"
              src={downArrow}
            />
          </span>
        </li>
        <li className="md:hover:text-hoverGray cursor-pointer">SOC</li>
        <li className="md:hover:text-hoverGray cursor-pointer">Contact US</li>
      </ul>
      <button className="px-9 py-[14px] rounded-full text-white bg-[#16B198] font-semibold">
        Get Started
      </button>
    </nav>
  );
}

export default Header;
