import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";

export interface CardProps {
    content:number;
    validateCard:any;
}

export interface CardStatus {
    completed:boolean;
}
  
    
export class Card extends React.Component<CardProps, CardStatus>{
    constructor(props, context) {
    super(props, context);
    this.state = { completed: false };
  }
  
  flipCard(element) 
  {
      console.log("FlipCard called!!!");
        if(this.state.completed)
        {
            return;
        }
        $(element.currentTarget).toggleClass('flipped');
        this.props.validateCard(this.props.content, this.callback);
    }
    
    callback(result:boolean) {
        this.state.completed = result;
        this.setState(this.state);
    }
    
    render(){
        return ( 
            <div className='card' onClick={this.flipCard.bind(this)}>
                <div className='front'/>
                <div className='back'>
                    <span className='cardContent'>{this.props.content}</span>
                </div>
            </div>
        );
    }
}