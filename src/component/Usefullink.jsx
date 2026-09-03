import React from "react";
import "./Footer.css";
import FooterFields from "./FooterField.json";


function Footer() {
    return (
        <footer id="nest-footer-display">
            {Object.values(FooterFields).map((fields, index) => (
                <div className="footer-column" key={index}>
                    <h4>{fields.heading}</h4>

                    {fields.anchor.map((item, index) => (
                        <a href="#" key={index}>
                            {item}
                        </a>
                    ))}
                </div>
            ))}
        </footer>
    );
}

export default Footer;
