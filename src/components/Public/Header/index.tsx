import { Flags } from "@components/shared/layouts/Flags";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div>
        <div className="information flex">
          <div className="address">
            <span className="text-sm">Nosso Endereço</span>
            <br />
            <p> São José do Imbassai, Maricá - RJ</p>
          </div>
          <div className="contact">
            <div className="email">
              <span className="text-sm">Nos envie um e-mail</span>
              <br />
              <Link href="mailto:contato@agmturismomarica.com.br">
                contato@agmturismomarica.com.br
              </Link>
            </div>
            <div className="phone">
              <span className="text-sm">Fale conosco</span>
              <br />
              <Link href="tel:+55 21 97129-2030">+55 21 97129-2030</Link>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div>
            <div className="logo">
              <Image
                src={"/imgs/logo-horizontal.png"}
                width={100}
                height={100}
                alt="logotype AGM"
              />
            </div>
            <div>
              <ul>
                <li>Sobre Nós</li>
                <li>Nossos Guias</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="languages">
              <Flags />
            </div>
            <div className="events">
              <Link href={"#events"}>Eventos</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
