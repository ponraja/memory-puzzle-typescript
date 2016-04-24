import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Card } from "./card";

export interface GameBoardProps {
    numberOfCards:number
}

export interface GameBoardStatus {
    
}

export class GameBoard extends React.Component<GameBoardProps,GameBoardStatus>{
    proviousContent : number;
    proviousCallBack : any;
    
    range(n:number) {
        var result = [];
        for(var i=0; i<n; i++) 
            result.push(i);
        return result;
    }
        
    populateCardValue(n:number,count:number) {
        let CardValues = new Array<number>(count);
        for (var index = 0; index < count/2; index++) {
            var value = (index + 1);
            this.insertIntoArray(CardValues,value,count);
            this.insertIntoArray(CardValues,value,count);
        }
        return CardValues;
    }

    insertIntoArray(cardvalues:number[],value:number, count: number) {
        var index = Math.floor((Math.random() * count ));
        if(cardvalues[index] == undefined) {
            cardvalues[index] = value;
        }
        else {
            this.insertIntoArray(cardvalues,value,count);
        }
    }
    
    validateCard(content:number, callback) {
        if(this.proviousContent == null) {
            this.proviousContent = content;
            this.proviousCallBack = callback;
        }
        else {
            if(this.proviousContent == content) {
                callback(true);
            }
            else{
                callback(false);
                this.proviousCallBack(false);
            }
            this.proviousContent = null;
        }
    }
    
    render(){
        let n = this.props.numberOfCards;
        let values = this.populateCardValue(n,n*n);
        return(
            <div>
                <table className='mainTable'>
                    <tbody>
                    {
                        this.range(n).map( y => (
                            <tr key={y}>
                            {
                                this.range(n).map(
                                    x => (
                                        <td key={x}>
                                        {
                                            <Card content={(values[((y * n)+x)])} validateCard={this.validateCard.bind(this)}/> 
                                        }
                                        </td>
                                    )
                                )
                            }
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}