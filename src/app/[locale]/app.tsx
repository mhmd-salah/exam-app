import Providers from "@/shared/context/providers";
import React from "react";

interface IApp_props {
  children: React.ReactNode;
}

const App = ({ children }: IApp_props) => {
  return <Providers>{children}</Providers>;
};

export default App;
