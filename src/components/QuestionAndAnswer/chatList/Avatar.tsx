import React, { Component } from "react";


interface IRecipeProps {
    image?: string;
  }
  
export default class Avatar extends Component<IRecipeProps>{
  constructor(props: any) {
    super(props);

    
  }
  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={this.props.image} alt="#" />
        </div>
      </div>
    );
  }
}
