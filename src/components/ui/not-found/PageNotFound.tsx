import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { useTranslations } from "next-intl";

export const PageNotFound = () => {
  const t = useTranslations("NotFound");

  return (
    <div className="flex h-[800px] w-full flex-col-reverse items-center justify-center align-middle text-foreground md:flex-row">
      <div className="mx-5 px-5 text-center">
        <h2 className={`${titleFont.className} text-9xl antialiased`}>404</h2>
        <p className="text-xl font-semibold">{t("title")}</p>
        <p className="font-light">
          <span>{t("description")}</span>
          <Link href="/" className="font-normal transition-all hover:text-primary hover:underline">
            {t("link")}
          </Link>
        </p>
      </div>

      <div className="mx-5 px-5">
        <Image src="/imgs/starman_750x750.png" alt="Starman" className="p-5 sm:p-0" width={550} height={550} />
      </div>
    </div>
  );
};
