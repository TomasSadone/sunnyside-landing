import React from "react";
import ServicesStatement from "./ServicesStatement";
import ServicesImages from "./ServicesImages";

type Props = {};
console.log("../../images/mobile/image-transform.jpg");
const image1Desk = "../../images/desktop/image-transform.jpg";
const image1Mobile = "../../images/mobile/image-transform.jpg";
const title1 = "Transform your brand";
const text1 = `We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.`;

const image2Mobile = "../../images/mobile/image-stand-out.jpg";
const image2Desk = "../../images/desktop/image-stand-out.jpg";
const title2 = `Stand out to the right audience`;
const text2 = `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places. `;

const image3Mobile = "../../images/mobile/image-graphic-design.jpg";
const image3Desk = "../../images/desktop/image-graphic-design.jpg";
const title3 = "Graphic design";
const text3 = `Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.`;

const image4Mobile = "../../images/mobile/image-photography.jpg";
const image4Desk = "../../images/desktop/image-photography.jpg";
const title4 = `Photography`;
const text4 = `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`;

const Services = (props: Props) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <ServicesStatement
          color={"after:bg-yellow"}
          title={title1}
          text={text1}
          key={title1}
        />
        <ServicesImages
          inverse
          imageMobile={image1Mobile}
          imageDesk={image1Desk}
          key={image1Mobile}
          className={"transform"}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <ServicesImages
          className={"stand-out"}
          key={image2Mobile}
          imageMobile={image2Mobile}
          imageDesk={image2Desk}
        />
        <ServicesStatement
          color={"after:bg-soft-red"}
          title={title2}
          key={title2}
          text={text2}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <ServicesImages
          color='text-dark-desaturated-cyan'
          className='graphic-design'
          imageDesk={image3Desk}
          imageMobile={image3Mobile}
          title={title3}
          text={text3}
        />
        <ServicesImages
          color='text-very-dark-desaturated-blue'
          className='photography'
          imageDesk={image4Desk}
          imageMobile={image4Mobile}
          title={title4}
          text={text4}
        />
      </div>
    </>
  );
};

export default Services;
