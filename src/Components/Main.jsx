import { useState, useEffect } from "react";
import soundous from "../assets/soundous.jpg";
import VisibilitySensor from "react-visibility-sensor";

const Main = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end developer", "Computer science student"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="mt-0 pt-[120px] mb-[100px] flex w-full ms-[10%]" id="home">
      <div className="items-center w-1/2">
        <div className="">
          <span className="font-semibold text-white py-2 px-3 bg-gradient-to-r from-yellow-300 to-transparent text-lg mb-4 inline-block">Welcome to my Portfolio</span>
          <h1 className="text-5xl font-bold tracking-wide leading-1 mb-5 block">{`Hey! I'm Soundous`}<br /><span className="text-yellow-300 bg-opacity-40" dataPeriod="1000" data-rotate='["Front-end Developer", "Computer science student "]'><span className="border-r-2 border-gray-600 border-opacity-50">{text}</span></span></h1>
          <p className="text-gray-400 text-base leading-1.5 mb-5 text-[24px] font-thin w-[600px]">
            I'm a computer science student with considerable experience in front-end development. My portfolio highlights my ability to blend creativity and technical skills, crafting user-friendly websites. Dive into my projects to witness how I transform ideas into impactful digital experiences.
          </p>
        </div>
      </div>
      <div className="">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "" : ""}>
              <img src={soundous} className="soundous rounded-[50%] mt-[-5%] w-[320px] " alt="image" />
            </div>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
}

export default Main;
