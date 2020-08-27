console.log("Let's get ready to party with jQuery!");

//give all img elements 'image-center' class
$('img').addClass('image-center');

//remove last paragraph
$('p').eq(5).remove();

//set size of title to be random px from 0-100
const rdm = Math.floor((Math.random() * 101))
$('#title').css('font-size', rdm + 'px');

//add an item to the list
$('ol').append('<li> Here is another list item</li>');

//empty aside and add p
$('aside').html("<p>I am sorry for the list's existance</p>")

//change background color
$('#formDiv').on('change blur', function() {
    const $red = $('input').eq(0).val();
    const $blue = $('input').eq(1).val();
    const $green = $('input').eq(2).val();
    $('body').css('background-color', `rgb(${$red}, ${$green}, ${$blue})`)
});

//remove image with click
$("img").on('click', function(e) {
    $(e.target).remove();
});