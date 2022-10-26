import React from "react";

interface image {
  desk: string;
  mobile: string;
}

type Props = { image: image };

const DecorativeImage: React.FC<Props> = ({ image: { desk, mobile } }) => {
  const sizes = "(max-width: 780px) 376px, 894px";
  return (
    <picture className='w-full '>
      <source srcSet={desk} media='(min-width: 781px)' />
      <source srcSet={mobile} media='(max-width: 780px)' />
      <img src={desk} alt='' />
    </picture>
  );
};
export default DecorativeImage;
