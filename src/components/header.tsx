import logo from "../assets/svg/logo.svg";

function Header() {
  return (
    <header className="flex justify-between items-center px-3 md:px-12">
      <img src={logo} alt="logo" />

      <button className="px-8 py-3 rounded-full text-white bg-[#16B198] font-semibold">
        Get Started
      </button>
    </header>
  );
}

export default Header;
