import React, {memo} from 'react'
import {BallCanvas} from "./canvas/index.js";
import SectionWrapper from "../hoc/index.js";
import {technologies} from "../constants/index.js";

const TechBall = memo(({icon, name}) => (
    <div className={"w-28 h-28"} key={name}>
        <BallCanvas icon={icon}/>
    </div>
));

const Tech = () => {
    return (
        <div className={"flex flex-row flex-wrap justify-center gap-10"}>
            {technologies.map((technology) => (
                <TechBall
                    key={technology.name}
                    icon={technology.icon}
                    name={technology.name}
                />
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, '')
