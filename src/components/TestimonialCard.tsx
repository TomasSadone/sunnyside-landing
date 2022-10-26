import React from "react";

type Props = {
  image: string;
  p: string;
  name: string;
  position: string;
};

const TestimonialCard: React.FC<Props> = ({ image, p, name, position }) => {
  return (
    <div className='grid  place-items-center '>
      <img className='mb-6 w-[30%] rounded-full md:mb-10' src={image} alt='' />
      <p className='mb-6 text-very-dark-grayish-blue md:mb-10'>{p}</p>
      <h2 className='mb-[0.2em] font-fraunces font-black'>{name}</h2>
      <h3 className='text-grayish-blue'>{position}</h3>
    </div>
  );
};

export default TestimonialCard;
