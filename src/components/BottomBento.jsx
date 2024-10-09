import { card10, card7, card8, card9, figmaIcon } from "../assets";

const BottomBento = () => {
  return (
    <section className="container my-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card px-0 pb-0">
          <div className="flex justify-between px-16">
            <div>
              <h2 className="">45K+ Downloads in Figma</h2>
              <p className="mb-4 text-color-3">
                Freebie design systems & libraries for design community 🗂
              </p>
            </div>
            <img src={figmaIcon} alt="Figma icon" />
          </div>
          <img className="" src={card7} alt="card background" />
        </div>
        <div>
          <div className="mb-4">
            <img src={card8} alt="card background" />
          </div>
          <div className="flex gap-4">
            <div>
              <img src={card9} alt="card background" />
            </div>
            <div>
              <img src={card10} alt="card background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBento;
