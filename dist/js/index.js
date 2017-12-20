"use strict";

$(function () {
    $(".infografia__fyl__info__item").hover(function () {
        var name = $(this).attr("data-info");
        $(name).addClass("active");
        console.log($(name));
    }, function () {
        var name = $(this).attr("data-info");
        $(name).removeClass("active");
    });
});