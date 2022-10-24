import React from "react";

type Props = {
  content: string;
};

const HeaderLink: React.FC<Props> = ({ content }) => {
  return (
    <li>
      <button className='cursor-pointer text-base text-white md-max:text-dark-grayish-blue'>
        {content}
      </button>
    </li>
  );
};

export default HeaderLink;
