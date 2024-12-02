function showHideMenu() {
        
    let menu_css = jQuery( "#menu" ).css( "display" );
    if ( menu_css == "none" ) {

        jQuery( "#menu" ).css( "display", "block" );
    
    } else {

        jQuery( "#menu" ).css( "display", "none" );
    }
}

const TEMP_SEND_DOMAIN = "https://rhpz.org/f/uYaYCipcpuxn5";

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Add SameSite attribute
    var sameSite = "; SameSite=Lax"; // or SameSite=Strict based on your requirement
    document.cookie = name + "=" + (value || "") + expires + sameSite + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
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

    const CONTACT_FORM = jQuery( "#contactForm" );
    
    jQuery( "#menu" ).css( "height", jQuery(document).height() + "px" );
    jQuery( "#show-button" ).on( "mouseenter", ( e ) => {

        showHideMenu();
    });
    jQuery( "#menu" ).on( "mouseleave", ( e ) => {

        showHideMenu();
    });
    document.onscroll = () => {

        // Very crap...
        jQuery( "#menu" ).css( "display", "none" );

    }

    CONTACT_FORM.on( "submit", ( e ) => {

        e.preventDefault(); // Prevent default sending.

        // Verify fields.
       if( jQuery( "#name" ).val().length <= 0 ) {

            alert( "Name is required." );
            return;
       }
       if( jQuery( "#mail" ).val().length <= 0 || !validateEmail( jQuery( "#mail" ).val() )) {

        alert( "Valid E-Mail is required." );
        return;
        }
        if( jQuery( "#subject" ).val().length <= 0 ) {

            alert( "Subject is required." );
            return;
        }
        if( jQuery( "#form-content" ).val().length <= 50 ) {

            alert( "Content with 50 characters min is required." );
            return;
        }

        console.log( "Verify fields : Good." );

        // Add AJAX call...

            jQuery.ajax({
                url: TEMP_SEND_DOMAIN, // Point to temp mail sending PHP script.
                type: "POST",
                data: {
                    "name": jQuery( "#name" ).val(),
                    "mail": jQuery( "#mail" ).val(),
                    "subject": jQuery( "#subject" ).val(),
                    "form-content": jQuery( "#form-content" ).val()

                },
                success: function(e) {
                    
                    if( e == "no" ) {

                        alert( "Error during E-Mail sending." );
                        return;

                    } else {

                        alert( "Le mail a été envoyé." );
                        return;

                    }
                }
            })
        
        
    });



});