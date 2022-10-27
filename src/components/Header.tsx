import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import DownArrow from "../../images/icon-arrow-down.svg";
import HeaderLink from "./HeaderLink";
import DesktopHeaderImage from "../../images/desktop/image-header.jpg";
import MobileHeaderImage from "../../images/mobile/image-header.jpg";
import HamburgerMenu from "../../images/icon-hamburger.svg";

type Props = {};

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const beforeLi = `md-max:before:absolute md-max:before:-top-[18px] md-max:before:-right-5 md-max:before:h-0 md-max:before:w-0 md-max:before:rotate-[136deg] md-max:before:border-[20px] md-max:before:border-t-transparent md-max:before:border-l-transparent md-max:before:border-r-transparent md-max:before:border-b-white`;
  return (
    <header className='relative'>
      <div className='absolute left-0 right-0 top-0 flex items-center justify-between bg-transparent p-4'>
        <Logo />
        <nav>
          <ul
            className={`${
              open
                ? " md-max:translate-y-0 md-max:opacity-100"
                : "border-solid md-max:pointer-events-none md-max:-translate-y-8 md-max:opacity-0"
            }  flex items-center gap-8 transition-all duration-300  md-max:absolute md-max:top-20 md-max:left-4 md-max:right-4 md-max:z-50 md-max:flex-col md-max:bg-white md-max:p-8 ${beforeLi}`}
          >
            {["About", "Services", "Projects"].map(item => {
              return <HeaderLink key={item} content={item} />;
            })}
            <li>
              <button className='rounded-full bg-yellow py-4  px-8 font-fraunces font-bold text-very-dark-desaturated-blue md:bg-white md:transition md:hover:bg-opacity-30 md:hover:text-white '>
                CONTACT
              </button>
            </li>
          </ul>
          <img
            onClick={handleClick}
            className='z-50 cursor-pointer md:hidden'
            src={HamburgerMenu}
            alt=''
          />
        </nav>
      </div>
      <div className='absolute top-[30%] flex w-full flex-col items-center justify-center gap-8'>
        <h1 className='px-4 text-center font-fraunces text-6xl tracking-wider text-white md:tracking-widest'>
          WE ARE CREATIVES
        </h1>
        <img className=' left-2/4' src={DownArrow} alt='' />
      </div>
      <picture>
        <source srcSet={DesktopHeaderImage} media='(min-width: 781px)' />
        <source srcSet={MobileHeaderImage} media='(max-width: 780px)' />
        <img src={MobileHeaderImage} />
      </picture>
    </header>
  );
};

export default Header;
