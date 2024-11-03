const menuContainer = document.querySelector('.menu-container');
const transparentDiv = document.querySelector('.transparent-div');

menuContainer.addEventListener('click', function () {
    $('.dropdown-div').css('display', 'block');
    $(transparentDiv).css('display', 'block');
    setTimeout(function () {
        $('.dropdown-div').css('transform', 'translateX(0vw)');
        $(transparentDiv).css('opacity', '0.75');
    }, 50);
});

transparentDiv.addEventListener('click', function () {
    $('.dropdown-div').css('transform', 'translateX(-100vw)');
    $(transparentDiv).css('display', 'none');
    $(transparentDiv).css('opacity', '0');
});
