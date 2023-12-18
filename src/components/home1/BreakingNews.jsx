import { getNewsUpdate } from "@/utils/fetch";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
function BreakingNews() {

  const [NewsUpdateData, setNewsUpdateData] = useState([])
  useEffect(() => {
    handleNewsData()
  }, []);

  const handleNewsData = async () => {
    const response = await getNewsUpdate();

    if (response.status === 200) {
      setNewsUpdateData(response.data)

    } else {
      console.log("Error fetching News update");
    }
  }
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

      <span className="d-lg-block d-none">News Update {
        NewsUpdateData?.length === 0 && <span class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
      }</span>


      <div className="marquee-text">
        <Marquee pauseOnHover={true}>

          {
            NewsUpdateData.map((item, index) => {
              return <div key={index}>
                <Link legacyBehavior href="/">
                  <a>{item?.title}</a>
                </Link>
                <i className="bi bi-star-fill" />
              </div>
            })
          }
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
