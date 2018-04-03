# slidertodropdown
Simple jquery plugin in which slider is converted into dropdown in responsive.

1.  Add slidertodropdown.js in your JS section
2.  Add slidertodropdown.css in your CSS Section
3.  And Add Below Steps for HTML & jquery initialization

```
<!-- HTML Markup -->
<div id="slidertodrop" class="slider-dropdown-container">            
    <div class="item-content">
        <ul class="items">
            <li><a href="javascript:void(0)" class="item-name">Ahmedabad</a></li>
            <li><a href="javascript:void(0)" class="item-name">Surat</a></li>
            <li><a href="javascript:void(0)" class="item-name">Vadodara</a></li>
            <li><a href="javascript:void(0)" class="item-name">Navsari</a></li>
            <li><a href="javascript:void(0)" class="item-name">Vapi</a></li>
            <li><a href="javascript:void(0)" class="item-name">Mumbai</a></li>
            <li><a href="javascript:void(0)" class="item-name">Ankaleshwer</a></li>
            <li><a href="javascript:void(0)" class="item-name">Kosamba</a></li>
            <li><a href="javascript:void(0)" class="item-name">Sayan</a></li>
            <li><a href="javascript:void(0)" class="item-name">Olpad</a></li>
            <li><a href="javascript:void(0)" class="item-name">Palej</a></li>
            <li><a href="javascript:void(0)" class="item-name">Bhestan</a></li>
            <li><a href="javascript:void(0)" class="item-name">Udhana</a></li>
            <li><a href="javascript:void(0)" class="item-name">Barejadi</a></li>
            <li><a href="javascript:void(0)" class="item-name">Mulad</a></li>
            <li><a href="javascript:void(0)" class="item-name">Kudsad</a></li>                
        </ul>
    </div>
</div>
```

```javascript
<!-- Jquery Init -->
var $sliderTodrop = $("#slidertodrop");
if ($sliderTodrop.length) {      
    $sliderTodrop.slidertodropdown({                        
        enableDropdown:true,
        enableViewport:540,
        dropdownTitle: "Select City"
    });       
}
```

## Jquery Options

    backgroundColor: "#1E5598"

    enableDropdown: false/true 
            
    enableViewport: 540
            
    dropdownTitle: "Select"
