import React from "react";

function Topbar({ dispatch }) {
  const handelSearchModal = () => dispatch({ type: "TOGGLE_SEARCH_MODAL" });
  const handleRightSidebarToggle = () =>
  dispatch({ type: "TOGGLE_RIGHT_SIDEBAR" });
  return (
    <div className="topbar-2 d-lg-flex d-none">
      <div className="container1 d-flex justify-content-between align-items-center">
        <div className="date">
          Novembar 30, 2022 <span>28°C</span>
        </div>
        <div className="topbar-right" >
          <div className="search-btn" onClick={handelSearchModal}>
            <i className="bi bi-search" />
          </div>
          <div className="sidebar-button mobile-menu-btn" onClick={handleRightSidebarToggle}  >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
