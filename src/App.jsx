import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landingpage from "./Pages/Landingpage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Portfolio />} />
      </Route>
    )
  );
  return (
    <div className="bg-[#210002]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
