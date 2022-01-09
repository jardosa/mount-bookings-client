import { Menu } from "@headlessui/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "./Navbar";

const MobileMenu: React.FunctionComponent = () => {
  const mobileLinks = links.map(({ href, name }) => (
    <Menu.Item key={href}>
      {({ active }) => (
        <div
          className={[
            active && " bg-gray-200",
            "text-base font-semibold px-10 text-green-400  py-2 ",
          ].join(" ")}
        >
          <Link href={href}>{name}</Link>
        </div>
      )}
    </Menu.Item>
  ));
  return (
    <Menu as="div" className="md:hidden block flex-auto">
      <Menu.Button>
        <AiOutlineMenu className="w-[40px] h-[40px] hover:text-green-700 transition" />
      </Menu.Button>
      <Menu.Items className="fixed top-16 left-0 w-[300px] sm:w-[384px] bg-gray-100 rounded-l-sm rounded-br-sm">
        {mobileLinks}
      </Menu.Items>
    </Menu>
  );
};

export default MobileMenu;
