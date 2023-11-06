import Preloader from "@/components/common/Preloader";
import RightSideBar from "@/components/common/RightSideBar";
import Footer3 from "@/components/footer/Footer3";
import Banner from "@/components/home3/Banner";
import Header from "@/components/home3/Header";
import Inspiration from "@/components/home3/Inspiration";
import NewPost from "@/components/home3/NewPost";
import NewsLatter from "@/components/home3/NewsLatter";
import PopularPost from "@/components/home3/PopularPost";
import Topbar from "@/components/home3/Topbar";
import TrandingNews from "@/components/home3/TrandingNews";
import WeeklyBest from "@/components/home3/WeeklyBest";
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
function Homepage3() {
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
      {loading ? (
        <>
          <Topbar />
          <RightSideBar state={state} dispatch={dispatch} />
          <Header state={state} dispatch={dispatch} />
          <Banner />
          <PopularPost />
          <WeeklyBest />
          <NewsLatter />
          <Inspiration />
          <TrandingNews />.
          <NewPost />
          <Footer3 />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Homepage3;
