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

//     var tag = document.createElement("div");
//     tag.setAttribute('new','set');
//     var text = document.createTextNode("");
//     tag.appendChild(text);
//     var element = document.getElementById("first");
//     element.appendChild(tag);

//     var tag = document.createElement("div");
//     tag.setAttribute('new1','set');
//     var text = document.createTextNode("");
//     tag.appendChild(text);
//     var element = document.getElementById("new1");
//     element.appendChild(tag);



// console.log(typeof data);
// console.log(data);


// var timeArray = [];
// var d = new Date();
// var h = d.getHours();
// var m = d.getMinutes();

// for (var i = h; i <= 24; i++) {
//    for (var j = m; j <= 59; j++) {
//        if (j % 15 === 0) {
//             j = j === 0 ? '00' : j;
//             if (i >= 12) {
//                 timeArray.push((i - 12) + ':' + j + ' PM');
//             } else {
//                 timeArray.push(i + ':' + j + ' AM');
//             }
//         }
//     }
// }
// console.log(timeArray);

   
// for(i=0;i<1;i++)
// {
//    var tag = document.createElement("p");
//    var text = document.createTextNode("Excercise");
//    tag.appendChild(text);
//    var element = document.getElementById("new");
//    element.appendChild(tag);
// }
// for(i=0;i<1;i++)
// {
//    var tag = document.createElement("p");
//    var text = document.createTextNode("Plan day");
//    tag.appendChild(text);
//    var element = document.getElementById("new");
//    element.appendChild(tag);
// }
// for(i=0;i<1;i++)
// {
//    var tag = document.createElement("p");
//    var text = document.createTextNode("Review yesterday's commit");
//    tag.appendChild(text);
//    var element = document.getElementById("new");
//    element.appendChild(tag);
// }
// for(i=0;i<1;i++)
// {
//    var tag = document.createElement("p");
//    var text = document.createTextNode("Code review");
//    tag.appendChild(text);
//    var element = document.getElementById("new");
//    element.appendChild(tag);
// }



for(var key in data)
{
    
    for(var subkey in data[key])
    {  
        console.log(data[key][subkey]);
        if(data[key][subkey]==0)
        {
            document.getElementById("example1").innerHTML = "8:00";
            let content= document.getElementById("example2");
            content.innerHTML="Exercise";
            content.classList.add("color");
        }
        if(data[key][subkey]==25)
        {
            document.getElementById("example4").innerHTML = "8:30";
            let content= document.getElementById("example5");
            content.innerHTML="Travel to work";
            content.classList.add("color");
        }
        // if(data[key][subkey]==30)
        // {
        //     document.getElementById("example3").innerHTML = "8:30";
        //     let content= document.getElementById("example3");
        //     content.innerHTML="Review yesterday's commit";
        //     content.classList.add("color");
        // }


    }
}