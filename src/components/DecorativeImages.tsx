import React from "react";
import DecorativeImage from "./DecorativeImage";

type Props = {};

const images = [
  {
    desk: `../../images/desktop/image-gallery-milkbottles.jpg`,
    mobile: `../../images/mobile/image-gallery-milkbottles.jpg`,
  },
  {
    desk: `../../images/desktop/image-gallery-orange.jpg`,
    mobile: `../../images/mobile/image-gallery-orange.jpg`,
  },
  {
    desk: `../../images/desktop/image-gallery-cone.jpg`,
    mobile: `../../images/mobile/image-gallery-cone.jpg`,
  },
  {
    desk: `../../images/desktop/image-gallery-sugar-cubes.jpg`,
    mobile: `../../images/mobile/image-gallery-sugar-cubes.jpg`,
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
