import Link from "next/link";
import React, { useEffect } from "react";
import social from "../../data/topbar/social.json";
import { useState } from "react";
import { getAlumniBirthday } from "@/utils/fetch";
function Topbar() {

  useEffect(() => {
    getBirthdaysAlumni()
  }, [])

  const [Loading, setLoading] = useState(true);
  const [Birthdays, setBirthdays] = useState([]);

  const getBirthdaysAlumni = async () => {
    const response = await getAlumniBirthday();
    if (response.status === 200) {
      if (response.data.length === 0) {
        setBirthdays([{
          name: `${new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
            }`
        }])
      } else {

        setBirthdays(response.data);
      }
      setLoading(false);

    }
  }


  return (
    <div className="topbar-1 d-lg-flex d-none">
      <div className="container d-flex justify-content-between align-items-center">
        {
          Loading ? <div style={{
            color: 'black'
          }} className="date">
            🎂 <span>Please wait...</span>
          </div> : <div>🎂 {Birthdays[Math.floor(Math.random() * Birthdays.length)].name}</div>
        }

        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                width={200}
                src="/assets/images/logo/jnvkaa-logo-wide.jpg"
              />

            </a>
          </Link>
        </div>
        <ul className="social-1">
          {
            social.map((item, index) => {
              return <li key={index}>
                <a href={item?.link}>
                  <i className={item?.icon} />
                  {/* {item?.count} */}
                </a>
              </li>
            })
          }

        </ul>
      </div>
    </div>
  );
}

export default Topbar;
