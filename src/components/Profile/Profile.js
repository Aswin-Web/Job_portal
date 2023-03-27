import { Button } from "@mui/material";
import React from "react";
import classes from "./Profile.module.css";
import ProfileDetails from "./ProfileDetails";
import UseAuth from "../../hooks/auth"

const Profile = () => {
 
  const {displayPicture,name} =UseAuth()
  return (
    <div className={classes.Container}>
      <div className={classes.head}>
        <div className={classes.topCard}>
          <img
            src="https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg"
            alt="backgroung"
          />
        </div>
        <div className={classes.heading}>
          <div className={classes.profilePic}>
            <img
              src={displayPicture}
              alt="profile"
            />
          </div>
          <div className={classes.naming}>
            <h2>{name}</h2>
            <p>Fullstack developer</p>
          </div>
        </div>
        <div className={classes.bio}>
          <h3>Bio:</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{" "}
          </p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <ProfileDetails />
      </div>
     
    </div>
  );
};

export default Profile;
