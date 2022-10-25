import React from "react";
import ServicesStatement from "./ServicesStatement";
// import image1Desk from  "../../images/desktop/image-transform.jpg"
// import image1Mobile from  "../../images/mobile/image-transform.jpg"
import ServicesImages from "./ServicesImages";

type Props = {};
console.log('../../images/mobile/image-transform.jpg')
const image1Desk ='../../images/desktop/image-transform.jpg'
const image1Mobile = '../../images/mobile/image-transform.jpg'
const Services = (props: Props) => {
    const title1 = 'Transform your brand'
    const text1 = `We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.`
  return (
      <>
        <div className="grid grid-cols-2">
        <ServicesStatement color={'after:bg-yellow'} title={title1} text={text1}/>
        <ServicesImages imageMobile={image1Mobile} imageDesk={image1Desk}/>
        </div>
      </>
    );
};

export default Services;
