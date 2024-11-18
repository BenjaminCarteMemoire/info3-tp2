function showHideMenu() {
        
    let menu_css = jQuery( "#menu" ).css( "display" );
    if ( menu_css == "none" ) {

        jQuery( "#menu" ).css( "display", "block" );
    
    } else {

        jQuery( "#menu" ).css( "display", "none" );
    }
}

function switchTheme() {

    if (document.documentElement.classList.contains('dark-theme')) {

        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');

    } else {

        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');

    }
}

/* Light / Dark theme */

var light_mode = false;

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-theme');
    light_mode = false;
} else {
    document.documentElement.classList.remove('dark-theme');
    light_mode = true;
}

document.addEventListener("DOMContentLoaded", function() {

    var darkLightToggle = document.getElementById('darkLightToggle');
    darkLightToggle.addEventListener('click', switchTheme);

});

jQuery( document ).ready( () => {

    jQuery( "#show-button" ).on( "mouseenter", ( e ) => {

        showHideMenu();
    });

    jQuery( "#menu" ).on( "mouseleave", ( e ) => {

        showHideMenu();
    });
    
});