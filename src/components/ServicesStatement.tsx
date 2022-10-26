import React from "react";

type Props = {
  title: string;
  text: string;
  color: string;
};

const ServicesStatement: React.FC<Props> = ({ title, text, color }) => {
  return (
    <>
      <div className='grid aspect-[5/6] md:aspect-[6/5]'>
        <div className='m-auto grid max-h-[80%] max-w-[80%] gap-6 l:max-h-[70%] l:max-w-[70%] l:gap-8'>
          <h1 className='font-fraunces text-3xl font-black text-very-dark-desaturated-blue l:text-5xl'>
            {title}
          </h1>
          <p className='tracking-tighter text-grayish-blue'>{text}</p>
          <button
            className={`relative font-black after:-z-10 after:h-3 after:w-[145px] after:rounded-full after:bg-opacity-30 after:transition hover:after:bg-opacity-100 ${color} place-self-start font-fraunces text-lg text-very-dark-desaturated-blue after:absolute after:bottom-0 after:left-[-9px]`}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default ServicesStatement;
