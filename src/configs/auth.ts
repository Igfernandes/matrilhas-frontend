const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 2);

export const AUTH_RULES = {
  cookies: {
    httpOnly: process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD", // Para segurança, se necessário
    secure: process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD",
    expires: expirationDate
  },
};
