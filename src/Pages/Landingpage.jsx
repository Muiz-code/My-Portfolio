import AboutMe from "../Components/AboutMe";
import Preloader from "../Components/Preloader";

const Landingpage = () => {
  return (
    <div className="relative h-[100vh]">
      <div>
        <Preloader />
      </div>

      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default Landingpage;
