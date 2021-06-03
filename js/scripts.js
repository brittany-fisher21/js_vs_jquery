'use strict';

//plain js aka vanilla js
//creating buttons that will show messages of being clicked, buttons can be named anything

document.addEventListener('DOMContentLoaded', function () {
    console.log('Vanilla JS DOM Content Loaded');
    const button1 = document.querySelector('#button1');
    button1.addEventListener('click', function () {
        alert('Button 1 has been clicked');
    });

    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log('the data is: ', data);
            return data;
        })
        .catch(function (error) {
            console.error('ERROR: ', error);
            return error;
        });
});

//jquery version

$(document).ready(function () {
    console.log('jQuery DOM Content Loaded');
    $('#button2').on('click',function () {
        alert('Button 2 has been clicked!');
    });

    $.ajax({
        url:'https://api.chucknorris.io/jokes/random?category=dev',
        type:'GET',
        success: function (data) {
            console.log('jQuery AJAX Method:', data);
        },
        error: function (error) {
            console.error('ERROR: ', error);
        }
    });
});
