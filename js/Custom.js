

$(".leftLogoSite span").click(function(){
   $('.top-navbar .sitebar-menu').toggle(200);
})





$('.searchBox select').change(function(){
  var text = $(this).find('option:selected').text()
  var $aux = $('<select/>').append($('<option/>').text(text))
  $(this).after($aux)
  $(this).width($aux.width())
  $aux.remove()
}).change()