import { useState } from "react";
import arrow from "../img/arrow.svg"

function Slider(props) {

    const [count, setCount] = useState(0);

    return (
        <div className={props.slides.length > 1 ? "slider" : "slider slider-onlyOnePicture"}>
            <img onClick={() => setCount((((count - 1) % props.slides.length) + props.slides.length) % props.slides.length)} className="slider-arrow slider-arrow_left" src={arrow} alt="" />
            <img className="slider-image" src={props.slides[count]} alt="" />
            <img onClick={() => setCount((((count + 1) % props.slides.length) + props.slides.length) % props.slides.length)} className="slider-arrow slider-arrow_right" src={arrow} alt="" />
        </div>
    );
}

export default Slider;