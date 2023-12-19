import { useEffect, useReducer, useState } from "react";
import Footer1 from "@/components/footer/Footer1";
import AuthorSection from "@/components/home1/AuthorSection";
import Banner from "@/components/home1/Banner";
import BlogSidebar from "@/components/home1/BlogSidebar";
import GetUpdate from "@/components/home1/GetUpdate";
import Header from "@/components/home1/Header";
import Topbar from "@/components/home1/Topbar";
import VideoBlog from "@/components/home1/VideoBlog";
import RightSideBar from "@/components/common/RightSideBar";
import Preloader from "@/components/common/Preloader";
import LatestBlog from "@/components/home1/LatestBlog";
import BreakingNews from "@/components/home1/BreakingNews";

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
export default function Home() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
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
          <BreakingNews />
          <Banner />
          {/* <Category /> */}
          <LatestBlog />
          <BlogSidebar />
          {/* <RecentPost /> */}
          <VideoBlog />
          {/* <Advertise /> */}
          <AuthorSection />
          <GetUpdate />
          {/* <NewsLatter /> */}
          <Footer1 />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}
