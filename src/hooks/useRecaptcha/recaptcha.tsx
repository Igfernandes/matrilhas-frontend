// RecaptchaComponent.tsx
import Turnstile from "react-turnstile";

type Props = {
  onVerify: (token: string) => void;
  sitekey: string;
};

export function Recaptcha({ onVerify, sitekey }: Props) {
  if (!sitekey) return null;

  return (
    <Turnstile
      sitekey={sitekey}
      onVerify={(token) => {
        onVerify(token);
      }}
    />
  );
}
