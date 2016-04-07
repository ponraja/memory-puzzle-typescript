import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Card } from "./components/card";

var range = (n:number) => {
            var result = [];
            for(var i=0; i<n; i++) 
                result.push(i);
            return result;
        };
        
function populateCardValue(n:number,count:number) {
    let CardValues = new Array<number>(count);
    for (var index = 0; index < count/2; index++) {
        var value = (index + 1);
        insertIntoArray(CardValues,value,count);
        insertIntoArray(CardValues,value,count);
    }
    return CardValues;
}

function insertIntoArray(cardvalues:number[],value:number, count: number) {
    var index = Math.floor((Math.random() * count ));
    if(cardvalues[index] == undefined) {
        cardvalues[index] = value;
    }
    else {
        insertIntoArray(cardvalues,value,count);
    }
}

function validateCard(content:number, callback) {
    if(proviousContent == null) {
        proviousContent = content;
    }
    else {
        if(proviousContent == content) {
            callback(true);
        }
        else{
            callback(false);
        }
        proviousContent = null;
    }
}
var proviousContent : number;
var n:number = 4;
var values = populateCardValue(n,n*n);

ReactDOM.render(
    <div>
        <table className='mainTable'>
            <tbody>
            {
                range(n).map( y => (
                    <tr key={y}>
                    {
                        range(n).map(
                            x => (
                                <td key={x}>
                                {
                                    <Card content={(values[((y * n)+x)])} validateCard={validateCard}/> 
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
    </div>,
    document.getElementById("container")
);