$(function(){
  $("#page-wrap div.button").click(function(){
    $("#page-wrap div.button").removeClass("active");
    $(this).addClass("active");
    var idToLoad = $(this).attr("id").split('-');
    $("#content").find("div:visible").fadeOut("fast", function(){
      $(this).parent().find("#"+idToLoad[0]).fadeIn();
      })
  });
});