import React, { Component } from "react";
import Iframe from 'react-iframe'
import AssistantIcon from '@material-ui/icons/Assistant';

export class Chatbot extends React.Component {
  constructor(props){
      super(props)

      this.state = {
          isOpen: false
      }
      this.handleClick=this.handleClick.bind(this);
  }

  handleClick=()=> {
      this.setState(state=>(
          {isOpen: !state.isOpen}));
  }

  
  render() {
      
    let btn_class=this.state.isOpen? "open-class":"close-class";
    let btn_close=this.state.isOpen? "close-button":"open-button";
    return (
      <>
      <button onClick={this.handleClick} className={btn_close}><AssistantIcon/>Chat With Us</button>
  <div className={btn_class}>
  <Iframe className="iframe" frameborder="0" width="100%"
        height="100%" url="https://web.powerva.microsoft.com/environments/839eace6-59ab-4243-97ec-a5b8fcc104e4/bots/new_bot_82c9a6c905324275aae37520491ba736/webchat" onresize="this.style.height=this.contentDocument.body.scrollHeight + 'px';" target="assets"> </Iframe>
   <button onClick={this.handleClick} class="closePopUp">X</button>
</div>
      </>
    );
  }
}

