///////////////sideBAR////////////////////
let sideBarWidth = $(".sideBar-inner").innerWidth()
$("#sideBar").css('left',-sideBarWidth)
$("#sideBar i").click(function(){
   $("#sideBar").animate({left:'0px'},500)
})
$(".closebtn").click(function(){
  $("#sideBar").animate({left:-sideBarWidth},500)
})

$("#home1").click(function(){
  let sectionHome = $("#home").offSet().top;
  $("body").animate({scrollTop:sectionHome},2000)
})

$("#duration1").click(function(){
  let sectionDuration = $("#duration").offSet().top;
  $("body").animate({scrollTop:sectionDuration },2000)
})

$("#details1").click(function(){
  let sectionDetails = $("#details").offSet().top;
  $("body").animate({scrollTop:sectionDetails},2000)
})


$("#contact1").click(function(){
  let sectionContact = $("#contact").offSet().top;
  $("body").animate({scrollTop:sectionContact},2000)
})
///////////////////fadeout sec2////////////////////
$(".toggle").click(function(){
   $(".inner").not($(this).next()).slideUp(500);
   $(this).next().slideToggle(500);
})


///////////////countDown/////////////////

///the end of the year date to countdown to/////////
////1000 milliseconds = 1 sec
let countdownDate= new Date("Oct 24, 2023 23:59:59").getTime();
let counter = setInterval(()=>{
 //Get Date Now
 let dateNow = new Date().getTime();
 // Find the Difference Between Now and CountDown Date
 let dateDiff = countdownDate - dateNow ;  //=> time with milliseconds
 //Get The Time Unites
 let days =Math.floor(dateDiff / (1000*60*60*24));
 let hours = Math.floor((dateDiff % (1000*60*60*24)) /(1000*60*60))
 let minutes =Math.floor((dateDiff % (1000*60*60)) /(1000*60))
 let seconds =Math.floor((dateDiff % (1000*60)) /1000)

 document.querySelector('.days').innerHTML=`-${days} D `
 document.querySelector('.hours').innerHTML=`${hours} h`
 document.querySelector('.minutes').innerHTML=`${minutes} m`
 document.querySelector('.seconds').innerHTML=`${seconds} s` 
//  document.querySelector('.seconds').innerHTML=seconds < 10? `0${seconds}`: seconds
 if(dateDiff< 0){
   clearInterval(counter);
 }

})
////////////////count chars of textarea/////////////////////
var $count = document.getElementById('count');
var  $textarea = document.getElementById('text');
var   $maxLength = $textarea.getAttribute('maxlength');
$textarea.oninput = function () {
  $count.innerHTML = $maxLength - this.value.length;
  if ($count.innerHTML == 0) {
    $count.innerHTML=`<span id="count" style=" color: #D62E33; font-size: 20px;">your available character finished </span>`;
  }
};

