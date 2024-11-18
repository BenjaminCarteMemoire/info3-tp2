const MODAL_TEXT = {
    1: {
        header: "Text Image 1",
        image: "assets/images/icons8-instagram-24.png",
        description: "Description"
    },
    2: {
        header: "Text Image 2",
        image: "image_url_dummy",
        description: "Description"
    },
    3: {
        header: "Text Image 3",
        image: "image_url_dummy",
        description: "Description" 
    }
}

jQuery( "[id^=launchModal]" ).on( "click", function( event ) {

    let modalId = event.target.getAttribute( "data-modal-id" );

    // Replace elements. Title -> Image URL -> Description
    document.getElementById( "ModalLabel" ).innerHTML = MODAL_TEXT[ Number( modalId ) ].header;
    document.getElementById( "modalImage" ).src = MODAL_TEXT[ Number( modalId ) ].image;
    document.getElementById( "modalBody" ).innerHTML = MODAL_TEXT[ Number( modalId ) ].description;
});