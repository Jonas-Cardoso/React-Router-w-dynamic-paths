import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export interface ILayoutProps {}

const LayoutComponent: React.FunctionComponent<ILayoutProps> = () => {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
