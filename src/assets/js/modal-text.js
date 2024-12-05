const MODAL_TEXT = {
    1: {
        header: "Cyberpunk 2077",
        image: "assets/images/trio/77.png",
        description: "Jeu de 52 cartes Cyberpunk 2077 à jouer conçu pour intégrer l’esthétique et l’univers immersif de Night City. Chaque carte est illustrée avec des personnages, des factions et des éléments emblématiques du jeu vidéo, dans un style artistique néon et futuriste. Les figures (Roi, Reine, Valet) représentent les personnages principaux comme Johnny Silverhand, V, ou Judy .Parfait pour jouer à vos jeux de cartes favoris tout en plongeant dans l’ambiance sombre et technologique de Cyberpunk 2077."
    },
    2: {
        header: "Slay the Spire",
        image: "assets/images/trio/SLAY.png",
        description: "Jeu de Cartes Classique Slay the Spire transforme le jeu de 52 cartes en une aventure inspirée du célèbre roguelike. Chaque carte est illustrée avec des ennemis, artefacts ou compétences uniques du jeu. Les figures (Roi, Reine, Valet) représentent les héros emblématiques comme le Soldat de Fer ou le Silencieux, tandis que les couleurs évoquent des thématiques telles que la force, la dextérité, ou la stratégie.Idéal pour jouer à vos jeux de cartes traditionnels tout en explorant l'univers fantastique et stratégique de Slay the Spire."
    },
    3: {
        header: "The Binding of Isaac",
        image: "assets/images/trio/ISAAC.png",
        description: " Jeu de Cartes Classique The Binding of Isaac plonge les joueurs dans un univers sombre et grotesque avec une version de 52 cartes inspirée du jeu culte. Chaque carte est illustrée avec des monstres, objets, et personnages caractéristiques, comme Isaac, sa mère, et les reliques mystérieuses. Les figures (Roi, Reine, Valet) sont transformées en figures iconiques du jeu, comme Isaac, Maman ou même Guppy, tandis que les suites représentent les pouvoirs et objets collectés tout au long de l'aventure.Un jeu de cartes qui combine l’horreur et la stratégie de The Binding of Isaac, offrant un moyen original d'explorer ce monde macabre tout en jouant à vos jeux de cartes préférés." 
    },

    4: {
        header: "Stardew Valley",
        image: "assets/images/trio/STAR.png",
        description: "Jeu de Cartes Classique Stardew Valley vous plonge dans l'univers bucolique de la ferme avec un jeu de 52 cartes inspiré de l'emblématique jeu de simulation. Chaque carte est ornée d'illustrations de personnages, animaux et éléments du jeu, comme Pierre, le Marché de la Ville, ou les récoltes. Les figures (Roi, Reine, Valet) représentent des figures incontournables telles que l'Ancien, Emily ou Clint, tandis que les suites évoquent les saisons et les différentes cultures cultivées dans la vallée."
    },
    5: {
        header: "The Witcher",
        image: "assets/images/trio/witcher.png",
        description: " Plongez dans l'univers légendaire de The Witcher avec ce jeu de cartes classique revisité. Composé des 52 cartes traditionnelles, chaque carte est ornée d’illustrations exclusives inspirées des personnages emblématiques, des monstres terrifiants et des paysages enchanteurs de la saga." 
    },
    6: {
        header: "Dave The Diver",
        image: "assets/images/trio/dave.png",
        description: " Plongez dans l'univers captivant de Dave the Diver avec ce jeu de cartes classique revisité. Composé des 52 cartes traditionnelles, chaque carte est illustrée avec des scènes, personnages, et éléments marins emblématiques du jeu." 
    },
    7: {
        header: "Among Us",
        image: "assets/images/trio/amongus.png",
        description: " Apportez un soupçon de mystère et de trahison à vos parties avec ce jeu de cartes classique aux couleurs de Among Us. Composé des 52 cartes traditionnelles, chaque carte est personnalisée avec des designs amusants inspirés des Crewmates et Impostors." 
    },
    8: {
        header: "Castlevania",
        image: "assets/images/trio/castle.png",
        description: " Entrez dans l'obscurité gothique de Castlevania avec ce jeu de cartes classique somptueusement illustré. Composé des 52 cartes traditionnelles, chaque carte rend hommage à l'univers légendaire de la franchise, entre héros emblématiques et créatures nocturnes." 
    },
    9: {
        header: "Prochainement : 27/02/2025",
        image: "assets/images/trio/TRIOMYSTERE.png",
        description: "" 
    }

}

jQuery( "[id^=launchModal]" ).on( "click", function( event ) {

    let modalId = event.target.getAttribute( "data-modal-id" );

    // Replace elements. Title -> Image URL -> Description
    document.getElementById( "ModalLabel" ).innerHTML = MODAL_TEXT[ Number( modalId ) ].header;
    document.getElementById( "modalImage" ).src = MODAL_TEXT[ Number( modalId ) ].image;
    document.getElementById( "modalBody" ).innerHTML = MODAL_TEXT[ Number( modalId ) ].description;
});