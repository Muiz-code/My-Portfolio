import NavBar from "../Components/Navbar";
import Social from "../Components/Social";

const AboutMe = () => {
  return (
    <div className="flex flex-column name  h-screen relative">
      <div className=" absolute  w-screen">
        <NavBar />
      </div>

      <div className="flex flex-col text-[#E1D7C4] justify-center container absolute top-[35%] right-10">
        <div className="text-wrapper flex overflow-hidden text-6xl font-bold ps-[34px]">
          <p>Hello</p>
        </div>
        <h1 className="text-6xl font-bold ps-[34px] w-[50%]">
          <span className="muiz">I'm MUIZ</span>
        </h1>
        <ul className="dynamic-text text-3xl font-bold">
          <li>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span>Content Writer</span>
          </li>
          <li>
            <span>Designer</span>
          </li>
          <li>
            <span>Freelance</span>
          </li>
        </ul>
      </div>

      <Social />
    </div>
  );
};

export default AboutMe;
