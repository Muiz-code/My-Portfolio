import { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../animations";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="textsCont flex text-[#210002]">
        <span>MUIZ</span>
        <span>OWOLABI</span>
      </div>
    </div>
  );
};

export default Preloader;
