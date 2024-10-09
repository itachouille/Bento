import { navigations } from "../constants/index";

const Navbar = () => {
  return (
    <nav>
      <div className="border border-color-3 px-2 py-1">
        {navigations.map((item) => (
          <a className="border border-color-3" key={item.id} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
