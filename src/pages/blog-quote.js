import { ThemeContext } from '@/components/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'

function BlogQuote() {

  const { theme } = useContext(ThemeContext);

  return (
    <section className="blog-video pt-100 pb-100">
      <div className="container-md container-fluid">
        <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center g-4">
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-three">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“There are two ways offernt spreading light: to be  candle the mirror that the .”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>Edith Wharton</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Jace Emmett</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 15, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.9k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Cras congue est eget nisi lacinia non sagittis.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-four">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“Happiness often sneaks into through a door you didn’t know you left open.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>John Barrymore</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Rison donec</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Dec 26, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.9k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nam mauris mauris rutum ultricies nonme.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-three">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“Life is like riding a bicycle. To keep your balance, you must keep moving.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>Albert Einstein</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Harlem Jair</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Dec 18, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.8k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Proin ultrices lacus sedal convallis placerat.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-three">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“Once you really know yourself, can’t nobody tell you nothing about you.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>Megan Stallion</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Osiris Azael</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Dec 10, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.7k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Laoreet ligula mauris nec velit. Nullam.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>3 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-four">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“I don’t like people around me sad. I like making people happy.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>Tyler Road</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Bowe Canan</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 30, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.6k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Consectetur adipi scingoi elitInte rdumet.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-three">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“If everything was perfect, you would never learn and you would never grow.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>Beyonc Koles</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Karsyn Zavir</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 25, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.5k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Cras bibendum lacus dict nulla vehicula.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>4 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-three">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“Sometimes it takes years for a person to become an overnight success.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>Danny Devito</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Heath Yisrol</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 20, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.4k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>euismod vitae sapien act ultricies egestas.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>2 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-four">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“Tomorrow hopes we have learned something from yesterday.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>John Wayne</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Koen Maxto</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 15, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.3k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>vestibulum Mecenas utot congue lectus.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>5 Day Read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2">
              <div className="quote-area bg-three">
                <div className="quote-icon">
                  <svg version="1.1" width={22} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className><g><path d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z" data-original="#000000" className /></g></svg>
                </div>
                <h5>“What we do is more important than what we say or what we say we believe.”</h5>
                <h4><Link legacyBehavior href="/author-details"><a>bell hooks</a></Link></h4>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Blaise Davia</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 05, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.1k View</li>
                </ul>
                <h4><Link legacyBehavior href="/"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Our Begin Now To Being What You Will Be.</a></Link>
                </h4>
                <div className="bottom-area">
                  <Link legacyBehavior href="/"><a className={`eg-btn arrow-btn ${theme === "dark" ? "text-light" : ""}`}>View Details<i className="bi bi-arrow-right" /></a></Link>
                  <span className={`${theme === "dark" ? "text-light" : ""}`}> <svg width={9} height={12} viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className={`${theme === "dark" ? "svg-fill" : ""}`}>
                    <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                  </svg>3 Day Read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pagiantion */}
        <nav className="mt-60">
          <ul className="pagination-list">
            <li><a href="#" className={`${theme === "dark" ? "border border-hover" : ""}`}><i className={`bi bi-chevron-left ${theme === "dark" ? "text-light" : ""}`} /></a></li>
            <li><a href="#" className={`${theme === "dark" ? "border border-hover text-light" : ""}`}>1</a></li>
            <li><a href="#" className="active">2</a></li>
            <li><a href="#" className={`${theme === "dark" ? "border border-hover text-light" : ""}`}>3</a></li>
            <li><a href="#" className={`${theme === "dark" ? "border border-hover" : ""}`}><i className={`bi bi-chevron-right ${theme === "dark" ? "text-light" : ""}`} /></a></li>
          </ul>
        </nav>
      </div>
    </section>

  )
}

export default BlogQuote
