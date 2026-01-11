import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { getTranslations } from "next-intl/server";

export default async function EmptyPage() {
  const t = await getTranslations("Cart");

  return (
    <div className="flex h-[800px] items-center justify-center">
      <IoCartOutline size={80} className="mx-5 text-muted-foreground" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold text-foreground">{t("empty")}</h1>

        <Link href="/" className="mt-2 text-4xl text-blue-600 hover:underline dark:text-blue-400">
          {t("continueShopping")}
        </Link>
      </div>
    </div>
  );
}
