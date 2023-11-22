import React from "react";
import { Link } from "react-router-dom";

export interface IHomePageProps {}
const Navigation: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page1/55">Page1 with params</Link>
      <br />
      <Link to="/page2">Page2</Link>
      <br />
    </div>
  );
};

export default Navigation;
