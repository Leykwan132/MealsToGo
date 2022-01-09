import * as React from "react";
import { SvgXml } from "react-native-svg";
import stars from "../../../../assets/stars";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  RatingOpenContainer,
  Rating,
  IsOpen,
  Icon,
} from "./restaurant-into-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";
export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "porzhang restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address = "your mum de house",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RatingOpenContainer>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={stars}
                width="20"
                height="20"
              />
            ))}
          </Rating>
          <IsOpen>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width="20" height="20" />}

            <Spacer position="left" size="large" />
            <Icon source={{ uri: icon }} />
          </IsOpen>
        </RatingOpenContainer>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
