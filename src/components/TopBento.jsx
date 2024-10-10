import { mainBlock, arrow, projects, phone, twitter, card6 } from "../assets";
import { stacks } from "../constants";

const TopBento = () => {
  return (
    <section className="container lg:mt-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-4">
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
                    className="size-28 text-color-3"
                    src={item.icon}
                    alt={item.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="card mb-4 overflow-x-hidden">
            <div className="flex justify-between">
              <h2 className="text-sm lg:text-lg">
                Adventure with Orangesoft lasting 5 years
              </h2>
              <img src={arrow} alt="arrow link" />
            </div>
            <p className="mb-4 text-sm text-color-3 lg:text-lg">
              25 projects realised 🎉
            </p>
            <img
              className="translate-x-8 lg:translate-x-16"
              src={projects}
              alt="projects images"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img className="size-full" src={phone} alt="phone" />
            </div>
            <div>
              <div className="card mb-4 p-8">
                <img src={twitter} alt="twitter profil" />
              </div>
              <div className="card p-0">
                <img src={card6} alt="card 6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBento;
