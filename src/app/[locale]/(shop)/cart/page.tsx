import Link from "next/link";
import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";
import { getTranslations } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export default async function CartPage({ params }: Props) {
  // redirect('/empty');
  const t = await getTranslations("Cart");

  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title={t("title")} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Carrito */}
          <div className="mt-5 flex flex-col">
            <span className="text-xl">{t("addMoreItems")}</span>
            <Link href="/" className="mb-5 underline">
              {t("continueShopping")}
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="h-fit rounded-xl bg-white p-7 shadow-xl">
            <h2 className="mb-2 text-2xl">{t("orderSummary")}</h2>

            <OrderSummary />

            <div className="mb-2 mt-5 w-full">
              <Link className="btn-primary flex justify-center" href="/checkout/address">
                {t("checkout")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
