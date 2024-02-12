import React, {useRef, useEffect} from 'react';

//External libraries
import M from "materialize-css/dist/js/materialize.js"

//Style properties
import "../css/card.scss";

const ProfileCard = (props) => {
    const profileModalEl = useRef(null);
    let {
        profile_image, 
        title, 
        profile_subtitle, 
        tab_color, 
        card_background_color, 
        body_copy 
        } = props; 

    let modalInstance = null; 

    //Initialize the Modals
    useEffect(() => {
        var elems = document.getElementById(`modal${title.replace(/ /g, '-')}`);
        modalInstance = M.Modal.init(elems);
    }, []);

    let onProfileCardClick = () => {
        if (!profileModalEl.current || !modalInstance || !body_copy) {
            return 
        }
        
        modalInstance.open();
        return;
    }

    let cardStyle = {};
    if (card_background_color) {cardStyle['backgroundColor'] = card_background_color;}
    if (tab_color) {cardStyle['borderBottom'] = `8px solid ${tab_color}`}
    return (
        <>
        <div className={`profile-card ${body_copy && 'hoverable'}`} onClick={onProfileCardClick} style={cardStyle}>
            {profile_image ?
                <img src={profile_image} alt={profile_image.split('.')[0]} />
                :
                <i className="large material-icons">person</i>
            }
                <div className="content">
                    {title && <p className="name">{title}</p>}
                    {profile_subtitle && <p className="sub">{profile_subtitle}</p>}
                </div>
        </div>
        {body_copy && 
                <div id={`modal${title.replace(/ /g, '-')}`} className="modal bottom-sheet" ref={profileModalEl}>
                    <div className="modal-content">
                        <h3>{title}</h3>
                        <p dangerouslySetInnerHTML={{__html: body_copy}}></p>
                    </div>
                </div>
        } 
        </>
    )
    
}

const DetailCard = (props) => {
    let {
        title, 
        icon, 
        tab_color, 
        card_background_color, 
        detail_list, 
        body_copy
        } = props; 

    let detailCardStyle = {};
    let iconStyle = {};

    if (tab_color) {
        detailCardStyle["borderTop"] = `9px solid ${tab_color}`
        iconStyle["color"] = `${tab_color}`
    };

    if (card_background_color) {
        detailCardStyle["backgroundColor"] = card_background_color;
    }

    return (
        <div className='detail-card' style={detailCardStyle}>
            {icon && icon !== 'null' && 
                <i className="large material-icons" style={iconStyle}>{icon}</i>
            }
            {title && title !== '' &&
                <p className="title">{title}</p>
            }
            {detail_list.length > 0 &&
                <ul>
                    {detail_list.map((detail, index) => {
                        let {material_icon, text} = detail; 

                        return (
                            <li key={`detail-card-detail-list-element-${index}`}>
                                {material_icon && material_icon !== 'null' &&
                                    <i className="small material-icons">{material_icon}</i> 
                                }
                                {text}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}
 
const GridCard = (props) => {
    let {
        title, 
        icon, 
        body_copy,
        card_background_color
        } = props; 

    let gridCardStyle = {};

    if (card_background_color) {
        gridCardStyle["backgroundColor"] = card_background_color;
    }

    return (
        <div className='grid-card' style={gridCardStyle}>
            {icon && icon !== 'null' && 
                <i className="medium material-icons">{icon}</i>
            }
            {title && title !== '' &&
                <p className="title">{title}</p>
            }
            {body_copy &&
                <p className="body-copy" dangerouslySetInnerHTML={{__html: body_copy}}></p>
            }
        </div>
    )
}

const Card = (props) => {
    let {card_type} = props; 
    //Need to make card type match class name "Type Card" -> "type-card"
    card_type = card_type ? card_type.toLowerCase().replace(/ /g, '-') : '';

    const getCardComponent = () => {
        switch(card_type) {
            case "detail-card": {
                return DetailCard({...props})
                break;
            }

            case "profile-card": {
                return ProfileCard({...props})
                break;
            }

            case "grid-card": {
                return GridCard({...props})
                break;
            }

            default: {
                return DetailCard({...props})
            }
        }
    }

    return (
        <div className={`card-container ${card_type}`}>
            {getCardComponent()}
        </div>
    )
}

export default Card; 