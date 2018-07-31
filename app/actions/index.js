export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from './sampleData.json';
 
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)){
            if (null == obj[attr] || "object" != typeof obj[attr])
                copy[attr] = obj[attr];
            else
                copy[attr] = clone(obj[attr]);
        }
    }
    return copy;
}

export function getData(){
    return (dispatch) => {
        var template = Data;
        var result = [];
        for(var i = 0; i < 10; ++i){
            result.push(clone(template));
            result[i].user.followers_count = Math.floor(Math.random() * 5000) + 1000; 
            result[i].id = i + 1; 
        }
        setTimeout(() => {
            const data  = result;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);
 
    };
}