import "./Footer.css";
import footerData from "../api/Footer.json";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
};

const Footer = () => {
  const { brand, links, socials, copyright } = footerData;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>{brand.name}</h3>
          <p>{brand.description}</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              {links.company.map((item) => (
                <li key={item.id}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              {links.resources.map((item) => (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>{copyright.text}</p>
      </div>
    </footer>
  );
};

export default Footer;

