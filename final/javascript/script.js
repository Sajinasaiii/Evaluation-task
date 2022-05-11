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
$(".main-container").append(`<div class="time1">
<div class="">
  <span class="time">${hour+':'+min}</span>
  <div class="timeContent">
    <div class=" contentActive firstOne">
      Exercise
    </div>
    <div class=" d-block h-33"></div>
    <div class="d-flex  h-16">
      <div class=" w-50"></div>
      <div class="contentActive w-50 ms-0"></div>
    </div>
  </div>
</div>
var s=data.length;
for(var i=0;i<s;i++)
{
    var title1=data[i].title;
    $(".main-container").append(`
    <div class="tab">
                <form>
                    <span class="time1">
                        8:00
                    </span>
                    <input type="text" placeholder="Excercise" class="text">
                </form>
            </div>
            ${title1}</div>
    </div>
    `)
}

