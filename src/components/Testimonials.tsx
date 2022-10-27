import React from "react";
import TestimonialCard from "./TestimonialCard";

type Props = {};

import emily from "../../images/image-emily.jpg";
import thomas from "../../images/image-thomas.jpg";
import jennie from "../../images/image-jennie.jpg";

const testimonies = [
  {
    image: emily,
    p: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
    name: `Emily R.`,
    position: "Marketing director",
  },
  {
    image: thomas,
    p: `Sunnyside's
    enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.`,
    name: `Thomas S.`,
    position: "Chief Operating Officer",
  },
  {
    image: jennie,
    p: `Incredible end result! Our sales increased over 400% when we worked with
    Sunnyside. Highly recommended!`,
    name: `Jennie F.`,
    position: "Business Owner About Services",
  },
];

const Testimonials = (props: Props) => {
  return (
    <div className='my-0 mx-auto w-[85%] max-w-6xl py-16 text-center md:py-24'>
      <h1 className='md:mb-18 mb-16 font-fraunces text-xl tracking-[0.15em] text-grayish-blue'>
        CLIENT TESTIMONIALS
      </h1>
      <div className='md:otrogap? flex flex-col justify-between gap-12 md:flex-row'>
        {testimonies.map(testimony => {
          const { image, name, p, position } = testimony;
          return (
            <TestimonialCard
              image={image}
              name={name}
              p={p}
              position={position}
              key={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
