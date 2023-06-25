"use strict";
let course = "Hello darkness!";
console.log(course);
let printNum = (start, end) => {
    let temp = '';
    if (start < end) {
        for (let i = start; i <= end; i++) {
            temp += `${i} `;
        }
        console.log(temp);
    }
};
