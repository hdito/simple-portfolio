import { PropsWithChildren } from "react";
import menuStyles from "@/styles/Menu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Signature } from "./Signature";

export const Menu = ({ children }: PropsWithChildren): JSX.Element => {
  const links: { alt: string; src: string; href: string }[] = [
    { alt: "Home", href: "/", src: "/home.svg" },
    { alt: "About", href: "/about", src: "/profile.svg" },
    { alt: "Projects", href: "/projects", src: "/stack.svg" },
    { alt: "Qualification", href: "/qualification", src: "/school.svg" },
    { alt: "Contact", href: "/contact", src: "/mail.svg" },
  ];
  return (
    <div className={menuStyles.menu__container}>
      <Signature />
      <div className={menuStyles.menu__content}>{children}</div>
      <div className={menuStyles.menu}>
        {links.map((link) => (
          <Link key={link.src} href={link.href}>
            <Image
              className={menuStyles.menu__link}
              src={link.src}
              width={40}
              height={40}
              alt={link.alt}
            />
          </Link>
        ))}
        <button className={menuStyles.menu__share}>
          <Image src="/share.svg" width={40} height={40} alt="Share" />
        </button>
      </div>
    </div>
  );
};
