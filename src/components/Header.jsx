import { logo } from "../assets";
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
          <div className="">
            <Navbar />
          </div>
          <div className="flex gap-2">
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
