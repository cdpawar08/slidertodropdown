(function ( $ ) { 

    $.fn.slidertodropdown = function( options ) {
        var settings = $.extend({            
            backgroundColor: "#1E5598",
            enableDropdown: false,
            enableViewport: 540,
            dropdownTitle: "Select"
        }, options );

        //Check for Navigation
        var $maincontainer = this;
        var $items = this.find('ul.items');
        var liWidth = 0;
        $items.find('li').each(function( index ) {            
            var $this = $(this);
            if(index == 0){$this.addClass('active')}
            liWidth += $this.outerWidth();            
        });
        
        console.log(liWidth +","+ this.outerWidth());
        if(liWidth > this.outerWidth()){            
            this.addClass('nav-enable');
            this.append("<span class='nav nav-prev'><i class='fa fa-angle-left'></i></span>");
            this.append("<span class='nav nav-next'><i class='fa fa-angle-right'></i></span>");
        }

        var total_scroll_Left = 0;
        //Slide Next
        $('.slider-dropdown-container').on('click','.nav-next',function(){
            if(!$items.find('li:last').hasClass('active')){
                $items.find('li').filter(function( index ) {
                    return $( this ).attr( "class" ) === "active";
                }).removeClass('active').next('li').addClass('active');            
                setScroll();
            }
        });        
        //Slide Prev
        $('.slider-dropdown-container').on('click','.nav-prev',function(){
            if(!$items.find('li:first').hasClass('active')){
                $items.find('li').filter(function( index ) {                
                    return $( this ).attr( "class" ) === "active";
                }).removeClass('active').prev('li').addClass('active');
                setScroll();
            }                        
        });
        
        /* Dropdown Option TRUE */
        if(settings.enableDropdown){
            var $viewportWidth = settings.enableViewport;
            if (window.matchMedia("(max-width: "+$viewportWidth+"px)").matches) {

                $maincontainer.removeClass('nav-enable').addClass('dropdown-enable');
                $maincontainer.find("span.nav").remove();
                $maincontainer.append("<span class='select-dropdown'>"+settings.dropdownTitle+"<i class='fa fa-angle-down'></i></span>");
                $maincontainer.find('ul.items').css('background-color',settings.backgroundColor);

                $('.slider-dropdown-container').on('click','.select-dropdown',function(){
                    $maincontainer.toggleClass('open');
                });
            }             
        }
        
        return this.css({            
            backgroundColor: settings.backgroundColor
        });

        function setScroll(){
            var scroll_Left= $items.find('li').filter(function( index ) {
                return $( this ).attr( "class" ) === "active";
            }).position().left;

            scroll_Left = scroll_Left - 40; 
            total_scroll_Left = total_scroll_Left + scroll_Left;            
            $items.css('margin-left', "-" + total_scroll_Left  + "px");
        }
    }; 
}( jQuery ));