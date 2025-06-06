import { BrandInstagram } from "@assets/Icons/black/BrandInstagram";
import { BrandTikTok } from "@assets/Icons/black/BrandTiktok";
import { BrandYoutube } from "@assets/Icons/black/BrandYoutube";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="text-center border-t-2 border-secondary">
        <div className="content max-w-[1100px] mx-auto">
          <div>
            <ul className="flex justify-center my-4">
              <li className="mx-2">
                <Link href="">
                  <BrandTikTok />
                </Link>
              </li>
              <li className="mx-2">
                <Link href="">
                  <BrandInstagram />
                </Link>
              </li>
              <li className="mx-2">
                <Link href="">
                  <BrandYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p>© 2024 AGM | Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
