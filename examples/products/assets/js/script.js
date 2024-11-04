function showHideMenu() {
        
    let menu_css = jQuery( "#menu" ).css( "display" );
    if ( menu_css == "none" ) {

        jQuery( "#menu" ).css( "display", "block" );
    
    } else {

        jQuery( "#menu" ).css( "display", "none" );
    }
}

jQuery( document ).ready( () => {

    jQuery( "#show-button" ).on( "mouseenter", ( e ) => {

        showHideMenu();
    });

    jQuery( "#menu" ).on( "mouseleave", ( e ) => {

        showHideMenu();
    });
    
})