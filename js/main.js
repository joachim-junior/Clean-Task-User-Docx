$(document).ready(function() {

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();

    $('#admin-switch').on('click', function () 
    {
        console.log('kdddsd');
        $('#user-section').css('cssText', 'display: none');
        $('#admin-section').css('cssText', 'display: block !important;');
    });

    $('#user-switch').on('click', function () 
    {
        console.log('kdddsd');
        $('#user-section').css('cssText', 'display: block !important');
        $('#admin-section').css('cssText', 'display: none !important;');
    });

});
