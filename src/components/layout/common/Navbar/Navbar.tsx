import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

export const links = [
  { name: "HOME", href: "/" },
  { name: "DESTINATIONS", href: "destinations" },
  { name: "ABOUT", href: "about" },
  { name: "CONTACT US", href: "contact-us" },
];

const Navbar: React.FunctionComponent = () => {
  const navbarLinks = links.map(({ name, href }) => (
    <Link href={href}>
      <a href={href} className="text-lg hover:text-green-700 transition">
        {name}
      </a>
    </Link>
  ));
  return (
    <>
      <div className="sticky top-0 z-20 bg-gray-100">
        <div className="w-full relative h-16 flex px-5 sm:px-10 items-center justify-center md:justify-between border-b gap-5">
          <MobileMenu />

          <Link href="/">
            <a
              href="/"
              className="flex items-center  gap-2 sm:gap-5 flex-auto "
            >
              <Image
                className="rounded-full"
                layout="fixed"
                src="/yta.jpg"
                width={48}
                height={48}
              />
              <p className="text-base sm:text-2xl flex-1 font-bold text-green-900 uppercase">
                Philippine Mountains
              </p>
            </a>
          </Link>
          <div className="space-x-5 md:block hidden">{navbarLinks}</div>
        </div>
        {/* <div className="fixed top-16 z-50">
          <MobileMenu />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
