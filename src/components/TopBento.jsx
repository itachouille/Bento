import { mainBlock, arrow, projects, phone, twitter, card6 } from "../assets";
import { stacks } from "../constants";

const TopBento = () => {
  return (
    <section id="top" className="relative pt-6 lg:pt-12 xl:pt-20">
      <div className="container">
        <div className="relative grid gap-4 md:grid-cols-2">
          <div className="relative">
            <div className="relative mb-4">
              <img src={mainBlock} alt="journaling image" />
            </div>
            <div className="card">
              <div className="flex justify-between">
                <h2 className="text-sm lg:text-lg">
                  Adventure with Orangesoft lasting 5 years
                </h2>
                <img src={arrow} alt="arrow link" />
              </div>
              <p className="mb-4 text-sm text-color-3 lg:text-lg">
                21 projects realised 🎉
              </p>
              <div className="flex justify-between">
                {stacks.map((item) => (
                  <a key={item.id} href={item.url}>
                    <img
                      className="size-20 text-color-3 lg:size-28"
                      src={item.icon}
                      alt={item.title}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card mb-4 h-1/4">
              <div className="flex justify-between">
                <h2 className="text-sm lg:text-lg">
                  Adventure with Orangesoft lasting 5 years
                </h2>
                <img src={arrow} alt="arrow link" />
              </div>
              <p className="mb-4 text-sm text-color-3 lg:text-lg">
                25 projects realised 🎉
              </p>
              <div className="relative">
                <img src={projects} alt="projects images" />
              </div>
            </div>
            <div className="grid h-3/4 grid-cols-2 gap-4">
              <div className="relative">
                <img className="size-full" src={phone} alt="phone" />
              </div>
              <div>
                <div className="card mb-4 h-1/2 p-8">
                  <img src={twitter} alt="twitter profil" />
                </div>
                <div className="h-1/2">
                  <img className="bg-cover" src={card6} alt="card 6" />
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
