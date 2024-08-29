import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Modal from "../Modal/Modal";
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6LcF-DEqAAAAALc3TW8PIyaga4OFrhig2mNouKZ2';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Accueil", href: "#home-section", current: false },
  { name: "A Propos", href: "#exchange-section", current: false },
  { name: "Niveau d'utilisation", href: "#features-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
  { name: "Contacter Nous", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Ajout de l'état pour le modal

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

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);

    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const handleContactClick = () => {
    setIsModalOpen(true); // Ouvrir le modal au clic sur "Contacter Nous"
  };

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
      };
  return (
    <Disclosure as="nav" className="navbar-light dark:navbar">
      <>
        {/* Navigation bar content here */}
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <div className="flex flex-shrink-0">
                <img
                  className="block h-10 w-20px lg:hidden"
                  src={
                    isDarkMode
                      ? "/images/Logo/logo-dark.svg"
                      : "/images/Logo/logo-light.svg"
                  }
                  alt="Go'Babi"
                />
                <img
                  className="hidden h-48px w-48px lg:block"
                  src={
                    isDarkMode
                      ? "/images/Logo/logo-dark.svg"
                      : "/images/Logo/logo-light.svg"
                  }
                  alt="Go'Babi"
                  style={{ width: "100%" }}
                />
              </div>

              {/* LINKS */}
              <div className="hidden lg:flex items-center border-right">
                <div className="flex justify-end">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-gray-700 dark:text-gray-300"
                          : "navlinks text-white hover:text-offwhite hover-underline",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                      onClick={
                        item.name === "Contacter Nous"
                          ? handleContactClick
                          : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <button className="hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white">
                Connexion
              </button>

              {/* DARK MODE TOGGLE */}
              <div className="ml-4">
                <button
                  onClick={toggleDarkMode}
                  aria-label="Toggle Dark Mode"
                  className="text-gray-700 dark:text-gray-300"
                >
                  {isDarkMode ? (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>

        {/* MODAL FOR CONTACT US */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Contactez-nous</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nom et Prénoms
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Numéro de Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Objet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Envoyer
          </button>
        </div>

          </form>
        </Modal>
      </>
    </Disclosure>
  );
};

export default Navbar;
function setRecaptchaToken(token: string | null) {
    throw new Error("Function not implemented.");
}

