import { IoMdClose } from "react-icons/io";

type NavigationMenu = {
  onclose: () => void;
};
const MobileNavigationOptions: React.FC<NavigationMenu> = ({ onclose }) => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0   flex backdrop-blur-[2px] bg-hero-pat bg-center bg-cover z-50">
      <div className="flex justify-between w-full px-5 py-5">
        <div className="">
          <img
            src="https://static.wixstatic.com/media/f13fd1_54b31959b41d4f0db7d3424f1a25a2e9~mv2.png/v1/fill/w_79,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%202_3x4.png"
            alt="logo"
            className="w-[53px]"
          />
        </div>
        <div className="h-[43px] w-[43px] rounded-full flex items-center justify-center bg-[gold]"  onClick={onclose}>
          <IoMdClose size={40} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationOptions;
