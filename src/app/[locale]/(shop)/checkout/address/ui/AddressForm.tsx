"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

import type { Address, Country } from "@/interfaces";
import { useAddressStore } from "@/store";
import { deleteUserAddress, setUserAddress } from "@/actions";

type FormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  rememberAddress: boolean;
};

interface Props {
  countries: Country[];
  userStoredAddress?: Partial<Address>;
  locale?: string;
}

export const AddressForm = ({ countries, userStoredAddress = {}, locale = "es" }: Props) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      ...(userStoredAddress as any),
      rememberAddress: false,
    },
  });

  const { data: session } = useSession({
    required: true,
  });

  const setAddress = useAddressStore((state) => state.setAddress);
  const address = useAddressStore((state) => state.address);

  useEffect(() => {
    if (address.firstName) {
      reset(address);
    }
  }, [address, reset]);

  const messages = {
    es: {
      firstName: "Nombres",
      lastName: "Apellidos",
      address: "Dirección",
      address2: "Dirección 2 (opcional)",
      postalCode: "Código postal",
      city: "Ciudad",
      country: "País",
      phone: "Teléfono",
      remember: "¿Recordar dirección?",
      next: "Siguiente",
      select: "[ Seleccione ]",
    },
    en: {
      firstName: "First Name",
      lastName: "Last Name",
      address: "Address",
      address2: "Address 2 (optional)",
      postalCode: "Postal Code",
      city: "City",
      country: "Country",
      phone: "Phone",
      remember: "Remember address?",
      next: "Next",
      select: "[ Select ]",
    },
  };

  const t = (messages as any)[locale] || messages.es;

  const onSubmit = async (data: FormInputs) => {
    const { rememberAddress, ...restAddress } = data;

    setAddress(restAddress);

    if (rememberAddress) {
      await setUserAddress(restAddress, session!.user.id);
    } else {
      await deleteUserAddress(session!.user.id);
    }

    router.push("/checkout");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5">
      <div className="mb-2 flex flex-col">
        <span>{t.firstName}</span>
        <input
          type="text"
          className="rounded-md border border-border bg-muted p-2 text-foreground"
          {...register("firstName", { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.lastName}</span>
        <input
          type="text"
          className="rounded-md border border-border bg-muted p-2 text-foreground"
          {...register("lastName", { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.address}</span>
        <input
          type="text"
          className="rounded-md border border-border bg-muted p-2 text-foreground"
          {...register("address", { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.address2}</span>
        <input type="text" className="rounded-md border border-border bg-muted p-2 text-foreground" {...register("address2")} />
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.postalCode}</span>
        <input
          type="text"
          className="rounded-md border border-border bg-muted p-2 text-foreground"
          {...register("postalCode", { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.city}</span>
        <input
          type="text"
          className="rounded-md border border-border bg-muted p-2 text-foreground"
          {...register("city", { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.country}</span>
        <select className="rounded-md border border-border bg-muted p-2 text-foreground" {...register("country", { required: true })}>
          <option value="">{t.select}</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2 flex flex-col">
        <span>{t.phone}</span>
        <input
          type="text"
          className="rounded-md border border-border bg-muted p-2 text-foreground"
          {...register("phone", { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col sm:mt-1">
        <div className="mb-10 inline-flex items-center">
          <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="checkbox">
            <input
              type="checkbox"
              className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              id="checkbox"
              {...register("rememberAddress")}
            />
            <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>

          <span>{t.remember}</span>
        </div>

        <button
          disabled={!isValid}
          // href="/checkout"
          type="submit"
          // className="btn-primary flex w-full sm:w-1/2 justify-center "
          className={clsx({
            "btn-primary": isValid,
            "btn-disabled": !isValid,
          })}
        >
          {t.next}
        </button>
      </div>
    </form>
  );
};
