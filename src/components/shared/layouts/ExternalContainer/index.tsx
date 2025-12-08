import { Footer } from "@components/Public/Footer";
import { PrivacyAndCookies } from "../PrivacyAndCookies";
import { Flags } from "@components/shared/layouts/Flags";
import { FooterOptions } from "@components/Public/Footer/type";
import Head from "next/head";
import { useRef } from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: FooterOptions;
};

export function ExternalContainer({ title , children, className = "", footer = "LOGIN" }: Props) {
  const company = useRef<Record<string, string>>({
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Company",
  });
  return (
    <>
      <Head>
        <title> {title ? `${title} - `: null} {company.current.name} Plataforma Digital</title>
      </Head>
      <main
        className={`${className} bg-[url(/imgs/backgrounds/3d-wave.png)] bg-cover bg-no-repeat min-h-[87vh] md:min-h-[100vh] flex items-center flex-col justify-center font-poppins`}
      >
        <div className="fixed top-4 right-0 bg-white px-0 py-2 shadow">
          <Flags />
        </div>
        <div
          className={`container w-[90%] sm:w-[424px] mx-auto shadow-md border-secondary border-2 px-6 sm:py-6 py-6 mt-2 rounded-[1.5rem] mb-10`}
        >
          {children}
        </div>
        <Footer type={footer} />
        <PrivacyAndCookies />
      </main>
    </>
  );
}
