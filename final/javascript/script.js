var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
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
$(".time-title").html("<b>Time Schedule</b>");
$(".time-time").html("8:00 am-6:00 pm");
var newtime = getTimeArray();
// for (i = 0; i < newtime.length; i++) {
//     $("#container1").append(`<div style="height:30px">${newtime[i]}</div>`);
// }
for (i = 0; i < newtime.length; i++) {
    if (newtime.indexOf(newtime[i]) % 2 == 0) {
        $("#container1").append(`<div class="border time-array" >${newtime[i]}</div>`);
    }
    else {
        $("#container1").append(`<div class="font time-array">${newtime[i]}</div>`);
    }
}
function getTimeArray() {
    var x = 30;
    var times = [];
    var tt = 60 * 8;
    for (var i = 0; tt < 19 * 60; i++) {
        var hh = Math.floor(tt / 60);
        var mm = (tt % 60);
        times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);
        if (times[i] == "0:00") {
            times[i] = "12:00";
        } else if (times[i] == "0:30") {
            times[i] = "12:30";
        }
        tt = tt + x;
    }
    return times;
}
var value = 0;
for (let i = 0; i < data.length; i++) {
    if (i == data.length - 1) {
        var nextGap = data[i].start - (data[i - 1].start + data[i - 1].duration);
    }
    else {
        nextGap = data[i + 1].start - (data[i].start + data[i].duration);
    }
    // var nextGap = data[i + 1].start - (data[i].start + data[i].duration);
    if (nextGap >= 0) {
        var mBottom = nextGap;
        var width = '100%';
        var mLeft = '0%';
    }
    else {
        mBottom = '0';
        width = '50%';
        mLeft = '50%';
    }
    if (i == data.length - 2) {
        var mLeft = '0%';
    }
    if (prevGap <= 0) {
        width = '50%';
    }
    if (nextGap > 0) {
        width = '100%';
    }
    // if (data[i].title == "Plan day") {
    //     // width = '50%';
    //     $("#container2").append(`
    //     <div class="color plan"style="height:${data[i].duration}px;margin-bottom:${mBottom}px;width:${width};margin-left:${mLeft};top:${data[i].start}px"">
    //     ${data[i].title}
    //     </div>
    // `)
    // }
    // else {
    //     $("#container2").append(`
    //     <div class="color" style="height:${data[i].duration}px;margin-bottom:${mBottom}px;width:${width};margin-left:${mLeft};position:absolute;top:${data[i].start}px">
    //     ${data[i].title}
    //     </div>
    //     `)
    // }
    $("#container2").append(`
        <div class="color" style="height:${data[i].duration}px;margin-bottom:${mBottom}px;width:${width};margin-left:${mLeft};position:absolute;top:${data[i].start}px">
        ${data[i].title}
        </div>
        `)
    var prevGap = nextGap;
}





// document.getElementById('time-title').innerHTML="Time schedule";
// document.getElementById('container1').innerHTML=data.map(item =>
//     `<div>
//         <div>${item.title}</div>
//     </div>`
// ).join('')
// container2.classList.add("color");

// var dp = new DayPilot.Calendar("container1");
// dp.viewType = "Day";
// dp.startDate = "2022-03-25";
// dp.viewType = "Week";
// dp.weekStart = 0;
// var start = dp.visibleStart();
// var end = dp.visibleEnd();
// dp.init();

