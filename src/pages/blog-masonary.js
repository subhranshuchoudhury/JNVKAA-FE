import Link from 'next/link'
import React from 'react'

function BlogMasonary() {
  return (
    <section className="blog-masonary pt-100 pb-100">
    <div className="container">
      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center grid g-4">
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
            <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-1.jpg" alt="image" />
              </a>
             
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Rison donec</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Animal</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Our Begin To Beingonl What You Will Be.</a></Link>
              </h4>
              <div className="bottom-area">
                <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
            <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-2.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Locan Stany</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Gaming</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Power Players Unite: Join the Epic Gaming Revolution.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
            <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-3.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Kaiser Becio</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Lifestyle</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Two newest daily Lufthansan flights connect..</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-4.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Blaze Gatin</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Gaming</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Conquer the Virtual Realm: Dominate the Gaming World.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-5.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Devon Wayn</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>South Eastent firms facilitate Kester Capital’s sale..</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-6.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Alonso Curti</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Fitness</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Women to ditch skin carelet products ahead.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-7.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Evand Raon</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Fashion</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Britain falling behind withou full-fibre broad.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-8.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Jager Broc</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Lifestyle</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Exercise at home with walki foldable treadmill.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-9.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Jimmy Vicen</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Food</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Business Matters: Six steps  to successful.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col grid-item">
          <div className="blog-grid-5 style-2 two">
             <Link legacyBehavior href="/post-format-no-sidebar-02">
              <a  className="image">
              <div className="date">
                <h4>03</h4>
                <span>August</span>
              </div>
              <img src="assets/images/blog-grid/blog-mason-10.jpg" alt="image" />
              </a>
            </Link>
            <div className="content">
              <ul>
                <li><Link legacyBehavior href="/author-details"><a>By <span>Orlando Kio</span></a></Link></li>
                <li><Link legacyBehavior href="/blog-classic"><a>Plant</a></Link></li>
              </ul>
              <h4><Link legacyBehavior href="/post-format-no-sidebar-02"><a>Acquisition ofdiv healthcarei services company.</a></Link>
              </h4>
              <div className="bottom-area">
                  <Link legacyBehavior href="/post-format-no-sidebar-02"><a className=" eg-btn arrow-btn-2 one">View
                  Details<i className="bi bi-arrow-right" /></a></Link>
                <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z">
                    </path>
                  </svg>2 Day Read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pagiantion */}
      <nav className="mt-60">
        <ul className="pagination-list">
          <li><a href="#"><i className="bi bi-chevron-left" /></a></li>
          <li><a href="#">1</a></li>
          <li><a href="#" className="active">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"><i className="bi bi-chevron-right" /></a></li>
        </ul>
      </nav>
    </div>
  </section>
  
  )
}

export default BlogMasonary
