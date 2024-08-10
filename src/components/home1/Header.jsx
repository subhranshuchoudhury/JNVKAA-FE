import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, useContext} from "react";
import { getCookie } from 'cookies-next';
import { DarkModeToggle } from "../DarkModeToggle";
import { darkTheme,ThemeContext } from "../ThemeContext";

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


  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* <Toaster /> */}
      <div className={`mobile-search ${state.isModal ? "slide" : ""}`}>
        <div className="container">
          <div className="row d-flex justify-content-center gy-4">
            <div className="col-10">
              <label>Want to search an Alumni?</label>
              <input type="text" onChange={e => setSearchValue(e.target.value)} placeholder="eg. Rahul Biswal" />
            </div>
            <div className="col-2 d-flex justify-content-end align-items-sm-center align-items-end gap-2">
              <div onClick={() => {
                if (searchValue) {
                  router.push(`/search/alumni/${searchValue}`)
                }

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
        className={`header-area style-1 ${state.scrollY > 10 ? "sticky" : ""} ${theme === "dark" ? "bg-dark border border-white border-start-0 border-end-0" : ""}}`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="sidebar-button  mobile-menu-btn d-lg-flex d-none"
            onClick={handleRightSidebarToggle}
          >
            <span className={`${theme === "dark" ? "bg-light" : ""}`}/>
            <span className={`${theme === "dark" ? "bg-light" : ""}`}/>
            <span className={`${theme === "dark" ? "bg-light" : ""}`}/>
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
            className={`main-nav ${state.isleftSidebarOpen ? "show-menu" : ""} ${theme === "dark" ? darkTheme : ""}`}
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
                <i className={`bi bi-x-lg ${theme === "dark" ? "text-light" : "text-dark"}`} />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <Link
                  href="/"
                  className={`drop-down ${curerntRoute === "/" ? "active" : ""} ${theme === "dark" ? "text-light text-hover" : ""}`}
                  onClick={() => toggleMenu("home-one")}
                >
                  Home
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/alumnus">
                  <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Alumnus</a>
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/teachers">
                  <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Teachers</a>
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/officials">
                  <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Officials</a>
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link legacyBehavior href="/posts/alumni">
                  <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Posts</a>
                </Link>
                <i
                  className={`bi bi-chevron-${state.activeMenu === "posts" ? "up" : "down"
                    } dropdown-icon ${state.activeMenu === "posts" ? "active" : ""
                    } ${theme === "dark" ? "text-light" : ""}`}
                  onClick={() => toggleMenu("posts")}
                />
                <ul
                  className={`sub-menu ${state.activeMenu === "posts" ? "d-block" : ""
                    }`}
                >
                  <li>
                    <Link legacyBehavior href="/posts/alumni">
                      <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Alumni</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/posts/official">
                      <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Official</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/posts/youtube">
                      <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Youtube</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link legacyBehavior href="/about">
                  <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>About</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a className={`${theme === "dark" ? "active text-light text-hover" : ""}`}>Contact</a>
                </Link>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
          <div className="header-icons d-flex flex-row align-items-center">
            {
              IsAuthenticated ? <>
                <div className="search-btn" onClick={handelSearchModal}> <i className={`bi bi-search ${theme === "dark" ? "text-light text-hover" : ""}`} /> </div>
                <div className="admin-area">
                  <button
                    className=" dropdown-toggle d-flex justify-content-start align-items-center"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className={`bi bi-person ${theme === "dark" ? "text-light text-hover" : ""}`} />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <Link className="dropdown-item " href={`${getCookie('userType') === "TEACHER" ? "/profile/teacher/my-profile" : "/profile/my-profile"}`}>
                        <i className="bi bi-person" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${getCookie('userType') === "TEACHER" ? "/profile/teacher/update-profile" : "/profile/update-profile"}`}>
                        <i className="bi bi-gear" />
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"/profile/change-password"}> 
                        <i className="bi bi-shield-lock" />
                        Change Password
                      </Link>
                    </li>
                    {
                      getCookie('userType') !== "TEACHER" && <li>
                        <Link className="dropdown-item " href="/posts/alumni/create-post">
                          <i className="bi bi-plus" />
                          Create Post
                        </Link>
                      </li>
                    }
                    {
                      getCookie('userType') !== "TEACHER" && <li>
                        <Link className="dropdown-item " href="/membership/offer/free-trials">
                          <i className="bi bi-cash-coin" />
                          Coupons & Free Trials
                        </Link>
                      </li>
                    }
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
              className="sidebar-button  mobile-menu-btn d-md-flex d-lg-none"
              onClick={handleLeftSidebarToggle}
            >
                <span className={`${theme === "dark" ? "bg-light" : ""}`}/>
                <span className={`${theme === "dark" ? "bg-light" : ""}`}/>
                <span className={`${theme === "dark" ? "bg-light" : ""}`}/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
