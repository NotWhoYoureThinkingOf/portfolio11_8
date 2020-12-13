import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Project from "./Project";
import ecommerce from "./assets/ecommerce-store-compressed.png";
import facebook from "./assets/facebook-clone-compressed.png";
import netflix from "./assets/netflix-clone-compressed.png";
import slack from "./assets/slack-clone-compressed.png";
import whatsapp from "./assets/whatsapp-clone-compressed.png";
import { useDispatch, useSelector } from "react-redux";
import { selectBackground } from "./features/background/backgroundSlice";

function Projects() {
  const selectedBackground = useSelector(selectBackground);

  useEffect(() => {
    console.log(selectedBackground);
  }, [selectedBackground]);

  const transitions = {
    duration: 2,
  };

  return (
    <div className="projects" id="projects">
      <motion.div
        className="projects__background"
        initial={{ background: "" }}
        animate={{ background: `url(${selectedBackground})` }}
        exit={{ background: "" }}
        transition={transitions}
      ></motion.div>
      <div className="projects__container">
        <h2 className="projects__work">CHECK OUT SOME OF MY REACT WORK</h2>
        <h3>
          (Hover over each one for more details or simply click on one to go see
          the project in action!)
        </h3>
        <div className="projects__all">
          <div className="clip clip1 slack">
            <Project
              image={slack}
              link="https://slack-clone-c936b.firebaseapp.com/room/45NU0001UTOxF2mR6If2"
              title="Slack Clone"
              desc="A clone of messaging platform Slack"
            />
            <div className="project__info">
              <p>A clone of messaging platform Slack</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/slack-clone">
                Check out the code here
              </a>
            </div>
            <div className="projects__mobileInfo">
              <p>A clone of messaging platform Slack</p>
            </div>
          </div>
          <div className="clip clip2 netflix">
            <Project
              image={netflix}
              link="https://netflix-clone-7387f.firebaseapp.com/"
              title="Netflix Clone"
              desc="A clone of the popular streaming platform Netflix"
            />
            <div className="project__info">
              <p>A clone of streaming platform Netflix</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/netflix-clone">
                Check out the code here
              </a>
            </div>
            <div className="projects__mobileInfo">
              <p>A clone of streaming platform Netflix</p>
            </div>
          </div>
          <div className="clip clip3 facebook">
            <Project
              image={facebook}
              link="https://facebook-clone-955e6.firebaseapp.com/"
              title="Facebook Clone"
              desc="A clone of social media platform Facebook"
            />
            <div className="project__info">
              <p>A clone of social media platform Facebook</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/fb-clone">
                Check out the code here
              </a>
            </div>
            <div className="projects__mobileInfo">
              <p>A clone of social media platform Facebook</p>
            </div>
          </div>
          <div className="clip clip4 whatsapp">
            <Project
              image={whatsapp}
              link="https://whatsapp-clone-c2061.firebaseapp.com/"
              title="WhatsApp Clone"
              desc="A clone of the popular social media platform WhatsApp"
            />
            <div className="project__info">
              <p>A clone of messaging platform Whatsapp</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/whatsapp-clone">
                Check out the code here
              </a>
            </div>
            <div className="projects__mobileInfo">
              <p>A clone of messaging app WhatsApp</p>
            </div>
          </div>
          <div className="clip clip5 ecommerce">
            <Project
              image={ecommerce}
              link="https://ecommerce-store-25bd7.firebaseapp.com/"
              title="Ecommerce Website"
              desc="An ecommerce gaming news and shop website"
            />
            <div className="project__info">
              <p>An ecommerce gaming news and shop website</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/ecommerce-store">
                Check out the code here
              </a>
            </div>
            <div className="projects__mobileinfo">
              <p>An ecommerce gaming news and shop website</p>
            </div>
          </div>
        </div>

        <div className="projects__allMobile">
          <div className="projects__projectMobile">
            <Project
              image={ecommerce}
              link="https://ecommerce-store-25bd7.firebaseapp.com/"
              title="Ecommerce Website"
              desc="An ecommerce gaming news and shop website"
            />
            <div className="project__mobileinfo">
              <p>An ecommerce gaming news and shop website</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/ecommerce-store">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={netflix}
              link="https://netflix-clone-7387f.firebaseapp.com/"
              title="Netflix Clone"
              desc="A clone of streaming platform Netflix"
            />
            <div className="project__mobileinfo">
              <p>A clone of streaming platform Netflix</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/netflix-clone">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={facebook}
              link="https://facebook-clone-955e6.firebaseapp.com/"
              title="Facebook Clone"
              desc="A clone of social media platform Facebook"
            />
            <div className="project__mobileinfo">
              <p>A clone of social media platform Facebook</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/fb-clone">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={whatsapp}
              link="https://whatsapp-clone-c2061.firebaseapp.com/"
              title="Whatsapp Clone"
              desc="A clone of messaging app Whatsapp"
            />
            <div className="project__mobileinfo">
              <p>A clone of messaging app Whatsapp</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/whatsapp-clone">
                Check out the code here
              </a>
            </div>
          </div>
          <div className="projects__projectMobile">
            <Project
              image={slack}
              link="https://slack-clone-c936b.firebaseapp.com/room/45NU0001UTOxF2mR6If2"
              title="Slack Clone"
              desc="A clone of messaging platform Slack"
            />
            <div className="project__mobileinfo">
              <p>A clone of messaging platform Slack</p>
              <a href="https://github.com/NotWhoYoureThinkingOf/slack-clone">
                Check out the code here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
