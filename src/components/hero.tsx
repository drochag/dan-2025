import { memo, useEffect, useState, useCallback, forwardRef } from "react";
import image from "../images/daniel-no-bg.png";
import TypingAnimation from "./animations/typing-animation";
import { Image } from "astro:assets";

const Hero = (props, ref: React.Ref<HTMLDivElement>) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // const { file } = useStaticQuery(imageQuery)
  // const image = getImage(file.image)

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const container = ref.current?.getBoundingClientRect();

    if (container) {
      const mouseX = event.clientX - container.left;
      const mouseY = event.clientY - container.top;

      const finalX = ((mouseX - container.width / 2) / container.width) * -100;
      const finalY = ((mouseY - container.height / 2) / container.height) * -50;

      setCoords({
        x: finalX,
        y: finalY,
      });
    }
  }, []);

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      if (!DeviceOrientationEvent) {
        alert("The device is not compatible with DeviceOrientationEvent");
        return;
      }

      const { beta, gamma } = event;
      setCoords({
        x: gamma,
        y: beta,
      });
    },
    []
  );

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  const onLoad = useCallback(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-screen relative overflow-hidden"
    >
      <div
        className={
          "absolute w-full h-full z-10 transition-hero-background " +
          `${mounted ? "bg-themeDarkBlue/60" : "bg-themeDarkBlue/0"}`
        }
      />

      <div className="flex justify-center items-center w-full">
        <Image
          style={{
            transform: `translate(${coords.x}px, ${coords.y}px)`,
            objectFit: "contain",
          }}
          className={
            "transition-hero h-screen " +
            `${
              mounted
                ? "brightness-[0.3] lg:brightness-[0.1] blur lg:blur-lg"
                : ""
            }`
          }
          {...image}
          alt="image"
          onLoad={onLoad}
        />
      </div>

      <div
        className="text-white text-8xl lg:text-[112px] font-extrabold flex
         flex-col justify-center items-center absolute top-0 bottom-24
          lg:bottom-0 w-full z-20"
      >
        <p
          className="rotate-90 -translate-x-[2.5rem] lg:-translate-x-[3rem]
           translate-y-[2.5rem] lg:translate-y-[3rem]"
        >
          <TypingAnimation
            startingDelay={2500}
            charEnterTime={200}
            displayText="DANIEL"
          />
        </p>

        <p
          className="-rotate-90 translate-x-[2.5rem] lg:translate-x-[3rem]
           -translate-y-[2.5rem] lg:-translate-y-[3rem]"
        >
          <TypingAnimation
            startingDelay={3500}
            charEnterTime={200}
            displayText="ROCHA"
          />
        </p>
      </div>
    </div>
  );
};

export default memo(forwardRef(Hero));
