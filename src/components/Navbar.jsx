import { useState } from "react";
import { navigations } from "../constants/index";
import { motion } from "framer-motion";
import { useRef } from "react";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav>
      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({
            ...prev,
            opacity: 0,
          }));
        }}
        className="border-color-5 relative mx-auto flex w-fit rounded-full border bg-color-1 p-1"
      >
        {navigations.map((item) => (
          <Tab url={item.url} key={item.id} setPosition={setPosition}>
            {item.title}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition, url }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-10 py-3 text-base text-color-3 mix-blend-difference transition-colors hover:text-color-2"
    >
      <a href={url}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="border-color-5 absolute z-0 h-12 rounded-full border bg-color-4"
    />
  );
};

export default Navbar;
