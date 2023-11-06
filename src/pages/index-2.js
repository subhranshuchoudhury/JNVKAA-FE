import Preloader from "@/components/common/Preloader";
import RightSideBar from "@/components/common/RightSideBar";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import AuthorFeature from "@/components/home2/AuthorFeature";
import BecomeAuthor from "@/components/home2/BecomeAuthor";
import EntierTopic from "@/components/home2/EntierTopic";
import FeaturesPost from "@/components/home2/FeaturesPost";
import Hero from "@/components/home2/Hero";
import LatestPost from "@/components/home2/LatestPost";
import MostPopular from "@/components/home2/MostPopular";
import RecentPost from "@/components/home2/RecentPost";
import Topbar from "@/components/home2/Topbar";
import TrandingArticle from "@/components/home2/TrandingArticle";
import React, { useEffect, useReducer, useState } from "react";
const initalState = {
  isRightSidebarOpen: false,
  isleftSidebarOpen: false,
  isModal: false,
  activeMenu: "",
  activeSubMenu: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_RIGHT_SIDEBAR":
      return {
        ...state,
        isRightSidebarOpen: !state.isRightSidebarOpen,
      };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isleftSidebarOpen: !state.isleftSidebarOpen,
      };
    case "TOGGLE_SEARCH_MODAL":
      return {
        ...state,
        isModal: !state.isModal,
      };
    case "SET_SCROllY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR_MENU":
      return {
        ...state,
        isSidebarOpenMenu: !state.isSidebarOpenMenu,
      };
    default:
      return state;
  }
}
function Home2() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (

  <>
  
  {
    loading ?   <>
    <Topbar dispatch={dispatch} />
    <RightSideBar state={state} dispatch={dispatch} />
    <Header2 state={state} dispatch={dispatch} />
    <Hero />
    <RecentPost />
    <EntierTopic />
    <LatestPost />
    <TrandingArticle />
    <MostPopular />
    <AuthorFeature/>
    <FeaturesPost/>
    <BecomeAuthor/>
    <Footer2/>
  </>:<Preloader/>
  }
  </>
  );
}

export default Home2;
