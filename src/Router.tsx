import LayoutComponent from "./pages/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export interface IApplicationProps {}

const Router: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index path="/" element={<Home />} />
          <Route path="page1">
            <Route index element={<Page1 />} />
            <Route path=":number" element={<Page1 />} />
          </Route>
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
