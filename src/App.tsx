import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";

type Props = {};

const App = (props: Props) => {
  return (
    <div className='font-barlow overflow-x-hidden'>
      <Header />
      <Services/>
    </div>
  );
};

export default App;
