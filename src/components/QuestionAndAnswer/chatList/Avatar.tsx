import React, { Component } from "react";
import Styles from "./Avatar.module.css"

interface IRecipeProps {
    image?: string;
  }
  
export default class Avatar extends Component<IRecipeProps>{
  constructor(props: any) {
    super(props);

    
  }
  render() {
    return (
      <div className={Styles.avatar}>
        <div className={Styles.avatar_img}>
          <img src={this.props.image} alt="#" />
        </div>
      </div>
    );
  }
}
