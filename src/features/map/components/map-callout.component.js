import React, { useContext } from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";
import { View, Image } from "react-native";

export const MapCallout = ({ restaurant }) => {
  const photo = restaurant.photos;
  return (
    <View>
      <CompactRestaurantInfo isMap restaurant={restaurant} />
    </View>
  );
};
