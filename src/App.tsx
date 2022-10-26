import React from "react";
import DecorativeImages from "./components/DecorativeImages";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

type Props = {};

const App = (props: Props) => {
  return (
    <div className='overflow-x-hidden font-barlow'>
      <Header />
      <Services />
      <Testimonials />
      <DecorativeImages />
    </div>
  );
};

export default App;
