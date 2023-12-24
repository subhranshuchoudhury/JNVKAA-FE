import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { getCookie } from 'cookies-next';
import toast, { Toaster } from "react-hot-toast";
function Header({ state, dispatch }) {
  const headerRef = useRef(null);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const curerntRoute = useRouter().pathname
  const handleRightSidebarToggle = () =>
    dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" });
  const handleLeftSidebarToggle = () =>
    dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });
  const handelSearchModal = () => dispatch({ type: "TOGGLE_SEARCH_MODAL" });
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "SET_SCROllY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [IsAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {

    const token = getCookie("token");

    if (token) {
      setIsAuthenticated(true)
    }

  }, [])

  return (
    <>
      <Toaster />
      <div className={`mobile-search ${state.isModal ? "slide" : ""}`}>
        <div className="container">
          <div className="row d-flex justify-content-center gy-4">
            <div className="col-10">
              <label>Want to search an Alumni from database ?</label>
              <input type="text" placeholder="eg. Subhranshu Choudhury" />
            </div>
            <div className="col-2 d-flex justify-content-end align-items-sm-center align-items-end gap-2">
              <div onClick={() => {

                toast.error("This feature is under development.")
              }} className="search-cross-btn">
                <i className="bi bi-search" />
              </div>
              <div className="search-cross-btn" onClick={handelSearchModal}>
                <i className="bi bi-x-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        ref={headerRef}
        className={`header-area style-1 ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="sidebar-button  mobile-menu-btn d-lg-flex d-none"
            onClick={handleRightSidebarToggle}
          >
            <span />
            <span />
            <span />
          </div>
          <div className="header-resp-logo d-lg-none d-flex">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  width={40}
                  height={40}
                  src="/assets/images/logo/jnvkaa-logo2.png"
                />
              </a>
            </Link>
          </div>
          <div
            className={`main-nav ${state.isleftSidebarOpen ? "show-menu" : ""}`}
          >
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      alt="image"
                      className="img-fluid"
                      width={40}
                      src="/assets/images/logo/jnvkaa-logo2.png"
                    />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn" onClick={handleLeftSidebarToggle}>
                <i className="bi bi-x-lg text-dark" />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <a
                  href="/"
                  className={`drop-down ${curerntRoute === "/" ? "active" : ""
                    }`}
                  onClick={() => toggleMenu("home-one")}
                >
                  Home
                </a>
                {/* <i
                  className={`bi bi-chevron-${state.activeMenu === "home-one" ? "up" : "down"
                    } dropdown-icon ${state.activeMenu === "home-one" ? "active" : ""
                    }`}
                  onClick={() => toggleMenu("home-one")}
                /> */}
                {/* <ul
                  className={`sub-menu ${state.activeMenu === "home-one" ? "d-block" : ""
                    }`}
                >
                  <li>
                    <Link legacyBehavior href="/" className="active">
                      <a className={curerntRoute === "/" ? "active" : ""}>Home 01</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index-2">
                      <a>Home 02</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index-3">
                      <a>Home 03</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index-4">
                      <a>Home 04</a>
                    </Link>
                  </li>
                </ul> */}
              </li>

              {/* <li className="menu-item-has-children">
                <Link legacyBehavior href="/events">
                  <a>Events</a>
                </Link>
              </li> */}

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/alumnus">
                  <a>Alumnus</a>
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/teachers">
                  <a>Teachers</a>
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/officials">
                  <a>Officials</a>
                </Link>
              </li>


              <li className="menu-item-has-children">
                <Link legacyBehavior href="/posts/alumni">
                  <a>Posts</a>
                </Link>
                <i
                  className={`bi bi-chevron-${state.activeMenu === "posts" ? "up" : "down"
                    } dropdown-icon ${state.activeMenu === "posts" ? "active" : ""
                    }`}
                  onClick={() => toggleMenu("posts")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "posts" ? "d-block" : ""
                    }`}
                >
                  <li>
                    <Link legacyBehavior href="/posts/alumni">
                      <a>Alumni</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/posts/alumni">
                      <a>Official</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/posts/youtube">
                      <a>Youtube</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link legacyBehavior href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-icons d-flex flex-row">
            {
              IsAuthenticated ? <>


                <div className="search-btn" onClick={handelSearchModal}> <i className="bi bi-search" /> </div>
                <div className="admin-area">
                  <button
                    className=" dropdown-toggle d-flex justify-content-start align-items-center"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item " href="/profile/my-profile">
                        <i className="bi bi-person" />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/profile/update-profile">
                        <i className="bi bi-gear" />
                        Update Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item " href="/posts/alumni/create-post">
                        <i className="bi bi-plus" />
                        Create Post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item " href="/membership/offer/free-trials">
                        <i className="bi bi-cash-coin" />
                        Coupons & Free Trials
                      </a>
                    </li>
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-chat-right-text" />
                        Message
                      </a>
                    </li> */}
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-file-lock" />
                        Lock screen
                      </a>
                    </li> */}

                    <li>
                      <Link className="dropdown-item" href="/auth/logout">
                        <i className="bi bi-box-arrow-left" />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div></> : <div style={{
                  marginRight: 10
                }}>

                <Link style={{
                  padding: 2,
                  boxShadow: "0px 1px 5px 0px #000000"
                }} href={"/auth/register"} className="eg-btn btn--primary-4">
                  Register
                </Link>
                <Link style={{
                  padding: 2,
                  boxShadow: "0px 1px 5px 0px #000000"
                }} href={"/auth/login"} className="eg-btn btn--primary mx-3">
                  Login
                </Link>

              </div>
            }

            <div
              className="mobile-menu-btn d-lg-none d-block"
              onClick={handleLeftSidebarToggle}
            >
              <i className="bi bi-list text-dark" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
