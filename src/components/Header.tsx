import Image from "next/image";
import Link from "next/link";

const menuBars = [
  "Home",
  "Services",
  "Experties",
  "Cases",
  "Pricing",
  "Company",
];

function Header() {
  return (
    <div>
      <header className="pt-[30px]">
        <div className="l-container flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-xl flex items-center gap-2.5"
          >
            <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="MicPro Logo"
            ></Image>
            <span>MicPro</span>
          </Link>

          <ul className="flex items-center justify-between gap-10">
            {menuBars.map((item) => (
              <li key={item}>
                <Link href={"#"} className="font-medium">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="font-medium leading-normal py-[18px] px-[50px] rounded-full 
          text-white bg-primary"
          >
            Start a project
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
