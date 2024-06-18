import presale from "../assets/presale.png";
const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center relative">
      <img src={presale} alt="" />
      <a
        href="https://egotickets.com/events/yardconnect-party"
        target="_blank"
        className="absolute bottom-[15%] mobile:w-[40%] tablet:w-[40%] tablet:h-[140px] flex items-center justify-center text-center bg-[#C8BA00] tablet:text-[42px] font-bold p-2 rounded"
      >
        Get Ticket
      </a>
    </div>
  );
};

export default Hero;
