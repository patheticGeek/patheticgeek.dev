import React from "react";

function Contact({ email }) {
  return (
    <header className="contact-header">
      <div className="contact-left">
        <div className="content">
          <h3 className="header-content__subtitle">Contact</h3>
          <h1 className="header-content__title">
            Get in touch<span className="text-accent">:</span>
          </h1>
        </div>
      </div>
      <div className="contact-right">
        <div className="content">
          <img className="contact-bear" src="./bear.gif" alt="Say hi like this bear" />
          <h1>
            Say hi. <span className="text-accent">Like this bear.</span>
          </h1>
          <a className="btn-solid" href={`mailto:${email}`}>
            <span className="btn-solid__text">{email}</span>
            <span className="btn-solid__arrow" />
          </a>
        </div>
      </div>
    </header>
  );
}

Contact.pageTitle = "Contact";

Contact.defaultProps = {
  email: "geekpathetic@gmail.com",
};

export default Contact;
