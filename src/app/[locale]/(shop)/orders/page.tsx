export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getOrdersByUser } from "@/actions";
import { Title } from "@/components";

import { Link } from "@/i18n/routing";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { getTranslations } from "next-intl/server";

export default async function OrdersPage() {
  const t = await getTranslations("Orders");
  const { ok, orders = [] } = await getOrdersByUser();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <>
      <Title title={t("title")} />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-muted">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-foreground">
                #ID
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-foreground">
                {t("fullName")}
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-foreground">
                {t("status")}
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-foreground">
                {t("date")}
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-foreground">
                {t("options")}
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b bg-card transition duration-300 ease-in-out hover:bg-accent">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">{order.id.split("-").at(-1)}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-foreground">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center whitespace-nowrap px-6 py-4 text-sm font-light text-foreground">
                  {order.isPaid ? (
                    <>
                      <IoCardOutline className="text-green-800 dark:text-green-400" />
                      <span className="mx-2 text-green-800 dark:text-green-400">{t("paid")}</span>
                    </>
                  ) : (
                    <>
                      <IoCardOutline className="text-red-800 dark:text-red-400" />
                      <span className="mx-2 text-red-800 dark:text-red-400">{t("notPaid")}</span>
                    </>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-foreground">
                  {order.createdAt.toISOString().split("T").at(0)}
                </td>
                <td className="px-6 text-sm font-light text-foreground">
                  <Link href={`/orders/${order.id}`} className="hover:underline">
                    {t("viewOrder")}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
