import instagram from "../img/instagram.png";
import whatsapp from "../img/whatsapp.svg";
import vk from "../img/vk.svg";
import facebook from "../img/facebook.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_feedback">
        <a href="https://wa.me/79803441988 ">
          {" "}
          <Image
            src={whatsapp}
            alt="whatsapp icon"
            width="30px"
            height="30px"
          />
        </a>

        <a href="https://www.instagram.com/vozdushnaia_akademia_vrn/?hl=ru ">
          <a href="https://wa.me/79803441988" className="tel">
            <Image
              src={instagram}
              alt="instagram icon"
              width="30px"
              height="30px"
            />
          </a>
        </a>

        <a href="https://www.facebook.com/vozdushnaia_akademia_vrn-101242011220359">
          <Image
            src={facebook}
            alt="facebook icon"
            width="30px"
            height="30px"
          />
        </a>

        <a href="https://vk.com/vozdushnayaakademiya ">
          <Image src={vk} alt="vk icon" width="30px" height="30px" />
        </a>
      </div>
      <span className="footer_dev">А.Канакарян © 2021</span>
    </div>
  );
};

export default Footer;
