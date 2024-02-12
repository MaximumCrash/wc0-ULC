import React from 'react';

import "../css/title.scss";

const SpecialTitle = ({color, title_text,title_alignment}, types, LevelTag) => {
    return (
        <div className={`specialTitle ${color.toLowerCase()}-title-container ${title_alignment || ''}`}>
            <LevelTag className="copy-container">
                {title_text}
            </LevelTag>
        </div>
    );
}

const Title = (props) => {
    const {title_text, color, title_size, title_alignment, title_icon, tab_color} = props; 

    const colorTypes = ['Black', 'White']; //Basic color types. 

    //NOTE(Rejon): Component names must be upper case even if the tag using them will be lowercase. 
    const LevelTag = `${title_size || "h3"}`; //ie. h1, h2, h3, ect. Default to h3

    if (!colorTypes.includes(color)) {
        return SpecialTitle({...props}, colorTypes, LevelTag);
    }
    else {
        return (
            <LevelTag className={`title-component ${color} ${title_alignment ? title_alignment.toLowerCase().replace(/ /g, '-') : ''}`}> 
            {title_icon &&
                <i className="medium material-icons" style={{color: tab_color || ''}}>{title_icon}</i>
            }
                {title_text}
            </LevelTag>
        )
    }
}

export default Title;