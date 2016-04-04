import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";

export interface CardProps {content:string;}

export class Card extends React.Component<CardProps,{}>{
    flipCard(element) {
        $(element.currentTarget).toggleClass('flipped');
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