// var data = [{
//     start: 0,
//     duration: 15,
//     title: "Exercise"
// }, {
//     start: 25,
//     duration: 30,
//     title: "Travel to work"
// }, {
//     start: 30,
//     duration: 30,
//     title: "Plan day"
// }, {
//     start: 60,
//     duration: 15,
//     title: "Review yesterday's commits"
// }, {
//     start: 100,
//     duration: 15,
//     title: "Code review"
// }, {
//     start: 180,
//     duration: 90,
//     title: "Have lunch with John"
// }, {
//     start: 360,
//     duration: 30,
//     title: "Skype call"
// }, {
//     start: 370,
//     duration: 45,
//     title: "Follow up with designer"
// }, {
//     start: 400,
//     duration: 30,
//     title: "Push up branch"
// }
// ];
// $(".main-container").append(`<div class="time1">
// <div class="">
//   <span class="time">${hour+':'+min}</span>
//   <div class="timeContent">
//     <div class=" contentActive firstOne">
//       Exercise
//     </div>
//     <div class=" d-block h-33"></div>
//     <div class="d-flex  h-16">
//       <div class=" w-50"></div>
//       <div class="contentActive w-50 ms-0"></div>
//     </div>
//   </div>
// </div>
// var s=data.length;
// for(var i=0;i<s;i++)
// {
//     var title1=data[i].title;
//     $(".main-container").append(`
//     <div class="tab">
//                 <form>
//                     <span class="time1">
//                         8:00
//                     </span>
//                     <input type="text" placeholder="Excercise" class="text">
//                 </form>
//             </div>
//             ${title1}</div>
//     </div>
//     `)
// }



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
var z=getTimeArray(); 
for(i=0;i<z.length;i++)
{
    $("#container1").append(`<div style="height:30px">${z[i]}</div>`);
}
function getTimeArray()
{
    var x = 30; 
    var times = []; 
    var tt = 60*8; 
    for (var i=0;tt<19*60; i++) {
    var hh = Math.floor(tt/60);
    var mm = (tt%60);
    times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2);
    tt = tt + x;
    }
    return times;
}
$(".container1").append(`
<div class="color" 
style="height:
${data[i].duration}px;margin-top:
${diff}px"; >
${data[i].title}"
</div>
`)
// $('#container1').append(
// <div class="color" style="${height}">${data[i].title}</div>
// );
// let height = "height:"+ (data[i].duration)*2+"px";


// let sample = 0;
// if(data[i].start == 0){
    // $("#tasks").append(`
    //     <div class="fs-13 bodyBackgrounColor borderColor" style="${height}">${data[i].title}</div>
    //  `);

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
// $.each(data, function(i, item) {
//     alert(item.start)
//   });
// function print(data)
// $('body').append($("<div id='new'/>"));
// $('#new').append($("<span>"+data.start[0].data.start+"   "+"</span>"));
// $( ".container" ).append( $( "div" ) );
// var number = 1;
// console.log(data.length);
// for (var i = 0; i < data.length; i++) {
//     var duration = 0;
//     var value = 0;
//     datanew = 0;
//     if (data[i].start != 0) {
//         value = data[i].start - (data[i - 1].start + data[i - 1].duration);
//     }
//     // if (value < 0) {
//     //     number++;
//     // }
//     $(".newdata").append(`
//         <div class="color" style="height:
//         ${data[i].duration}px;margin-top:
//         ${value}px;margin-left:
//         ${(number == 1) ? 0 : 100 / number}%">
//         ${data[i].title}
//         </div>`)
//     if (number > 1) {
//         number = number - 1;
//     }
//     else {
//         datanew = 0;
//     }
// }