import React, { Component } from "react";
import { EyesTeacher } from "../../../assets/svg/icon";
import './chatListTopic.css'


interface IRecipeProps {
    title?:string;
    content?:string;
    views?:number;
    comment?:string;
    date?:string;
    key?:string;
    data1?:number;
    active?:string
  }
  

export default class ChatListItemsTopic extends Component<IRecipeProps> {
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
      <>
    <div onClick={this.selectChat}
        className={`chatlist__itemm ${
          this.props.active ? this.props.active : ""
        } `}
      >

        <div className="userMeta">
          <div className="userInfor">
          <p>{this.props.title}</p>
          <span>
            <img src={EyesTeacher}/>
            {this.props.date}</span>
          </div>
          <p className="content">{this.props.content}</p>
          <div className="userMess">
          <span className="activeContent">{this.props.comment}</span>
          <span className="activeTime">{this.props.date}</span>
          </div>
        </div>
      </div>
      </>
    );
  }
}
