import React, {useEffect} from "react";
import "./Project.css";
import { useDispatch, useSelector } from "react-redux";
import {addBackground, emptyBackground, selectBackground} from './features/background/backgroundSlice'

function Project({ title, image, desc, link }) {
  const dispatch = useDispatch();
  const selectedBackground = useSelector(selectBackground)

  useEffect(() => {
  }, [])

  const addBg = () => {
    dispatch(addBackground({ image: image, title:title}))
  }

  const emptyBg = () => {
    dispatch(emptyBackground({}))
  }

  return (
    <div className="project" onMouseEnter={addBg}>
      <a href={link} className="project__container">
        <img src={image} alt="" />
        <div className="project__info">
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
}

export default Project;
