import Link from "next/link";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-0">
              <h4>
                AUTO{" "}
                <span className="fw-bold" style={{ color: "var(--orange)" }}>
                  SHOWROOM
                </span>
              </h4>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-0">
              <h4>BROWSER</h4>
              <Link href={`/`}>Home</Link>
              <Link href={`/cars`}>Cars</Link>
              <Link href={`/about-us`}>About Us</Link>
              <Link href={`/contact`}>Contact</Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 mb-lg-0">
              <h4>SOCIAL MEDIA</h4>
              <Link href={`/`}>Facebook</Link>
              <Link href={`/`}>Instagram</Link>
              <Link href={`/`}>Twitter</Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <h4>CONTACT INFO</h4>
              <p>418 Saint Regis Rd, Hogansburg, New York, NY 10000, USA</p>
              <p>+88 1234 888 999</p>
              <p>info@autoshowroom.com</p>
            </div>
            <div className="col-12 text-center mt-5">
              <p className="text-white">
                © AutoShowroom. Developed by Yousef Ahmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
