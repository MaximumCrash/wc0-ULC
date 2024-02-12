import React from 'react';

//External libraries
import classNames from 'classnames';
import isNil from 'lodash.isnil';
import { Link } from 'gatsby'

//Local files
import Title from '../Title';
import Card from '../Card';
import RainbowTab from '../RainbowTab';
import ProfileContentContainer from '../blocks/ProfileContentContainer';

const SingleColumn = (props) => {
    console.log(props);
    let {
        title_text, 
        color, 
        title_alignment, 
        body_copy, 
        body_copy_alignment, 
        background_color, 
        show_color_tab,
        container_tab_color, 
        tab_color,
        has_cards, 
        cards,
        has_list, 
        list, 
        button,
        profiles
        } = props; 

    let columnClasses = {
        'titleOnly': !has_cards && !has_list && !body_copy && (!button || !button.button_link) && !profiles,
        'padIn': title_text === null,
        'has-profiles': profiles ? profiles.length > 0 : null
    };
    columnClasses[`bg-${background_color}`] = !isNil(background_color); 
    columnClasses['only-cards'] = has_cards && cards.length > 0 && !has_list && !body_copy && (!button || !button.button_link);


    return (
        <div className={classNames('col s12', columnClasses)} style={{border: tab_color ? `12px solid ${tab_color}` : ''}}>
            {title_text &&
                <Title {...props}/>
            }
            {profiles &&
                <>
                    {profiles.map((profile, index) => (
                        <ProfileContentContainer {...profile} key={`single-col-profile-content-${index}`} />
                    ))}
                </>
            }
            {body_copy && 
                <p className={`${body_copy_alignment}`} dangerouslySetInnerHTML={{__html: body_copy}}>
                </p>
            }
            {/* Cards container is necessary for displaying them properlly based on type. First card determines layout type. */}
            {cards.length > 0 &&
                <div className={`cards-container ${cards[0].card_type.toLowerCase().replace(/ /g, '-')}`}>
                    {cards.map((card, index) => {
                        return (
                            <Card key={`${card.card_type}-${index}`} {...card}/>
                        )
                    })}
                </div>
            }
            {button && button.button_link &&
                <>
                    {button.link_internal ? 
                        <Link
                            to={button.button_link}
                            className={`${button.alignment.toLowerCase().replace(/ /g, '-')} content-container-button waves-effect waves-light btn-large hoverable`}
                        >
                        {button.button_text}
                        </Link>
                    :
                        <a  className="content-container-button waves-effect waves-light btn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={button.button_link}
                        >
                        {button.button_text}
                        </a>
                    }
                </>
            }
        </div>
    )
}

const TwoColumn = (props) => {
    let {
        title_text, 
        color, 
        title_alignment, 
        body_copy, 
        body_copy_alignment,
        background_color, 
        show_color_tab,
        container_tab_color, 
        tab_color,
        has_cards, 
        cards,
        has_list, 
        list_elements,
        list, 
        button
        } = props; 

    let containerClasses = {
        'padIn': title_text === null 
    };
    containerClasses[`bg-${background_color}`] = !isNil(background_color); 

    //NOTE(Rejon): Body copy alignment determines which column will have the body copy and which will have the other content. 
    return (
        <div className={classNames('col s12', containerClasses)} style={{borderTop: tab_color ? `12px solid ${tab_color}` : ''}}>
            {title_text &&
                <Title {...props} />
            } 
            <div className="row">
               {body_copy_alignment === 'left-align' || !body_copy_alignment ?
               <>
                 <div className="col s6 copy">
                    {body_copy &&
                        <p dangerouslySetInnerHTML={{__html: body_copy}}>
                        </p>
                    }
                </div>
                <div className="col s6">
                    {cards.length > 0 &&
                        <div className={`cards-container ${cards[0].card_type.toLowerCase().replace(/ /g, '-')}`}>
                            {cards.map((card, index) => {
                                return (
                                    <Card key={`${card.card_type}-${index}`} {...card}/>
                                )
                            })}
                        </div>
                    }
                    {has_list && list_elements.length > 0 &&
                        <ul>
                            {list_elements.map((el, index) => {
                                let {material_icon, text} = el; 
                                return (
                                    <li key={'two-column-list-element-${index}'}>
                                        {material_icon && material_icon !== 'null' && 
                                            <i className="medium material-icons">{material_icon}</i>
                                        }
                                        {text && text !== '' &&
                                            text
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    }  
                    {button && button.button_text &&
                        <>
                            {button.link_internal ? 
                                <Link
                                    to={button.button_link}
                                    className={`${button.alignment.toLowerCase().replace(/ /g, '-')} content-container-button waves-effect waves-light btn-large hoverable`}
                                >
                                {button.button_text}
                                </Link>
                            :
                                <a  className="content-container-button waves-effect waves-light btn" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href={button.button_link}
                                >
                                {button.button_text}
                                </a>
                            }
                        </>
                    } 
                </div>
                </>
               :
               <>
                 <div className="col s6">
                    {cards.length > 0 &&
                        <div className={`cards-container ${cards[0].card_type.toLowerCase().replace(/ /g, '-')}`}>
                            {cards.map((card, index) => {
                                return (
                                    <Card key={`${card.card_type}-${index}`} {...card}/>
                                )
                            })}
                        </div>
                    }
                    {button && button.button_text &&
                        <>
                            {button.link_internal ? 
                                <Link
                                    to={button.button_link}
                                    className={`${button.alignment.toLowerCase().replace(/ /g, '-')} content-container-button waves-effect waves-light btn-large hoverable`}
                                >
                                {button.button_text}
                                </Link>
                            :
                                <a  className="content-container-button waves-effect waves-light btn" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href={button.button_link}
                                >
                                {button.button_text}
                                </a>
                            }
                        </>
                    } 
                    {has_list && list_elements.length > 0 &&
                        <ul>
                            {list_elements.map((el, index) => {
                                let {material_icon, text} = el; 
                                return (
                                    <li key={'two-column-list-element-${index}'}>
                                        {material_icon && material_icon !== 'null' && 
                                            <i className="medium material-icons">{material_icon}</i>
                                        }
                                        {text && text !== '' &&
                                            text
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    }   
                </div>
                <div className="col s6 copy">
                    {body_copy &&
                        <p dangerouslySetInnerHTML={{__html: body_copy}}>
                        
                        </p>
                    }
                </div>
                </>
               }

            </div>
            
        </div>
    )
}

const renderColumn = (props) => {
    let {container_type} = props; 
    
    //Defaults to single column
    switch (container_type) {
        case '1 Column': {
            return SingleColumn({...props})
            break; 
        }
        case '2 Column': {
            return TwoColumn({...props})
            break;
        }
        default: {
            return SingleColumn({...props})
            break; 
        }
    }
}

const ContentContainer = (props) => {
    let container_typeName = props.container_type === '1 Column' ? 'OneColumn' : 'TwoColumn';

    return (
        <section className={`content-container row ${container_typeName}`}>
            {props.show_color_tab && props.container_tab_color === 'Rainbow' &&
                <RainbowTab/>
            }
            {renderColumn({...props})}
        </section>
    );

}

export default ContentContainer;