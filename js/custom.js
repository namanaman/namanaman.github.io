$(document).ready( function() {
    $('a[href="#travel"]').on('show.bs.tab', function() {
        $('#map').html( $('#map').html() );
    });
});
