import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
const MyText = styled.Text`
  text-align: center;
  font-size: 10px;
  font-family: ${(props) => props.theme.fonts.body};
`;
const CompactImage = styled(Image)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  const { photos } = restaurant;
  return (
    <Item>
      <Image
        source={{
          uri: photos[0],
        }}
      />
      <MyText>{restaurant.name}</MyText>
    </Item>
  );
};
