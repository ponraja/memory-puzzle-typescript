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
        this.state.completed = true;
        this.setState({ completed : true })
        this.props.validateCard(this.props.content, this.callback.bind(this));
    }
    
    callback(result:boolean) {
        if(this.state.completed != result)
        {
            setTimeout(() => this.setState({completed : result}), 500);
        }
    }
    
    render(){
        let cn : string;
         if(this.state.completed)
            cn = 'card flipped' ;
         else
            cn = 'card';
        return ( 
            <div className={cn} onClick={this.flipCard.bind(this)}>
                <div className='front'/>
                <div className='back'>
                    <span className='cardContent'>{this.props.content}</span>
                </div>
            </div>
        );
    }
}