import Link from "next/link";
import Image from "next/image";
import phone from "../img/phone-icon.svg";

const menuItems = [
  { text: "Главная", href: "/" },
  { text: "Каталог", href: "/catalog" },
  { text: "Доставка и Оплата", href: "/delivery-payment" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <h1 className="navbar-title">ВОЗДУШНАЯ АКАДЕМИЯ</h1>
        <span className="navbar-contact">
          <span className="navbar-contact_title">Позвонить</span><a href="tel:+79803441988" className="navbar-contact_tel">
            <Image src={phone} alt="" width="60px" />
          </a>
        </span>
      </div>
      <div className="navbar-menu">
        {menuItems.map(({ text, href }) => {
          return (
            <Link href={href} key={href}>
              <a className="navbar-menu_item">{text}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
