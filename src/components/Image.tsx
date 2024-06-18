import image from "../assets/fun.jpg";

const Image = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <img src={image} alt="" />
    </div>
  );
};

export default Image;
