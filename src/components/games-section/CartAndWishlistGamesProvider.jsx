import React, { createContext, useCallback, useContext, useState } from "react";

const CartAndWishlistGamesContext = createContext();

function CartAndWishlistGamesProvider({ children }) {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function removeGameFromList(list, setList, gameIndexToRemove) {
    const updatedList = list.filter((_, index) => index !== gameIndexToRemove);
    setList(updatedList);
  }

  const updateGameList = useCallback((newGameList) => {
    setGamesList(newGameList);
    setIsLoading(false);
  }, []);

  return (
    <CartAndWishlistGamesContext.Provider
      value={{
        gamesList,
        setGamesList,
        removeGameFromList: (index) =>
          removeGameFromList(gamesList, setGamesList, index),
        updateGameList,
        isLoading,
      }}
    >
      {children}
    </CartAndWishlistGamesContext.Provider>
  );
}

function useCartAndWishlistOptions() {
  const options = useContext(CartAndWishlistGamesContext);
  return options;
}

export { CartAndWishlistGamesProvider, useCartAndWishlistOptions };
