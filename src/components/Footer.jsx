import { footerLogo } from "../assets";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <img src={footerLogo} alt="logo" />
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
    </footer>
  );
};

export default Footer;
