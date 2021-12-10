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
        <div className="navbar-menu">
        {menuItems.map(({ text, href }) => {
          return (
            <Link href={href} key={href}>
              <a className="navbar-menu_item">{text}</a>
            </Link>
          );
        })}
      </div>
        <div className="navbar-contact">
          <a href="tel:+79803441988" className="navbar-contacts_tel_icon">
            <Image src={phone} alt="" width="30px" height="30px"/>
          </a>
          <div className="navbar-contacts_tel">+7 (980) 344 19-88</div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
