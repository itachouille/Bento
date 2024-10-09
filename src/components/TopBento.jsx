import { mainBlock, arrow, projects, phone, twitter, card6 } from "../assets";
import { stacks } from "../constants";

const TopBento = () => {
  return (
    <section className="container mt-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-4">
            <img src={mainBlock} alt="journaling image" />
          </div>
          <div className="card">
            <div className="flex justify-between">
              <h2 className="">Adventure with Orangesoft lasting 5 years</h2>
              <img src={arrow} alt="arrow link" />
            </div>
            <p className="mb-4 text-color-3">21 projects realised 🎉</p>
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
          <div className="card mb-4">
            <div className="flex justify-between">
              <h2>Adventure with Orangesoft lasting 5 years</h2>
              <img src={arrow} alt="arrow link" />
            </div>
            <p className="mb-8 text-color-3">25 projects realised 🎉</p>
            <img className="" src={projects} alt="projects images" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <img src={phone} alt="phone" />
            </div>
            <div>
              <div className="card mb-1 p-8">
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
