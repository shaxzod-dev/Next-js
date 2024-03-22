export type TypeJsonData = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};
export interface INavData {
  id: number;
  text: string;
  href: "/about" | "/contacts" | "/";
}
