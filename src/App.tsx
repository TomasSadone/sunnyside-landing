import React from "react";
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
    </div>
  );
};

export default App;
