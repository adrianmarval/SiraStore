"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const router = useRouter();
  const params = useParams();
  const locale = (params.locale as string) || "es";

  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSummaryInformation());

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (itemsInCart === 0 && loaded === true) {
      router.replace("/empty");
    }
  }, [itemsInCart, loaded, router]);

  if (!loaded) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2">
      <span>{locale === "en" ? "No. Products" : "No. Productos"}</span>
      <span className="text-right">
        {itemsInCart === 1 ? `1 ${locale === "en" ? "item" : "artículo"}` : `${itemsInCart} ${locale === "en" ? "items" : "artículos"}`}
      </span>

      <span>{locale === "en" ? "Subtotal" : "Subtotal"}</span>
      <span className="text-right">{currencyFormat(subTotal, locale)}</span>

      <span>{locale === "en" ? "Taxes (15%)" : "Impuestos (15%)"}</span>
      <span className="text-right">{currencyFormat(tax, locale)}</span>

      <span className="mt-5 text-2xl">{locale === "en" ? "Total:" : "Total:"}</span>
      <span className="mt-5 text-right text-2xl">{currencyFormat(total, locale)}</span>
    </div>
  );
};
