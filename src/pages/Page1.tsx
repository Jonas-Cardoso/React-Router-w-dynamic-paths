import React from "react";
import { useParams } from "react-router-dom";

export interface IPage1Props {}

const AboutPage: React.FunctionComponent<IPage1Props> = () => {
  const { number } = useParams();
  return (
    <div>
      <p>Page 1</p>
      {number && <>{number}</>}
    </div>
  );
};

export default AboutPage;
