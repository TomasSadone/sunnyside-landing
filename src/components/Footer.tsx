import React from "react";
import { ReactComponent as FacebookLogo } from "../../images/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../images/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "../../images/icon-pinterest.svg";

type Props = {};

const Footer = (props: Props) => {
  const css = `
    .social:hover path {
      fill: white
    }
  `;
  return (
    <div className=' md:py-26 bg-[#90d4c5] py-12'>
      <div className='w-md  mx-auto  max-w-[80%] '>
        <style scoped>{css}</style>
        <h1 className='mb-8 text-center text-3xl font-extrabold text-dark-desaturated-cyan'>
          sunnyside
        </h1>
        <nav className='mb-16 text-dark-moderate-cyan'>
          <ul className='flex justify-center gap-16'>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>Projects</button>
            </li>
          </ul>
        </nav>
        <div>
          <ul className='flex justify-center gap-6'>
            <li className='social'>
              <FacebookLogo />
            </li>
            <li className='social'>
              <InstagramLogo />
            </li>
            <li className='social'>
              <TwitterLogo />
            </li>
            <li className='social'>
              <PinterestLogo />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
