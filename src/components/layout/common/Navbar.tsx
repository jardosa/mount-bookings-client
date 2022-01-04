import Image from "next/image";
import Link from "next/link";

const links = [
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
    <div className="w-full h-16 flex px-10 items-center justify-between border-b">
      <Link href="/">
        <a href="/" className="flex items-center gap-5">
          <Image
            className="rounded-full"
            src="/yta.jpg"
            width={48}
            height={48}
          />
          <p className="text-2xl font-bold text-green-900 uppercase">
            Philippine Mountains
          </p>
        </a>
      </Link>
      <div className="space-x-5">{navbarLinks}</div>
    </div>
  );
};

export default Navbar;
