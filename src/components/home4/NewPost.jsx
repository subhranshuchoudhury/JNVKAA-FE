import Link from 'next/link'
import React from 'react'

function NewPost() {
  return (
    <div className="newsletter-section">
    <div className="contaier">
      <div className="newsletter-wrap">
        <div className="paper-icon">
          <svg width={95} height={83} viewBox="0 0 95 83" xmlns="http://www.w3.org/2000/svg">
            <path d="M94.9354 3.58869C95.3986 1.43284 93.285 -0.384945 91.2232 0.401766L1.79052 34.5421C0.714168 34.953 0.00223178 35.9847 5.2375e-06 37.1367C-0.0022213 38.289 0.705633 39.3234 1.7805 39.7384L26.9039 49.4415V80.0032C26.9039 81.2924 27.7891 82.4127 29.0434 82.7109C30.2893 83.0072 31.5885 82.4144 32.1726 81.2556L42.5633 60.6364L67.9206 79.4549C69.4631 80.5997 71.6801 79.8716 72.2414 78.032C95.9168 0.407891 94.8933 3.7837 94.9354 3.58869ZM72.8591 13.3703L29.2926 44.3969L10.5473 37.1573L72.8591 13.3703ZM32.4702 48.9674L70.4453 21.923C37.7683 56.3954 39.4749 54.5809 39.3324 54.7728C39.1207 55.0576 39.7007 53.9475 32.4702 68.2957V48.9674ZM68.0685 72.633L45.7482 56.0683L86.1063 13.4927L68.0685 72.633Z" />
          </svg>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content">
              <h3>Get the Brief Newsletter into your inbox <Link legacyBehavior href="/contact"><a>Connect Us
                  now.</a></Link></h3>
              <button className="eg-btn btn--lg btn--primary-4">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default NewPost
