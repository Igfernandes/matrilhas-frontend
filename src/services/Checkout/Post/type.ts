export type PostCheckoutPayload = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  amounts: Array<number>;
  product: string;
  // recaptcha: string;
};
