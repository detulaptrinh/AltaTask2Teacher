import React, { Component } from "react";
import Avatar from "./Avatar";
import { EyesTeacher } from "../../../assets/svg/icon";


interface IRecipeProps {
    image?: string;
    active?:string;
    name?:string;
    views?:number;
    question?:string;
    date?:string;
  }
  

export default class ChatListItems extends Component<IRecipeProps> {
  constructor(props:any) {
    super(props);
  }
  selectChat = (e:any) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  render() {
    return (
      <div
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image
          }

        />

        <div className="userMeta">
          <div className="userInfor">
          <p>{this.props.name}</p>
          <span>
            <img src={EyesTeacher}/>
            {this.props.views}</span>
          </div>
          <div className="userMess">
          <span className="activeContent">{this.props.question}</span>
          <span className="activeTime">{this.props.date}</span>
          </div>
        </div>
      </div>
    );
  }
}
