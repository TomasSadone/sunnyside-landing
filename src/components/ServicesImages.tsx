import React from "react";

type Props = {
    imageDesk: string,
    imageMobile: string,
    title?: string,
    text?: string,
    color?: string
};

const ServicesImages:React.FC<Props> = ({imageDesk,imageMobile, title,text, color }) => {
    const css = `
    .bg-image {
        background-image: url('${imageMobile}')
    }
    @media (min-width: 750px) {
        .bg-image {
            background-image: url('${imageDesk}')
        }
    }
    `
  return (
    <>
    <style scoped >{css}</style>
      <div className={`bg-image bg-cover bg-center bg-no-repeat`}>
        {
            title && <h1 className={`font-fraunces ${color} fw-?`}>title</h1>
        }
        {
            text && <p className={`${color}`}>{text}</p>
        }
      </div>
    </>
    );
};

export default ServicesImages;
