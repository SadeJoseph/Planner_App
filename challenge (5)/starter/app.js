//moment js


let timeNow = moment().format("HH");
const currentDay = $("#currentDay");
const container = $(".container");
let taskArray =[]



let ul;
let button;
let textbox;
let li;
let hourSect;


console.log(timeNow)
//Day - current display 
 displayCurrentDay()
 timeBlock()

 function displayCurrentDay () {
    currentDay.text(moment().format("dddd,MMMM Do"))
 }

 //time blcoks

 function timeBlock (){
    var displayTime = "09 AM";
    var icon;
    ul = #("<ul>").addClass("time-block")
    container.append(ul)
 }


 