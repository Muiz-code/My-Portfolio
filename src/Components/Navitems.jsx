import { NavLink } from "react-router-dom";

const Navitems = ({ item, pageLink }) => {
  return (
    <NavLink to={pageLink} className="text-decoration-none text-[#210002]">
      <li className="cursor-pointer listItems">{item}</li>
    </NavLink>
  );
};

export default Navitems;
