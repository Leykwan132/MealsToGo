import styled from "styled-components";
import { Card } from "react-native-paper";
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)``;

export const Info = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.caption}
    color: ${(props) => props.theme.colors.ui.primary};
  `;

export const RatingOpenContainer = styled.View`
  flex-direction: row;
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.sizes[0]};
  padding-bottom: ${(props) => props.theme.sizes[0]};
`;
export const IsOpen = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  padding-top: ${(props) => props.theme.sizes[0]};
  padding-bottom: ${(props) => props.theme.sizes[0]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15;
`;
