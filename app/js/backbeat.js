$(document).ready(function(){

  function adjustSize() {
    // var timestamp = new Date();
    // console.log(timestamp);
    // console.log("running adjustSize backbeat.js function")
    var viewportWidth = $("#viewport-core").width();
    // // why is viewportWidth still null?
    // console.log("viewportWidth ", viewportWidth);
    // console.log("viewportWidth at ", timestamp + ": " + viewportWidth);
    var viewportHeight = $("#viewport-core").height();
    $("#viewport-clipper").css("clip","rect(0px "+viewportWidth+"px "+viewportHeight+"px 0px)");

    var viewportScale = viewportWidth/3200.0;
    $("#viewport-scaler").css("transform","scale("+viewportScale+")");    
    $("#viewport-scaler").css("-webkit-transform","scale("+viewportScale+")");
    
    $("#viewport-outer-menubar").css("font-size", 0.80 * $("#viewport-outer-menubar").height());
    // console.log("viewportWidth2 still in adjustSize ", viewportWidth);
  }

  function main() {
    console.log("running main backbeat.js function");
    var viewportWidth = $("#viewport-core").width();

    adjustSize();
    $(window).resize(adjustSize);


  };

  main();


});