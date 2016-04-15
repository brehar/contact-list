"use strict";

$(document).ready(init);

function init() {
    $('.glyphicon').on('click', toggleFavorite);
    $('#save-contact').on('click', addContact);
}

function toggleFavorite() {
    if ($(this).hasClass('glyphicon-star-empty')) {
        $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
    } else {
        $(this).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
    }
}

function addContact() {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var image = $('#image').val();

    var templateStr = `<div class="media animated fadeInRight">
            <div class="media-left">
                <img class="media-object" src="${image}">
            </div>
            <div class="media-body">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="media-heading">${name} <span class="glyphicon glyphicon-star-empty"></span></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <p><span class="bold">Address:</span> ${address}</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <p><span class="bold">Phone Number:</span> ${phone}</p>
                        <p><span class="bold">E-mail Address:</span> ${email}</p>
                    </div>
                    <div class="col-md-2 col-xs-12">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;

    $('#contacts').append(templateStr);

    $('.glyphicon').off('click');
    $('.glyphicon').on('click', toggleFavorite);

    $('#name').val('');
    $('#phone').val('');
    $('#address').val('');
    $('#email').val('');
    $('#image').val('');

    $('#myModal').modal('toggle');
}