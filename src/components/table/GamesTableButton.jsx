function GamesTableButton({ buttonContent }) {
  const { image, title, discount, price } = buttonContent;

  function calcGamePriceAfterDiscount() {
    let discountAsPercent = discount / 100;
    let gamePriceAfterDiscount = price - price * discountAsPercent;

    return `PLN ${gamePriceAfterDiscount.toFixed(2)}`;
  }

  let gamePrice;
  let discountInfo = null;
  let gamePriceAfterDiscount;

  if (price === 0) {
    gamePrice = "Free";
  } else if (discount > 0) {
    gamePrice = `PLN ${price.toFixed(2)}`;
    gamePriceAfterDiscount = calcGamePriceAfterDiscount();
    discountInfo = (
      <p className="self-center rounded-md bg-custom-emerald md:h-5 md:w-9 md:px-1 md:py-0.5 md:text-[10px] lg:h-6 lg:w-12 lg:px-2 lg:py-1 lg:text-[12px]">
        {`-${discount}%`}
      </p>
    );
  } else {
    gamePrice = `PLN ${price.toFixed(2)}`;
  }

  return (
    <button className="3xl:h-[160px] 3xl:w-[455px] group flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-3 hover:border-custom-emerald hover:bg-custom-gray-300 2xl:h-[100px] 2xl:w-[355px]">
      <img
        className="inset-0 h-full rounded-lg transition-transform ease-in-out group-hover:scale-110"
        src={image}
        alt={title}
      />
      <div className="ml-5 flex flex-col space-y-0.5 text-left">
        <p>{title}</p>
        <div className="flex items-center gap-2 text-sm">
          {discountInfo}
          <p
            className={
              discount > 0 ? "text-custom-gray-100 line-through" : null
            }
          >
            {gamePrice}
          </p>
          <p>{gamePriceAfterDiscount}</p>
        </div>
      </div>
    </button>
  );
}

export default GamesTableButton;
