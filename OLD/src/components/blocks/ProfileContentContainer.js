import React from 'react';

import '../../css/profile-content-container.scss';

const ProfileContentContainer = props => {
    console.log("Profile Content", props);
    let {
        profile_body, 
        profile_image, 
        profile_name,
        key
    } = props; 

    return (
        <div className={profile_image ? "profile-content-container has-image" : "profile-content-container"}>
            {profile_image &&
                <img width="330" height="330" src={profile_image} alt={profile_name || key} />
            } 

            <div className="content">
                {profile_name && 
                    <h3>{profile_name}</h3>
                }

                {profile_body &&
                    <p>{profile_body}</p>
                }
            </div>    
        </div>
    )
}

export default ProfileContentContainer; 