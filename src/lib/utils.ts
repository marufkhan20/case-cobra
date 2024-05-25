import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
};

export const constructMetaData = ({
  title = "CaseCobra - Hight-quality phone cases",
  description = "Create custom hight-quality phone cases in second",
  image = "/thmbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: image }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@mdmaruf",
  },
  icons,
});
