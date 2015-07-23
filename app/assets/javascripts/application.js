// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).on("page:change", function() {
  githubFadeOut();
  addSkill();
});

var githubFadeOut = function(){
  $('#github-signin-button').on("click", function(event){
    setTimeout(function(){ event }, 1000)
    $('#github-signin-button').fadeOut();
  });
}

var addSkill = function(){
  $('form').on("submit", function(event){
    event.preventDefault();
    console.log("Clicked!");

  var path = $(this).attr('action')
  var method = $(this).attr('method')
  var content = $(this).serialize();

  var request = $.ajax({
    url: path,
    type: method,
    data: content
  })
  request.done(function(response){
    console.log("Succes");
    console.log(response);
    $('body').append(response);
  });
  request.fail(function(response){
    console.log("Fail");
    console.log(response);
  });
})
}