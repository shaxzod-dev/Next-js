import { ReactElement } from "react";

export interface INavData {
  id: number;
  text: string;
  href: "/about" | "/contacts" | "/";
}

export interface IBrandData {
  id: number;
  text: string;
  title: string;
  icon: ReactElement;
}

export interface IProductData {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ISignUpData {
  id: number;
  title: string;
}
