import { useEffect, useState } from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import { motion, useMotionValue } from "framer-motion";
import Dots from "./Dots";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 2;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "tween",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const imgs = [img1, img2, img3, img4, img1, img2, img3, img4];
const SwipeCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImageIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIndex < imgs.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imageIndex * 50}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        {imgs.map((imgSrc, index) => {
          return (
            <motion.div
              key={index}
              //   animate={{
              //     scale: imageIndex === index ? 0.95 : 0.85,
              //   }}
              transition={SPRING_OPTIONS}
              className="aspect-video w-[60%]  shrink-0  bg-neutral-800 bg-center object-fill"
            >
              <img
                src={imgSrc}
                alt=""
                className={`${imageIndex === index ? "" : "opacity-40"}`}
              />
            </motion.div>
          );
        })}
      </motion.div>
      {/* <Dots imgs={imgs} imgIndex={imageIndex} setImageIndex={setImageIndex} /> */}
    </div>
  );
};

export default SwipeCarousel;
