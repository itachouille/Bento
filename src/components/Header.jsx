import { logo, menu } from "../assets";
import { socials } from "../constants/index";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div className="">
            <a href="/">
              <img className="size-20 lg:size-full" src={logo} alt="logo" />
            </a>
          </div>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className="lg:hidden">
            <img className="size-12" src={menu} alt="menu icon" />
          </div>
          <div className="hidden gap-6 lg:flex">
            {socials.map((item) => (
              <a key={item.id} href={item.url}>
                <img
                  className="text-color-3"
                  src={item.icon}
                  alt={item.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
