$(document).ready(function(){
   $("ul.tabs li a first").addClass("active");
   $(".secciones article").hide()
   $('.secciones article":first').show();

   $("ul.tabs li a").click(function(){
    $("ul.tabs li a").removeClass("active");
    $(this).addClass("active");
    $(".secciones article").hide();

    var activeTabs = $(this).attr("href");
    $(activeTabs).show();
    return false;
   })
})