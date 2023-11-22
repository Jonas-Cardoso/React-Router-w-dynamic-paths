import React from "react";
import { useSearchParams } from "react-router-dom";

export interface IPage2Props {}

const TestPage: React.FunctionComponent<IPage2Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  return (
    <div>
      <p>This is the test page.</p>
      {id ? <p>Received id: {id}</p> : <p>No id: provided</p>}
      <button onClick={() => setSearchParams({ id: "23" })}>Provide id</button>
    </div>
  );
};

export default TestPage;
