var data = [{
    start: 8.00,
    duration: 15,
    title: "Exercise"
}, {
    start: 8.25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 8.30,
    duration: 30,
    title: "Plan day"
}, {
    start: 9.00,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];
console.log(typeof data);
console.log(data);


var timeArray = [];
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

for (var i = h; i <= 24; i++) {
   for (var j = m; j <= 59; j++) {
       if (j % 15 === 0) {
            j = j === 0 ? '00' : j;
            if (i >= 12) {
                timeArray.push((i - 12) + ':' + j + ' PM');
            } else {
                timeArray.push(i + ':' + j + ' AM');
            }
        }
    }
}
console.log(timeArray);