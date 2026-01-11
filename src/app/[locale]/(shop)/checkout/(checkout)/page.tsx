import Link from "next/link";

import { Title } from "@/components";
import Image from "next/image";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from "./ui/PlaceOrder";
import { getTranslations } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export default async function CheckoutPage({ params }: Props) {
  const t = await getTranslations("Checkout");

  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title={t("title")} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Carrito */}
          <div className="mt-5 flex flex-col">
            <span className="text-xl">{t("adjustItems")}</span>
            <Link href="/cart" className="mb-5 underline">
              {t("editCart")}
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
