import mainImg from "../assets/svg/main_Img.svg";
import exploreArrow from "../assets/svg/exploreArrow.svg";

function MainImg() {
  return (
    <div className="flex justify-between">
      <div>
        <p>Your Security Partner</p>
        <h1>Securing Today for a</h1>
        <h1>Secure Tomorrow</h1>
        <p className="max-w-[389px]">
          With years of experience in the security industry, we're at the
          forefront of innovative solutions that protect you, your assets, and
          your data.
        </p>

        <div>
          <button>Get Started</button>
          <button className="flex items-center gap-2">
            <span>Explore</span>
            <img className="pt-1" src={exploreArrow} />
          </button>
        </div>
      </div>

      <div>
        <img src={mainImg} />
      </div>
    </div>
  );
}

export default MainImg;
