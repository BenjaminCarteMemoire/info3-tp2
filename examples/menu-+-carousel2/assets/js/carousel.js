const CAROUSEL_LIST = [

    // Default images. Min 2, thanks.
    "assets/images/dos1.png",
    "assets/images/dos3.png",
    "assets/images/dos2.png"
]

document.addEventListener( "DOMContentLoaded", ( e ) => {

    let current_image = 0; // Default.
    let image_url = "";
    const prec_button = document.getElementById( "car-back" );
    const next_button = document.getElementById( "car-next" );
    const image_box = document.getElementById( "car-image" );
    const nb_image_id_front = document.getElementById( "car-nb-image-front" );
    const nb_image_id_back = document.getElementById( "car-nb-image-back" );

    const refresh_as_default = () => {
    
        // Init counts.
        current_image = 0;
        image_box.setAttribute( "src", CAROUSEL_LIST[0] );
        prec_button.setAttribute( "data-image", ( CAROUSEL_LIST.length - 1 ) );
        next_button.setAttribute( "data-image", 1 );
        nb_image_id_front.innerHTML = 0 + 1;
        nb_image_id_back.innerHTML = ( CAROUSEL_LIST.length );

    }
    
    const change_image = ( image_id ) => {

        image_url = CAROUSEL_LIST[ Number( image_id ) ] ?? CAROUSEL_LIST[ 0 ];
        image_box.setAttribute( "src", image_url );
        let prec = ( Number( image_id ) - 1 ) < 0 ? ( CAROUSEL_LIST.length - 1 ) : Number( image_id ) - 1
        let suiv = ( Number( image_id ) + 1 ) > ( CAROUSEL_LIST.length - 1 ) ? 0 : Number( image_id ) + 1
        prec_button.setAttribute( "data-image", prec );
        next_button.setAttribute( "data-image", suiv );
        nb_image_id_front.innerHTML = Number( image_id ) + 1;

    }

    const add_url = () => {

        let url = prompt( "Ajoutez une URL" );
        if( url == "" || url == null ) return;
        try { 
            url = new URL( url );
            CAROUSEL_LIST.push( url );
            refresh_as_default();
            return;
        } catch( e ) {
            alert( "Cette URL n'est pas valide." );
        }
    }

    prec_button.onclick = () => {

        change_image( prec_button.getAttribute( "data-image" ) )
    }

    next_button.onclick = () => {

        change_image( next_button.getAttribute( "data-image" ) )
    }

    document.getElementById( "car-add-url" ).onclick = add_url;
    refresh_as_default();

});