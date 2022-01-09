import createStripe from "stripe-client";
import { host } from "../../utils/env";
const stripe = createStripe(
  "pk_test_51KEgnEFtqgxeNt6Yudxwn5oPOQjkoLh2xMA2zGVAaeYxzI1BIUC7EZIkCsJRHmG2rQNEfcjCiyFKgGXzkwO4Zfmv00jV9oK67P"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
