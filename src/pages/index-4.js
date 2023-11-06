import Preloader from "@/components/common/Preloader";
import Sidebar2 from "@/components/common/sidebar";
import Footer4 from "@/components/footer/Footer4";
import Author from "@/components/home4/Author";
import Banner from "@/components/home4/Banner";
import BreakingNews from "@/components/home4/BreakingNews";
import FeaturesPost from "@/components/home4/FeaturesPost";
import ImportentNews from "@/components/home4/ImportentNews";
import MarqueeText from "@/components/home4/MarqueeText";
import NewPost from "@/components/home4/NewPost";
import RecentVideo from "@/components/home4/RecentVideo";
import SelectedPost from "@/components/home4/SelectedPost";
import Sidebar from "@/components/home4/Sidebar";
import TopArticle from "@/components/home4/TopArticle";
import Topbar from "@/components/home4/Topbar";
import Topics from "@/components/home4/Topics";
import React, { useEffect, useState } from "react";

function Homepage4() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Sidebar2 />
          <main className="main-wrapper">
            <Sidebar />
            <div className="main-content">
              <BreakingNews />
              <Topbar />
              <Banner />
              <SelectedPost />
              <TopArticle/>
              <RecentVideo/>
              <ImportentNews />
              <FeaturesPost />
              <Topics />
              <Author />
              <NewPost />
            </div>
          </main>
          <MarqueeText />
          <Footer4 />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Homepage4;
