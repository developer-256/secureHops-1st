import { useState } from "react";
// svg with two types of colors
const navArrow = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="#333333" stroke-width="1.5" />
  </svg>
);
const navArrowHover = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="#9B9B9B" stroke-width="1.5" />
  </svg>
);

function NavBar() {
  const [arrow, setArrow] = useState(navArrow);
  const toHover = () => {
    setArrow(navArrowHover);
  };
  const toNotHover = () => {
    setArrow(navArrow);
  };
  const newClass = `text-hoverGray`;

  return (
    <ul className="sticky top-12 mx-auto flex justify-between items-center rounded-full py-3 px-16 gap-10 border border-navGray text-regularText text-[15px] font-medium max-w-[600px] z-50 bg-white/40 backdrop-blur-[6px] shadow-md">
      <li className="text-hoverGray cursor-pointer group/li">
        <div className="overflow-hidden h-[22.5px]">
          <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500">
            <span>Home</span>
            <span className="text-hoverGray">Home</span>
          </div>
        </div>
      </li>

      <li className="cursor-pointer group/li">
        <div className="overflow-hidden h-[22.5px]">
          <div
            className={`flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500`}
          >
            <span>About</span>
            <span className="text-hoverGray">About</span>
          </div>
        </div>
      </li>

      <li
        className="md:hover:text-hoverGray flex items-center gap-2 cursor-pointer group/service"
        onMouseOver={toHover}
        onMouseOut={toNotHover}
      >
        <span>Services</span>
        <span className="pt-1 group-hover/service:pb-2 group-hover/service:rotate-180">
          {arrow}
        </span>
      </li>

      <li className="cursor-pointer group/li">
        <div className="overflow-hidden h-[22.5px]">
          <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500">
            <span>Blogs</span>
            <span className="text-hoverGray">Blogs</span>
          </div>
        </div>
      </li>

      <li className="cursor-pointer group/li">
        <div className="overflow-hidden h-[22.5px]">
          <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500">
            <span>Contact Us</span>
            <span className="text-hoverGray">Contact Us</span>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default NavBar;
