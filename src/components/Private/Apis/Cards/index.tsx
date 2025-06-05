import { Config } from "@assets/Icons/black/Config";
import i18n from "@configs/i18n";
import Image from "next/image";
import { CardsProps } from "./type";

export function Cards({ items }: CardsProps) {
  return (
    <div className="cards flex flex-wrap justify-between p-2">
      {items.map(({ id, img, status, handleModal, text }, key) => (
        <div key={key} className="card w-[24%] bg-white shadow-md rounded-lg mx-1">
          <div className="content flex flex-col justify-between h-full p-4">
            <div className="logotype pb-3">
              <Image
                src={img}
                width={165}
                height={165}
                className="mx-auto h-28 w-28"
                alt="logotype"
              />
            </div>
            <div className="describe border-t-2 border-tertiary pt-2">
              <p className="text-xs text-justify">{text}</p>
            </div>
            <div className="footer flex flex-wrap justify-between border-t-2 border-t-tertiary pt-3 mt-2">
              <div className="status">
                <p className="bg-red px-2 text-white rounded-lg">
                  {i18n(`words.${status.toLocaleLowerCase()}`)}
                </p>
              </div>
              <div
                className="cursor-pointer flex"
                onClick={() => handleModal(true, id)}
              >
                <span>{i18n(`words.connect`)} </span>
                <Config className="w-5 ml-1" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
