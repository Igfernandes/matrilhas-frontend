import { Email } from "@assets/Icons/black/Email";
import { Facebook } from "@assets/Icons/black/Facebook";
import { Instagram } from "@assets/Icons/black/Instagram";
import { WhatsApp } from "@assets/Icons/black/WhatsApp";
import i18n from "@configs/i18n";

export const platformsCards = [
  {
    icon: <Email />,
    label: i18n('words.email') as string,
    value: "EMAIL",
    text: "Só pode enviar texto e links.",
    hasFile: "SIM",
    hasImage: "SIM",
  },
  {
    icon: <WhatsApp />,
    label: i18n('words.whatsapp') as string,
    value: "WHATSAPP",
    text: "Só pode enviar texto e links.",
    hasFile: "NÃO",
    hasImage: "SIM",
  },
  {
    icon: <Instagram />,
    label: i18n('words.instagram') as string,
    value: "INSTAGRAM",
    text: "Só pode enviar texto e links.",
    hasFile: "NÃO",
    hasImage: "NÃO",
  },
  {
    icon: <Facebook />,
    label: i18n('words.facebook') as string,
    value: "FACEBOOK",
    text: "Só pode enviar imagens, texto e links.",
    hasFile: "NÃO",
    hasImage: "NÃO",
  }
];
