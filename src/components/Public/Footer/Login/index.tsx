import Link from "next/link";

export function FooterLogin() {
  return (
    <div>
      <div className="text-center">
        <span className="text-xs font-normal">
          Developed by <a href="https://companymarket.com.br"><strong>Company Market</strong></a>
        </span>
        <br />
        <Link href="/politics-privacy">
          <span className="text-xs">Politicas de Privacidade</span>
        </Link>
      </div>
    </div>
  );
}
