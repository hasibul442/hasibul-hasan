$(document).ready(function () {


    let $btns = $('.project-area .text-center button');


    $btns.click(function (e) {

        $('.project-area .text-center  button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .row').isotope({
            filter: selector
        });

        return false;
    })


});