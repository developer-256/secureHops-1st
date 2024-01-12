import BanUnderGridImg from "../assets/svg/banner1.svg";

function BanUnderGrid() {
  return (
    <div className="relative px-3 md:px-12 py-[100px]">
      <div className="border-2 border-green-600 rounded-xl bg-newGreen">
        <img className="w-[100%]" src={BanUnderGridImg} />
      </div>
    </div>
  );
}

export default BanUnderGrid;
