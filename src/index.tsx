import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Card } from "./components/card";

var range = (n:number) => {
            var result = [];
            for(var i=0; i<n; i++) 
                result.push(i);
            return result;
        };
        
ReactDOM.render(
    <div>
        <table className='mainTable'>
            <tbody>
            {
                range(3).map( y => (
                    <tr key={y}>
                    {
                        range(3).map(
                            x => (
                                <td key={x}>
                                {
                                    <Card content={x}/> 
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