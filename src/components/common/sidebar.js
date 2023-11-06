import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  menuOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      if (state.activeMenu === action.payload) {
        return { ...state, activeMenu: "", menuOpen: !state.menuOpen };
      } else {
        return {
          ...state,
          activeMenu: action.payload,
          menuOpen: !state.menuOpen,
        };
      }
    case "HOME_ONE":
      return { ...state, activeMenu: "home-one", menuOpen: !state.menuOpen };
    case "ABOUT":
      return { ...state, activeMenu: "post-formate", menuOpen: !state.menuOpen };
    case "PORTFOLIO":
      return { ...state, activeMenu: "portfolio", menuOpen: !state.menuOpen };
    case "BLOG":
      return { ...state, activeMenu: "blog", menuOpen: !state.menuOpen };
    case "PAGES":
      return { ...state, activeMenu: "pages", menuOpen: !state.menuOpen };
    case "CONTACT":
      return { ...state, activeMenu: "contact", menuOpen: !state.menuOpen };
    // ...
    default:
      return { activeMenu: "" };
  }
}
function Sidebar2() {
  const currentRoute = useRouter().pathname;
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }
  useEffect(()=>{
    if (typeof window !== "undefined") {
      const navSlide = () => {
        const burger = document.querySelector(".sidebar-button");
        for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener("click", function () {
      
          });
      }
      
        const nav = document.querySelector(".main-nav2");
        const navLinks = document.querySelectorAll(".main-nav2 .menu-list .menu-item");
        const menuClose = document.querySelector(".menu-close-btn");
        burger.addEventListener("click", () => {
          nav.classList.add("show-menu");
         navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.4s ease forwards ${
                index / 10 + 0.5
              }s `;
            }
            
          });
        });
        menuClose.addEventListener("click", () => {
          nav.classList.remove("show-menu");
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.4s ease forwards ${
                index / 10 + 0.5
              }s `;
            }
          });
        });
      };
      navSlide()
      
    }
  })

  return (
    <div className="main-nav-wrapper">
    <div className="main-nav2">
      <div className="menu-close-btn"><i className="bi bi-x-lg" /></div>
      <div className="mobile-logo-area d-flex justify-content-start align-items-center">
        <div className="header-logo">
          <Link legacyBehavior href="/"><a><img alt="image" className="img-fluid" src="assets/images/logo/logo-6.svg" /></a></Link>
        </div>
      </div>
      <div className="sidebar-menu-area">
        <ul className="menu-list">
          <li className="menu-item-has-children menu-item ">
            <a href="#" className="drop-down" data-hover="Home">Home</a><i className="bi bi-plus dropdown-icon2" onClick={() => handleMenu("home-one")} />
            <ul   className={
                    state.activeMenu === "home-one"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }>
              <li><Link legacyBehavior href="/"><a>Home 01</a></Link></li>
              <li><Link legacyBehavior href="/index-2"><a>Home 02</a></Link></li>
              <li><Link legacyBehavior href="/index-3"><a>Home 03</a></Link></li>
              <li><Link legacyBehavior href="/index-4"><a>Home 04</a></Link></li>
            </ul>
          </li>
          <li className="menu-item"><Link legacyBehavior href="/about" data-hover="About"><a>About</a></Link></li>
          <li className="menu-item"><Link legacyBehavior href="/topic" data-hover="Topic"><a>Topic</a></Link></li>
          <li className="menu-item-has-children menu-item">
            <Link legacyBehavior href="/blog-column-three" data-hover="Post"><a>Post</a></Link><i   onClick={() => handleMenu("post-formate")} className="bi bi-plus dropdown-icon2" />
            <ul   className={
                    state.activeMenu === "post-formate"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }>
              <li><a href="#">Post Format</a><i className="bi bi-plus dropdown-icon2" />
                <ul className="sub-menu">
                  <li><Link legacyBehavior href="/post-format-no-sidebar-01"><a>Post Format 01</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Post Format 02</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-03"><a>Post Format 03</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-04"><a>Post Format 04</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-no-sidebar-05"><a>Post Format 05</a></Link></li>
                </ul>
              </li>
              <li><a href="#">Post Format Sidebar</a><i className="bi bi-plus dropdown-icon2" />
                <ul className="sub-menu">
                  <li><Link legacyBehavior href="/post-format-right-sidebar-01"><a>Post Format Right Sidebar 01</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-right-sidebar-02"><a>Post Format Right Sidebar 02</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-right-sidebar-03"><a>Post Format Right Sidebar 03</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-left-sidebar-01"><a>Post Format Left Sidebar 01</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-left-sidebar-02"><a>Post Format Left Sidebar 02</a></Link></li>
                  <li><Link legacyBehavior href="/post-format-left-sidebar-03"><a>Post Format Left Sidebar 03</a></Link></li>
                </ul>
              </li>
              <li><a href="#">Standard Post Format</a><i className="bi bi-plus dropdown-icon2" />
                <ul className="sub-menu">
                  <li><Link legacyBehavior href="/audio-post-format"><a>Audio Post Format</a></Link></li>
                  <li><Link legacyBehavior href="/video-post-format"><a>Video Post Format</a></Link></li>
                  <li><Link legacyBehavior href="/gallery-post-format"><a>Gallery Post Format</a></Link></li>  
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <Link legacyBehavior href="/blog-classic" data-hover="Blog"><a>Blog</a></Link><i className="bi bi-plus dropdown-icon2" onClick={() => handleMenu("blog")} />
            <ul className={
                    state.activeMenu === "blog"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }>
              <li><Link legacyBehavior href="/blog-classic"><a>Blog Classic</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Blog Standard</a></Link></li>
              <li><Link legacyBehavior href="/wide-thumb-blog"><a>Blog Wide Thumb</a></Link></li>
              <li><Link legacyBehavior href="/blog-masonary"><a>Masonary Blog</a></Link></li>
              <li><Link legacyBehavior href="/blog-audio"><a>Post Audio</a></Link></li>
              <li><Link legacyBehavior href="/blog-gallery"><a>Post Gallery</a></Link></li>
              <li><Link legacyBehavior href="/blog-quote"><a>Post Qoute</a></Link></li>
              <li><Link legacyBehavior href="/video-blog"><a>Post Video</a></Link></li>
              <li><Link legacyBehavior href="/horizontal-scrolling-blog"><a>Horizontal Blog</a></Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children menu-item">
            <a href="#" data-hover="Pages">Pages</a><i className="bi bi-plus dropdown-icon2" onClick={() => handleMenu("pages")} />
            <ul className={
                    state.activeMenu === "pages"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }>
              <li><Link legacyBehavior href="/author"><a>Author</a></Link></li>
              <li><Link legacyBehavior href="/author-details"><a>Author Details</a></Link></li>
              <li><Link legacyBehavior href="/error"><a>Error</a></Link></li>
            </ul>
          </li>
          <li className="menu-item"><Link legacyBehavior href="/contact" data-hover="Contact"><a>Contact</a></Link></li>
        </ul>
      </div>
    </div>
  </div>
  
  );
}




export default Sidebar2;