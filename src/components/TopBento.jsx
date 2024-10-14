import { mainBlock, arrow, projects, phone, twitter, card6 } from "../assets";
import { stacks } from "../constants";

const TopBento = () => {
  return (
    <section id="top" className="relative pt-4 lg:pt-12 xl:pt-20">
      <div className="container">
        <div className="relative gap-4 md:grid md:grid-cols-2">
          <div className="relative">
            <div className="relative mb-4">
              <img
                className="size-full"
                src={mainBlock}
                alt="journaling image"
              />
            </div>
            <div className="card mb-4 md:mb-0">
              <div className="flex justify-between">
                <p className="text-sm xl:text-lg">
                  Adventure with Orangesoft lasting 5 years
                </p>
                <img src={arrow} alt="arrow link" />
              </div>
              <p className="mb-4 text-sm text-color-3 xl:text-lg">
                21 projects realised 🎉
              </p>
              <div className="flex justify-between">
                {stacks.map((item) => (
                  <a key={item.id} href={item.url}>
                    <img
                      className="size-20 text-color-3 xl:size-28"
                      src={item.icon}
                      alt={item.title}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card mb-4 overflow-x-hidden">
              <div className="flex justify-between">
                <p className="text-sm xl:text-lg">
                  Adventure with Orangesoft lasting 5 years
                </p>
                <img src={arrow} alt="arrow link" />
              </div>
              <p className="mb-4 text-sm text-color-3 xl:text-lg">
                25 projects realised 🎉
              </p>
              <div className="h-20 w-[1550px]">
                <img
                  className="size-full"
                  src={projects}
                  alt="projects images"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img className="size-full" src={phone} alt="phone" />
              </div>
              <div>
                <div className="card mb-4 p-8">
                  <img
                    className="size-full"
                    src={twitter}
                    alt="twitter profil"
                  />
                </div>
                <div>
                  <img className="size-full" src={card6} alt="card 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBento;
