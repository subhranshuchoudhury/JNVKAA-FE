import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
function VideoBlog() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="blog-video pt-100 pb-100">
  <div className="container">
    <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center g-4">
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video1.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Jace Emmett</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
              <li>1.9k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Cras congue est eget nisi lacinia non sagittis.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>2 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video2.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Rison donec</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Dec 26, 2022</a></Link></li>
              <li>1.9k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Nam mauris mauris rutum ultricies nonme.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>2 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube" ><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video3.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Harlem Jair</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Dec 18, 2022</a></Link></li>
              <li>1.8k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Proin ultrices lacus sedal convallis placerat.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>3 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video4.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Osiris Azael</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Dec 10, 2022</a></Link></li>
              <li>1.7k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Laoreet ligula mauris nec velit. Nullam.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>3 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube" ><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video5.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Bowe Canan</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Nov 30, 2022</a></Link></li>
              <li>1.6k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Consectetur adipi scingoi elitInte rdumet.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>3 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube" ><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video6.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Karsyn Zavir</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Nov 25, 2022</a></Link></li>
              <li>1.5k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Cras bibendum lacus dict nulla vehicula.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>3 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube" ><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video7.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Heath Yisrol</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Nov 20, 2022</a></Link></li>
              <li>1.4k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>euismod vitae sapien act ultricies egestas.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>4 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube" ><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video8.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Koen Maxto</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Nov 15, 2022</a></Link></li>
              <li>1.3k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>vestibulum Mecenas utot congue lectus.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>74 Day Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="blog-video-2 style-2">
          <div className="video position-relative">
            <div className="video-play sibling-3">
              <div onClick={()=>setOpen(true)} data-fancybox="popup-youtube"><i className="bx bx-play" /></div>
            </div>
            <img src="assets/images/blog-video/blog-video9.jpg" alt="image" />
          </div>
          <div className="content">
            <ul>
              <li><Link legacyBehavior href="/author-details"><a>By Blaise Davia</a></Link></li>
              <li><Link legacyBehavior href="/blog-standard"><a>Nov 05, 2022</a></Link></li>
              <li>1.1k View</li>
            </ul>
            <h4><Link legacyBehavior href="/video-post-format"><a>Our Begin Now To Being What You Will Be.</a></Link>
            </h4>
            <div className="bottom-area">
              <Link legacyBehavior href="/video-post-format"><a  className=" eg-btn arrow-btn">View Details<i className="bi bi-arrow-right" /></a></Link>
              <span> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                </svg>4 Day Read</span>
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
  <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="L61p2uyiMSo"
				onClose={() => setOpen(false)} 
			/>
</section>

  )
}

export default VideoBlog
