import { card10, card7, card8, card9, figmaIcon } from "../assets";

const BottomBento = () => {
  return (
    <section id="bottom" className="container mb-20 mt-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card overflow-y-hidden px-0 pb-0">
          <div className="flex justify-between px-16">
            <div className="pb-2">
              <p className="text-sm xl:text-lg">45K+ Downloads in Figma</p>
              <p className="mb-4 text-sm text-color-3 xl:text-lg">
                Freebie design systems & libraries for design community 🗂
              </p>
            </div>
            <img src={figmaIcon} alt="Figma icon" />
          </div>
          <img className="w-full" src={card7} alt="card background" />
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
