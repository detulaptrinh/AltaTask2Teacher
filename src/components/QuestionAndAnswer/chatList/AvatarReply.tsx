import React, { Component } from "react";
import Styles from "./AvatarReply.module.css"

interface IRecipeProps {
    image?: string;
  }
  
export default class AvatarReply extends Component<IRecipeProps>{
  constructor(props: any) {
    super(props);

    
  }
  render() {
    return (
      <div className={Styles.avatar_reply}>
        <div className={Styles.avatar_img_reply}>
          <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" alt="#" />
        </div>
      </div>
    );
  }
}
