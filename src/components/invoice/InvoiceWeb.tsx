"use client";

import React, { useRef } from "react";
import Image from "next/image";
// import { useReactToPrint } from "react-to-print"; // We can implement print later if needed, or just use window.print()
import { IoPrintOutline } from "react-icons/io5";
import { currencyFormat } from "@/utils";

interface InvoiceWebProps {
  orderId: string;
  orderDate: Date;
  billingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
  };
  products: {
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subTotal: number;
  tax: number;
  total: number;
  locale?: string;
}

export const InvoiceWeb = ({ orderId, orderDate, billingAddress, products, subTotal, tax, total, locale = "es" }: InvoiceWebProps) => {
  const messages = {
    es: {
      invoice: "FACTURA",
      officialDoc: "Documento Oficial",
      order: "Orden #",
      billTo: "Facturado a",
      from: "De",
      product: "Producto",
      qty: "Cant.",
      price: "Precio",
      total: "Total",
      subtotal: "Subtotal",
      taxes: "Impuestos (15%)",
      print: "Imprimir Factura",
      footer1: "Gracias por confiar en CrowdFast Store.",
      footer2: "Si tiene alguna duda sobre esta factura, por favor contáctenos a support@crowdfast.store",
    },
    en: {
      invoice: "INVOICE",
      officialDoc: "Official Document",
      order: "Order #",
      billTo: "Bill To",
      from: "From",
      product: "Product",
      qty: "Qty",
      price: "Price",
      total: "Total",
      subtotal: "Subtotal",
      taxes: "Taxes (15%)",
      print: "Print Invoice",
      footer1: "Thank you for trusting CrowdFast Store.",
      footer2: "If you have any questions about this invoice, please contact us at support@crowdfast.store",
    },
  };

  const t = (messages as any)[locale] || messages.es;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(orderDate));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-8 print:bg-white print:p-0">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl print:max-w-none print:shadow-none">
        {/* Actions Bar (Hidden on print) */}
        <div className="flex justify-end border-b border-gray-200 bg-gray-50 px-8 py-4 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <IoPrintOutline size={20} />
            {t.print}
          </button>
        </div>

        {/* Invoice Content */}
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="mb-12 flex flex-col items-start justify-between sm:flex-row">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">{t.invoice}</h1>
              <p className="mt-1 text-gray-500">{t.officialDoc}</p>
            </div>
            <div className="mt-4 text-right sm:mt-0">
              <p className="text-lg font-semibold text-gray-900">
                {t.order} {orderId.split("-")[0]}
              </p>
              <p className="text-gray-600">{formattedDate}</p>
            </div>
          </div>

          <div className="my-8 border-t border-gray-200"></div>

          {/* Addresses */}
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">{t.billTo}</h2>
              <div className="leading-relaxed text-gray-700">
                <p className="text-lg font-semibold text-gray-900">
                  {billingAddress.firstName} {billingAddress.lastName}
                </p>
                <p>{billingAddress.address}</p>
                <p>
                  {billingAddress.city}, {billingAddress.postalCode}
                </p>
                <p>{billingAddress.country}</p>
                <p>{billingAddress.phone}</p>
              </div>
            </div>
            <div className="sm:text-right">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">{t.from}</h2>
              <div className="leading-relaxed text-gray-700">
                <p className="text-lg font-semibold text-gray-900">CrowdFast Store</p>
                <p>123 Business Street</p>
                <p>City, Country</p>
                <p>support@crowdfast.store</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-400">{t.product}</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-400">{t.qty}</th>
                  <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-gray-400">{t.price}</th>
                  <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-gray-400">{t.total}</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="relative mr-4 h-10 w-10 flex-shrink-0">
                          {product.image && <Image src={product.image} alt={product.title} fill className="rounded-md object-cover" />}
                        </div>
                        <span className="font-medium text-gray-900">{product.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700">{product.quantity}</td>
                    <td className="px-4 py-4 text-right text-gray-700">{currencyFormat(product.price, locale)}</td>
                    <td className="px-4 py-4 text-right font-medium text-gray-900">
                      {currencyFormat(product.price * product.quantity, locale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-12 flex justify-end">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">{t.subtotal}</span>
                <span className="font-medium text-gray-900">{currencyFormat(subTotal, locale)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span className="text-gray-600">{t.taxes}</span>
                <span className="font-medium text-gray-900">{currencyFormat(tax, locale)}</span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-lg font-bold text-gray-900">{t.total}</span>
                <span className="text-lg font-bold text-blue-600">{currencyFormat(total, locale)}</span>
              </div>
            </div>
          </div>

          <div className="my-12 border-t border-gray-200"></div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">{t.footer1}</p>
            <p>{t.footer2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
