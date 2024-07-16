import { useContext } from "react";
import { ThemeContext, darkTheme } from "../ThemeContext";

function NewsLatter() {

  const { theme } = useContext(ThemeContext);

  return (
    <section className={`newsletter-section-1 ${theme === "dark" ? `${darkTheme} border border-light border-end-0 border-start-0` : ""}`}>
      <div className="paper-fly-icon">
        <img src={`/assets/images/icons/paper-${theme === "dark" ? "fly2" : "fly"}.svg`} alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12 text-center">
            <h2 className={`${theme === "dark" ? "text-light" : ""}`}>Get the latest post by your Alumnus.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLatter;
