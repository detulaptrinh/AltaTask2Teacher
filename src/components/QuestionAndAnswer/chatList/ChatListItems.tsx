import React, { Component } from "react";
import Avatar from "./Avatar";
import { EyesTeacher } from "../../../assets/svg/icon";
import chatlistAllTopicCSS from "./ChatList.module.css"


interface IRecipeProps {
    image?: string;
    active?:string;
    name?:string;
    views?:number;
    question?:string;
    date?:string;
    key?:string;
    data1?:number;
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

        <div className={chatlistAllTopicCSS.userMeta}>
          <div className={chatlistAllTopicCSS.userInfor}>
          <p className={chatlistAllTopicCSS.userInforr}>{this.props.name}</p>
          <span className={chatlistAllTopicCSS.views}>
            <img src={EyesTeacher}/>
            {this.props.views}</span>
          </div>
          <div className={chatlistAllTopicCSS.userMess}>
          <p className={chatlistAllTopicCSS.activeContent}>{this.props.question}</p>
          <span className={chatlistAllTopicCSS.activeTime}>{this.props.date}</span>
          </div>
        </div>
      </div>
    );
  }
}
