import React from "react";

type Props = {
    title: string,
    text: string
    color: string,
};

const ServicesStatement: React.FC<Props> = ({title, text, color}) => {
  const colorClass = `after:bg-${color}`
  return (
      <>
        <div className="aspect-[5/6] md:aspect-[6/5] grid">
          <div className="grid gap-8 m-auto max-h-[70%] max-w-[70%]">
            <h1 className="text-very-dark-desaturated-blue font-fraunces font-black text-5xl">{title}</h1>
            <p className="text-very-dark-grayish-blue">{text}</p>
            <button className={`relative after:rounded-full after:h-3 after:bg-opacity-30 after:-z-10 after:w-[145px] ${color} after:bottom-0 after:left-[-9px] after:absolute font-fraunces text-very-dark-desaturated-blue text-lg place-self-start`}>LEARN MORE</button>
          </div>
        </div>
      </>
    );
};

export default ServicesStatement;
