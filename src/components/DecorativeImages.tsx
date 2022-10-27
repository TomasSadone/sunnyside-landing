import React from "react";
import DecorativeImage from "./DecorativeImage";

type Props = {};

import milkBottkesDesk from "../../images/desktop/image-gallery-milkbottles.jpg";
import milkBottkesMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import orangeDesk from "../../images/desktop/image-gallery-orange.jpg";
import orangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import coneDesk from "../../images/desktop/image-gallery-cone.jpg";
import coneMobile from "../../images/mobile/image-gallery-cone.jpg";
import sugarDesk from "../../images/desktop/image-gallery-sugar-cubes.jpg";
import sugarMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";

const images = [
  {
    desk: milkBottkesDesk,
    mobile: milkBottkesMobile,
  },
  {
    desk: orangeDesk,
    mobile: orangeMobile,
  },
  {
    desk: coneDesk,
    mobile: coneMobile,
  },
  {
    desk: sugarDesk,
    mobile: sugarMobile,
  },
];

const DecorativeImages = (props: Props) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      {images.map(image => (
        <DecorativeImage key={image.desk} image={image} />
      ))}
    </div>
  );
};

export default DecorativeImages;
