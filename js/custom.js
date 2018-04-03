$(document).on('ready', function () {
    'use strict';
    var $sliderTodrop = $("#slidertodrop");
    if ($sliderTodrop.length) {      
        $sliderTodrop.slidertodropdown({                        
            enableDropdown:true,
            enableViewport:540,
            dropdownTitle: "Select City"
        });       
    }
});

  