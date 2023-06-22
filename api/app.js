var course = "Hello darkness!";
console.log(course);
var printNum = function (start, end) {
    var temp = '';
    if (start < end) {
        for (var i = start; i <= end; i++) {
            temp += "".concat(i);
        }
        console.log(temp);
    }
};
printNum(20, 40);
