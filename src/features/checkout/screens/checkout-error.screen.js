import React from "react";

import { SafeArea } from "../../../components/utils/safe-space.components";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
