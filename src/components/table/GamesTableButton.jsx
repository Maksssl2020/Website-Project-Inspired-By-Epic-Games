import GamePrice from "../main-elements/GamePrice.jsx";

function GamesTableButton({ buttonContent }) {
  const { image, title, discount, price } = buttonContent;

  return (
    <button className="group flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-3 hover:border-custom-emerald hover:bg-custom-gray-300 2xl:h-[100px] 2xl:w-[355px] 3xl:h-[160px] 3xl:w-[455px]">
      <img
        className="inset-0 h-full rounded-lg transition-transform ease-in-out group-hover:scale-110"
        src={image}
        alt={title}
      />
      <div className="ml-5 flex flex-col space-y-0.5 text-left">
        <p>{title}</p>
        <div className="text-sm">
          <GamePrice baseGamePrice={price} discount={discount} />
        </div>
      </div>
    </button>
  );
}

export default GamesTableButton;
