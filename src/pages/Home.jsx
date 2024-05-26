import GameCardsSection from "../components/sections/games/GameCardsSection.jsx";
import MainSlider from "../components/slider/main-slider/MainSlider.jsx";
import FreeGamesSection from "../components/sections/games/FreeGamesSection.jsx";
import GamesTable from "../components/table/GamesTable.jsx";
import Footer from "../components/footer/Footer.jsx";

function Home() {
  return (
    <div className="my-10 lg:mx-2 xl:mx-20">
      <div className="flex justify-center">
        <MainSlider />
      </div>
      <div className="mx-auto 2xs:mt-20">
        <GameCardsSection />
      </div>
      <div className="mt-20 flex justify-center">
        <FreeGamesSection />
      </div>
      <div className="mt-20 flex justify-center">
        <GamesTable />
      </div>
    </div>
  );
}

export default Home;
