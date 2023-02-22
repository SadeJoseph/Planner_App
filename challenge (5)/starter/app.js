//moment js


let timeNow = moment().format("HH");
const currentDay = $("#currentDay");
const container = $(".container");
let taskArray =[]



let ul;
let button;
let textBox;
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
    ul = $("<ul>").addClass("time-block")
    container.append(ul)
 

  for (var i= 9; i < 18; i++) {
    li= $("<li>").addClass("rows")
    hourSect =$("<div>").addClass("hour")
    hourSect.text(displayTime)



    textBox = $("<textBox")
     if (timeNow=== i)
      textBox.addClass("present")
      else if (timeNow > i)
      textBox.addClass("past")
      else {
        textBox.addClass("future")
      }


      //local storage 

      textBox.val(localStorage.getItem(`${i}`))
      button =$("<button>").addClass("saveButt")

      icon = $("<i>").addClass("fa fa-unlock")
      button.attr("item-Number", )
      button.append(icon)
      li.append(hourSect).append(textBox).append(button)
      ul.append(li)
      displayTime =moment (i.toString(), ["HH"]).add(1, "hour").format("hh A")
  }
}

 