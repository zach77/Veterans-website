$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});
 // when you click on accept the badge will show in  badges completed //
$(document).ready(function() {
    $('.completed').click(function() {
      $('.badgeCompleted').show();
      $('.badgeProgress').hide();
      $('.badgeAll').hide();

    });
});




 // when you click on accept the badge will show in  badges in progress //
$(document).ready(function() {
    $('.accepted').click(function() {
      $('.badgeCompleted').hide();
      $('.badgeProgress').show();
      $('.badgeAll').hide();

    });
});
 // when loadid will only show all badges //
$(document).ready(function() {
    $('.badgeCompleted').hide();
    $('.badgeProgress').hide();
    $('badgeAll').show();
});



