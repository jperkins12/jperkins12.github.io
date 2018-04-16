$(document).ready(function(){

    let links = [
        ['Home', 'index.html'],
        ['About', 'about.html'],
        ['Contact Me', 'contact.html'],
        ['Links', 'links.html']
    ];

    links.forEach(function(item, index, array) {
        let itemText = item[0];
        let itemLink = item[1];
        $('.navbar').append(`<a href="${itemLink}">${itemText}</a>`);
        if (index != array.length-1) {
            $('.navbar').append("<span> | </span>");
        }
    })

 });