import { ThemeContext } from '@/components/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'

function BlogAudio() {

  const { theme } = useContext(ThemeContext)

  return (
    <section className="blog-video pt-100 pb-100">
      <div className="container">
        <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-10 row-cols-1 justify-content-center g-4">
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : "0 50px 80px #ffeded"}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-4.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Jace Emmett</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 15, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>2.2k View</li>
                </ul>
                <h4><Link legacyBehavior href="audio-post-format"><a  className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Cras congue est eget nisi lacinia non sagittis.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-5.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Rison donec</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Dec 26, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.9k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nam mauris mauris rutum ultricies nonme.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-6.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Harlem Jair</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Dec 18, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.8k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Proin ultrices lacus sedal convallis placerat.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-7.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Osiris Azael</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Dec 10, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.7k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Laoreet ligula mauris nec velit. Nullam.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-8.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Bowe Canan</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 30, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.6k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Consectetur adipi scingoi elitInte rdumet.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-9.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Karsyn Zavir</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 25, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.5k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Cras bibendum lacus dict nulla vehicula.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-10.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Heath Yisrol</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 20, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.4k View </li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>euismod vitae sapien act ultricies egestas.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-11.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Koen Maxto</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 15, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.3k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>vestibulum Mecenas utot congue lectus.</a></Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="blog-video-2 style-2 three">
              <div className="audio-player">
                <div className="player" style={{boxShadow: `${theme === "dark" ? "none" : ""}`}}>
                  <div className="imgbx">
                    <img src="/assets/images/blog-audio/audeo-img-12.png" />
                  </div>
                  <audio controls>
                    <source src="http://physical-authority.surge.sh/music/2.mp3" />
                  </audio>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li><Link legacyBehavior href="/author-details"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>By Blaise Davia</a></Link></li>
                  <li><Link legacyBehavior href="/blog-standard"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Nov 05, 2022</a></Link></li>
                  <li className={`${theme === "dark" ? "text-light" : ""}`}>1.1k View</li>
                </ul>
                <h4><Link legacyBehavior href="/audio-post-format"><a className={`${theme === "dark" ? "text-light text-hover" : ""}`}>Our Begin Now To Being What You Will Be.</a></Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* pagiantion */}
        <nav className="mt-60">
          <ul className="pagination-list">
            <li><a href="#" className={`${theme === "dark" ? "border border-hover" : ""}`}><i className={`bi bi-chevron-left ${theme === "dark" ? "text-light" : ""}`}/></a></li>
            <li><a href="#" className={`${theme === "dark" ? "border border-hover text-light" : ""}`}>1</a></li>
            <li><a href="#" className="active">2</a></li>
            <li><a href="#" className={`${theme === "dark" ? "border border-hover text-light" : ""}`}>3</a></li>
            <li><a href="#" className={`${theme === "dark" ? "border border-hover" : ""}`}><i className={`bi bi-chevron-right ${theme === "dark" ? "text-light" : ""}`}/></a></li>
          </ul>
        </nav>
      </div>
    </section>

  )
}

export default BlogAudio
