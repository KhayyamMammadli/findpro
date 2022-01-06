function openCity(cityName) {
   var i;
   var x = document.getElementsByClassName("city");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   document.getElementById(cityName).style.display = "block";  
 }

//  select js code

$(".custom-select").each(function() {
   var classes = $(this).attr("class"),
       id      = $(this).attr("id"),
       name    = $(this).attr("name");
   var template =  '<div class="' + classes + '">';
       template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
       template += '<div class="custom-options">';
       $(this).find("option").each(function() {
         template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
       });
   template += '</div></div>';
   
   $(this).wrap('<div class="custom-select-wrapper"></div>');
   $(this).hide();
   $(this).after(template);
 });
 $(".custom-option:first-of-type").hover(function() {
   $(this).parents(".custom-options").addClass("option-hover");
 }, function() {
   $(this).parents(".custom-options").removeClass("option-hover");
 });
 $(".custom-select-trigger").on("click", function() {
   $('html').one('click',function() {
     $(".custom-select").removeClass("opened");
   });
   $(this).parents(".custom-select").toggleClass("opened");
   event.stopPropagation();
 });
 $(".custom-option").on("click", function() {
   $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
   $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
   $(this).addClass("selection");
   $(this).parents(".custom-select").removeClass("opened");
   $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
 });

 
 $('.profil-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  item:5,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});



var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}




jQuery(".js-checkbox").on("click", function() {
  jQuery(this).toggleClass("is-checked");
});





