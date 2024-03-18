import Link from "next/link";
import { DrawerDemo } from "~/components/drawer";
import { DropdownMenuDemo } from "~/components/dropdown";

export default function Home() {
  return (
    <>
      <div className="container">
        <h2 className="text-left">Lorem ipsum dolor sit amet.</h2>
        <Link className="underline text-blue-600" href={"/about"}>
          About
        </Link>
        <div className="flex flex-col">
          <DropdownMenuDemo />
        </div>
      </div>
    </>
  );
}
