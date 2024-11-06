import { getNewsUpdate } from "@/utils/fetch";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext, darkTheme } from "../ThemeContext";
import AppDownloadModal from "../AppDownloadModal";
import AlumniMeetResponsePopup from "../AlumniMeetResponsePopup";

function BreakingNews() {
  const { theme } = useContext(ThemeContext);
  const [NewsUpdateData, setNewsUpdateData] = useState([]);
  useEffect(() => {
    handleNewsData();
  }, []);

  const handleNewsData = async () => {
    const response = await getNewsUpdate();

    if (response.status === 200) {
      setNewsUpdateData(response.data);
    } else {
      console.log("Error fetching News update");
    }
  };
  return (
    <div className="breaking-news">
      <div className="ellipse-1">
        <img src="/assets/images/bg/top-ellipse.png" alt="image" />
      </div>
      <div className="ellipse-2">
        <img src="/assets/images/bg/top-ellipse.png" alt="image" />
      </div>
      <div className="ellipse-3">
        <img src="/assets/images/bg/top-ellipse.png" alt="image" />
      </div>

      {true ? <AlumniMeetResponsePopup /> : <AppDownloadModal />}

      <span className="d-lg-block d-none">
        News Update{" "}
        {NewsUpdateData?.length === 0 && (
          <span className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </span>
        )}
      </span>

      <div className={`marquee-text ${theme === "dark" ? darkTheme : ""}`}>
        <Marquee pauseOnHover={true}>
          {NewsUpdateData.map((item, index) => {
            return (
              <div key={index}>
                <Link legacyBehavior href="/">
                  <a className={`${theme === "dark" ? "text-hover" : ""}`}>
                    {item?.title}
                  </a>
                </Link>
                <i className="bi bi-star-fill" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
