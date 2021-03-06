import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (fav) => fav.placeId === restaurant.placeId
  );
  return (
    <FavouriteButton
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant);
      }}
    >
      <AntDesign
        size={24}
        color={isFavourite ? "red" : "white"}
        name={isFavourite ? "heart" : "hearto"}
      />
    </FavouriteButton>
  );
};
