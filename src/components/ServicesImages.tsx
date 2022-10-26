import React from "react";

type Props = {
  imageDesk: string;
  imageMobile: string;
  title?: string;
  text?: string;
  color?: string;
  inverse?: boolean;
  className: string;
};

const ServicesImages: React.FC<Props> = ({
  imageDesk,
  imageMobile,
  title,
  text,
  color,
  inverse,
  className,
}) => {
  const css = `
    .${className} {
        background-image: url('${imageMobile}')
    }
    @media (min-width: 750px) {
        .${className} {
            background-image: url('${imageDesk}')
        }
    }
    `;
  console.log(css);
  return (
    <div className={`${inverse && "md-max:row-[1]"}`}>
      <style scoped>{css}</style>
      <div
        className={`${className} relative aspect-[125/104] ${
          title && "aspect-[5/8]"
        }  bg-cover bg-center bg-no-repeat md:aspect-[6/5]`}
      >
        {title && text && (
          <div className='absolute top-[70%] grid gap-4 px-4  text-center'>
            <h1
              className={`font-fraunces font-black ${color} l:text- text-3xl`}
            >
              {title}
            </h1>
            <p className={`${color}`}>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesImages;
