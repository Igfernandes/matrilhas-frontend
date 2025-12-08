import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { Form404PageProps } from "@components/Public/Forms/types";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Form404({ formSlug }: Form404PageProps) {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <div className="container max-w-[1100px] mx-auto my-12">
        <div className="not-found-dog mb-8">
          <Image
            src={"/imgs/dog-image.png"}
            width={172}
            height={200}
            alt="Dog da AGM"
            className="mx-auto"
          />
        </div>
        <div className="text text-center max-w-[428px] mx-auto mb-6">

          <p className="text-xl ">
            {i18n("Screens.forms.not_stock")}&nbsp;
            <Link
              className="text-white bg-red py-2 px-4 block rounded-lg mt-4"
              href={`/services/?form=${formSlug}`}
            >
              {i18n("Texts.event_page")}
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<Form404PageProps> = async ({
  query,
}) => {
  const { form } = (query as { form: string }) ?? { form: null };


  return {
    props: {
      formSlug: form ?? "",
    },
  };
};
