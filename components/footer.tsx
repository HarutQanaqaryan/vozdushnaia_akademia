import instagram from "../img/instagram.svg";
import whatsapp from "../img/whatsapp.svg";
import vk from "../img/vk.svg";
import facebook from "../img/facebook.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_feedback">
        <a href="https://wa.me/79803441988 "className="footer_feedback_icons">
          <Image
            src={whatsapp}
            alt="whatsapp icon"
          />
        </a>

        <a href="https://www.instagram.com/vozdushnaia_akademia_vrn/?hl=ru " className="footer_feedback_icons">
            <Image
              src={instagram}
              alt="instagram icon"
          />
        </a>

        <a href="https://www.facebook.com/vozdushnaia_akademia_vrn-101242011220359"className="footer_feedback_icons">
          <Image
            src={facebook}
            alt="facebook icon"
          />
        </a>

        <a href="https://vk.com/vozdushnayaakademiya "className="footer_feedback_icons">
          <Image src={vk} alt="vk icon" 
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
