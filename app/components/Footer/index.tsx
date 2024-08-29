"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Liens utiles",
    link: ["Home", "Exchange", "Features", "FAQ"],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/insta", href: "https://instagram.com/" },
  { imgsrc: "/images/Footer/dribble", href: "https://dribble.com/" },
  { imgsrc: "/images/Footer/twitter", href: "https://x.com/Gobabi225" },
  { imgsrc: "/images/Footer/youtube", href: "https://youtube.com/" },
];

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      setIsDarkMode(prefersDark);
    }

    document.documentElement.classList.toggle(
      "dark",
      prefersDark || storedTheme === "dark"
    );
  }, []);

  return (
    <div className="relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-6">
            <Image
              className="block h-12 w-20px mb-4"
              src={
                isDarkMode
                  ? "/images/Logo/logo-dark.svg"
                  : "/images/Logo/logo-light.svg"
              }
              alt="Go'Babi"
              width={201}
              height={64}
            />
            <h3 className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-9 mb-4 lg:mb-16">
              Cryptocurrency is a type of virtual currency that uses
              cryptography to secure transactions that are digitally recorded on
              a distributed ledger, such as a blockchain.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i} target="_blank">
                  <Image
                    src={
                      isDarkMode
                        ? `${items.imgsrc}-light.svg`
                        : `${items.imgsrc}-dark.svg`
                    }
                    alt={items.imgsrc}
                    className="footer-icons"
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-gray-700 dark:text-gray-300 text-xl font-medium mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-gray-700 dark:text-gray-300 text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMN-4 */}
          <div className="col-span-4">
            <h3 className="text-gray-700 dark:text-gray-300 text-xl font-medium mb-9">
              Contactez-nous
            </h3>
            <Link href="tel:+2250700532612">
              <h4 className="text-gray-700 dark:text-gray-300 text-sm font-normal mb-6 flex gap-2">
                <Image
                  src={"/images/Footer/number.svg"}
                  alt="number-icon"
                  width={20}
                  height={20}
                />
                (+225) 07 00 53 26 12
              </h4>
            </Link>
            <Link href="mailto:infos@gobabi.net">
              <h4 className="text-gray-700 dark:text-gray-300 text-sm font-normal mb-6 flex gap-2">
                <Image
                  src={"/images/Footer/email.svg"}
                  alt="email-icon"
                  width={20}
                  height={20}
                />
                infos@gobabi.net
              </h4>
            </Link>
            <h4 className="text-gray-700 dark:text-gray-300 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/address.svg"}
                alt="address-icon"
                width={20}
                height={20}
              />
              Djorobité II, Codody, Abidjan, CÔTE D&rsquo;IVOIRE
            </h4>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-gray-700 dark:text-gray-300">
          @2023 - Tous droits réservés à{" "}
          <Link href="https://groupdayasam.com/" target="_blank">
            Dayasam Côte d&rsquo;Ivoire
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
