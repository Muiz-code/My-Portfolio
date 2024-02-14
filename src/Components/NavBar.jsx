import { navItems } from "./Maps";
import Navitems from "./navitems";

function NavBar() {
  return (
    <nav className="flex justify-end navBar">
      <ul className="list absolute top-[40%] right-10">
        {navItems.map((items) => (
          <Navitems key={items} {...items} pageLink={items.pageLink} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
