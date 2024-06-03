import { GamesWithDiscount } from "../../../website-data/GamesCardData.js";
import GameCardsSlider from "../../slider/additional-slider/GameCardsSlider.jsx";
import ChevronRightIcon from "../../cards/icons/ChevronRightIcon.jsx";
import { gameFullData } from "../../../website-data/GameFullData.js";

function GameCardsSection() {
  const gamesWithDiscounts = gameFullData.filter(
    (item) => item.discount !== 0.0,
  );

  return (
    <div>
      <div className="group peer ml-7 flex w-[150px] items-center gap-2 hover:cursor-pointer">
        <h2 className="text-lg text-custom-white">Special Offers</h2>
        <ChevronRightIcon />
      </div>
      <GameCardsSlider gameCards={gamesWithDiscounts} />
    </div>
  );
}

export default GameCardsSection;
