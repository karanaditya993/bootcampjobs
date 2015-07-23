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

//= require_tree .

var githubFadeOut = function () {
    $('#github-signin-button').on("click", function (event) {
        //setTimeout(function () {
        //    event
        //}, 1000)
        $('#github-signin-button').fadeOut(500);
    })
};

var addSkill = function () {
    $('form').on("submit", function (event) {
        event.preventDefault();
        console.log("Clicked!");

        var path = $(this).attr('action');
        var method = $(this).attr('method');
        var content = $(this).serialize();

        var request = $.ajax({
            url: path,
            type: method,
            data: content
        });
        request.done(function (response) {
            console.log("Succes");
            console.log(response);
            $('body').append(response);
        });
        request.fail(function (response) {
            console.log("Fail");
            console.log(response);
        });
    })
};

function reload_iframe(loc) {
    document.getElementById('embedded_page').src = loc;
//            document.getElementById('iframe_handle').style.top = pos;
//            document.getElementById('iframe_handle').style.backgroundColor = frameHandleColor;
}
function new_iframe(loc) {
    document.getElementById('embedded_page').src = loc;
}
$(document).ready(function () {
    githubFadeOut();
    addSkill();
     smokey = $('#new-york img').attr('src')
     bluey = $('#san-francisco img').attr('src')
    $('#san-francisco_img').show();
    $('#chicago_img').hide();
    $('#new-york_img').hide();

    $('#city-menu').on("click", function (event) {
        event.preventDefault();

        var my_string = $(this).text();
        if (event.target.textContent == "Chicago") {
            $('#san-francisco_img').hide();
            $('#chicago_img').show();
            $('#new-york_img').hide();
            $('#san-francisco img').attr('src', smokey);
            $('#san-francisco img').attr('id', "smokey_img");
            $('#new-york img').attr('src', smokey);
            $('#new-york img').attr('id', "smokey_img");
            $('#chicago img').attr('src', bluey);
            $('#chicago img').attr('id', "blue-box_img");
        } else if (event.target.textContent == "San Francisco") {
            $('#san-francisco_img').show();
            $('#chicago_img').hide();
            $('#new-york_img').hide();
            $('#san-francisco img').attr('src', bluey);
            $('#san-francisco img').attr('id', 'blue-box_img');
            $('#new-york img').attr('src', smokey);
            $('#new-york img').attr('id', 'smokey_img');
            $('#chicago img').attr('src', smokey);
            $('#chicago img').attr('id', 'smokey_img');
        }
        else {
            $('#san-francisco_img').hide();
            $('#chicago_img').hide();
            $('#new-york_img').show();
            $('#san-francisco img').attr('src', smokey);
            $('#san-francisco img').attr('id', "smokey_img");
            $('#new-york img').attr('src', bluey);
            $('#new-york img').attr('id', 'blue-box_img');
            $('#chicago img').attr('src', smokey);
            $('#chicago img').attr('id', 'smokey_img');

        }
    });

    //

});