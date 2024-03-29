import { Icons } from "~/assets";
import { IBrandData,  INavData, ISignUpData } from "~/types";

export const navData: INavData[] = [
  {
    id: 0,
    href: "/about",
    text: "Plant pots",
  },
  {
    id: 1,
    href: "/about",
    text: "Ceramics",
  },
  {
    id: 2,
    href: "/about",
    text: "Tables",
  },
  {
    id: 3,
    href: "/about",
    text: "Chairs",
  },
  {
    id: 4,
    href: "/about",
    text: "Crockery",
  },
  {
    id: 5,
    href: "/about",
    text: "Tableware",
  },
  {
    id: 6,
    href: "/about",
    text: "Cutlery",
  },
];

export const BrandData: IBrandData[] = [
  {
    id: 0,
    icon: <Icons.DeliveryIcon className="w-full h-full" />,
    title: "Next day as standard",
    text: "Order before 3pm and get your order the next day as standard",
  },
  {
    id: 1,
    icon: <Icons.CheckIcon />,
    title: "Made by true artisans",
    text: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    id: 2,
    icon: <Icons.WalletIcon />,
    title: "Unbeatable prices",
    text: "For our materials and quality you won’t find better prices anywhere",
  },
  {
    id: 3,
    icon: <Icons.SproutIcon />,
    title: "Recycled packaging",
    text: "We use 100% recycled to ensure our footprint is more manageable",
  },
];

export const SignUpData: ISignUpData[] = [
  {
    id: 0,
    title: "Exclusive offers",
  },
  {
    id: 1,
    title: "Free events",
  },
  {
    id: 2,
    title: "Large discounts",
  },
];
