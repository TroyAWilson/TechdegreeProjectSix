//
// //On play the first span gets orange text
// if(video.currentTime == 0)
//    span1.addClass = "orangeText"
//
// //as long as the video is playing
// while(video.active){
// (time) =>{ //takes an argument of time
//   if(video.currentTime == time) //if the time is equal to the current time of the video
//   span1.removeClass()//take away the orange text from the first span
//   span1.sibling.addClass == "orangeText"//gives the orange text to the next span
// }
// }
videoPlayer = document.getElementById("myVideo");

function videoStartCheck(){
    $('.spanStart').addClass('currentText');
}

$(videoPlayer).on('click', ()=>{
  videoStartCheck();
})


// $('.video').on('click', function() {
//     $('span1').addClass('currentText');
// });
