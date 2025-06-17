import { TurnsTile } from "./CloudFlare";

export {};

declare global {
  interface Window {
    MercadoPago: unknown;
    onTurnstileLoad: () => void;
    turnstile: TurnsTile;
  }
}
