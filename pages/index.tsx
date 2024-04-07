import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContainerStyle from "../styles/imageContainer.module.css";
import mainStyle from "../styles/main.module.css";
import imageStyle from "../styles/image.module.css";
import Meta from "../components/meta";

const Page = () => {
  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    const imagePath = "/images/pain_" + randomNumber + ".png";
    setRandomImage(imagePath);

    console.log(
      "---------------------------------  pͪoͣnͬpͣoͥnͭpͣa͡inͥ  --------------------------------- \n" +
        " .88888.  888888ba   .d888888  dP     dP  .d888888     dP d888888P  .d888888  dP \n" +
        "d8'   `8b 88    `8b d8'    88  88   .d8' d8'    88     88    88    d8'    88  88 \n" +
        "88     88 88     88 88aaaaa88a 88aaa8P'  88aaaaa88a    88    88    88aaaaa88a 88 \n" +
        "88     88 88     88 88     88  88   `8b. 88     88     88    88    88     88  88 \n" +
        "Y8.   .8P 88     88 88     88  88     88 88     88     88    88    88     88  88 \n" +
        " `8888P'  dP     dP 88     88  dP     dP 88     88     dP    dP    88     88  dP \n" +
        "----------------------------  ONAKA ITAI  by waku_25 ----------------------------\n"
    );
  }, []);

  return (
    <>
      <Meta />
      <div className={mainStyle.main}>
          <div className={ContainerStyle.imageContainer}>
            <Image
              className={imageStyle.randomImage}
              id="randomImage"
              src={randomImage}
              alt="Stomach Pain Image"
              width={500}
              height={500}
              fill={false}
              priority
            />
          </div>
          <div>おなかいた～～い</div>
        </div>
    </>
  );
};

export default Page;
