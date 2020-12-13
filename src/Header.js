import React, { useEffect } from "react";
import "./Header.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  useEffect(() => {
    gsap.to("#header", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top bottom",
        end: "top bottom-=200",
        scrub: true,
      },
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    gsap.to("#header", {
      scrollTrigger: {
        trigger: "#banner",
        start: "top 0",
        end: "bottom center",
        scrub: true,
      },
      opacity: 1,
      background: "#222",
      boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.75)",
    });
  }, []);

  // useEffect(() => {
  //   // gsap.to(".projects",
  //   // {
  //   //   yPercent: 50,
  //   //   scrollTrigger: {
  //   //     trigger: ".projects",
  //   //     scrub: true
  //   //   }
  //   // })
  // })

  return (
    <div className="header" id="header">
      <a href="#banner">HOME</a>
      <a href="#projects">PROJECTS</a>
      <a href="#aboutMe">ABOUT ME</a>
      <a href="#contactForm">CONTACT</a>
    </div>
  );
}

export default Header;
