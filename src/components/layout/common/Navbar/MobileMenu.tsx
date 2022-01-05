import Link from "next/link";
import { links } from "./Navbar";

const MobileMenu: React.FunctionComponent = () => {
  const mobileLinks = links.map(({ href, name }) => (
    <div className="text-lg font-semibold px-10 text-green-400">
      <Link href={href}>{name}</Link>
    </div>
  ));
  return (
    <div className="w-[300px] sm:w-[384px] bg-gray-100  py-10 rounded-l-sm rounded-br-sm space-y-5">
      {mobileLinks}
    </div>
  );
};

export default MobileMenu;
