import error from "../../img/error.svg";
import close from "../../img/close.svg";
import Image from "next/image";

export const FeedBackUi = ({
  onClick,
  onSubmit,
  onChange,
  validName,
  validPhone,
  displayBlock,
  displayNone,
}) => {
  return (
    <div className={`feedback-form-block ${displayBlock} ${displayNone}`}>
      <div className="feedback-form_close" onClick={onClick}>
        <Image src={close} alt="" width="50px" height="50px" />
      </div>
      <form onSubmit={onSubmit} className="feedback-block_form">
        <label htmlFor="name" className="feedback-form_label">
          Имя:
        </label>
        <input
          id="name"
          type="text"
          onChange={onChange}
          className="feedback-form_input"
          placeholder="Иван"
        />
        {validName && (
          <div className="validation-hint">
            <Image src={error} alt="" width="20px" height="20px" />
            <span>Только русские и латинские буквы (3 - 15 символов) </span>
          </div>
        )}
        <label htmlFor="phone" className="feedback-form_label">
          Телефон:
        </label>
        <input
          id="phone"
          type="number"
          onChange={onChange}
          className="feedback-form_input"
          placeholder="+79003005454"
        />
        {validPhone && (
          <div className="validation-hint">
            <Image src={error} alt="" width="20px" height="20px" />
            <span>Номер должен начаться +7 или 8, длиной 10 цифрм</span>
          </div>
        )}
        <button type="submit" className="feedback-form_btn">
          Отправить
        </button>
      </form>
    </div>
  );
};
