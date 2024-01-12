import nextArrow from "../assets/svg/showMoreArrow.svg";
function GridCard(props: CardDatatypes) {
  console.log(`Img address: ${props.logo}`);
  return (
    <div
      className={`w-[65vw] md:w-auto group/card md:py-[21px] pl-5 pr-[25px] py-5 md:pl-[21px] md:pr-14 bg-white md:hover:bg-hoverGreen md:cursor-pointer border border-borderGray rounded-xl relative ${props.styles}`}
    >
      <div className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-newGreen flex items-center justify-center">
        <img className="" src={props.logo} />
      </div>
      <h1 className="mt-3 text-[20px] font-semibold leading-6 text-newGreen md:text-lg">
        {props.heading}
      </h1>
      <p className="mt-3 text-[16px] leading-5 font-normal md:text-sm text-newDarkGray">
        {screen.width >= 1024 ? props.paragraph : props.paragraph2}
      </p>
      <div className="w-7 h-7 md:w-[35px] md:h-[35px] rounded-full bg-newGray flex items-center justify-center absolute bottom-4 md:bottom-[21px] right-4 md:right-[21px] md:group-hover/card:bg-white">
        <img className="w-3 md:group-hover/card:-rotate-45" src={nextArrow} />
      </div>
    </div>
  );
}

export default GridCard;

interface CardDatatypes {
  styles: string;
  logo: string;
  paragraph: string;
  paragraph2: string;
  heading: string;
}
