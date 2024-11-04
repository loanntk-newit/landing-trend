/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import Link from "next/link";

type HeaderProps = {
  children?: ReactElement;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="w-full row-start-1 fixed z-50 ease-in duration-300 top-0">
      <div className="mx-auto max-w-5xl">
        <nav className="relative container z-50 flex flex-wrap items-center justify-between py-4 px-8 mx-auto xl:px-0">
          <div className="flex">
            {/* <img src="/logo.png" alt={process.env.NEXT_PUBLIC_TITLE className="h-10" /> */}
          </div>
          <div className="flex gap-8 items-center">
            <div className="text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 list-none lg:flex">
                <li className="flex items-center px-3 gap-3">
                  {process.env.NEXT_PUBLIC_URL_DISCORD ? (
                    <Link
                      href={process.env.NEXT_PUBLIC_URL_DISCORD}
                      target="_blank"
                    >
                      <img
                        src="./icons/discord.svg"
                        alt="Join us on Discord"
                        className="w-8 h-8"
                      />
                    </Link>
                  ) : null}
                  {process.env.NEXT_PUBLIC_URL_TWITTER ? (
                    <Link
                      href={process.env.NEXT_PUBLIC_URL_TWITTER}
                      target="_blank"
                    >
                      <img
                        src="./icons/twitter.svg"
                        alt="Follow us on Twitter"
                        className="w-8 h-8"
                      />
                    </Link>
                  ) : null}
                  {process.env.NEXT_PUBLIC_URL_TELEGRAM ? (
                    <Link
                      href={process.env.NEXT_PUBLIC_URL_TELEGRAM}
                      target="_blank"
                    >
                      <img
                        src="./icons/telegram.svg"
                        alt="Join us on Telegram"
                        className="w-8 h-8"
                      />
                    </Link>
                  ) : null}
                  {children}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
