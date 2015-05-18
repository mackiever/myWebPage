$(document).ready( function() {
    $( "nav li" ).click(function() {
        //alert("this works");
        //$( "#loadParagraph" ).load( "./pages/LinksInfo.html #edu" );
        //$( "#loadParagraph" ).load( "./index.html #testingP" );
        
        if ( $(this).children().text() == "Education" ) {
            
            $( "#sectionTwo" ).load( "./pages/LinksInfo.html #edu" );
        }
        
        if ( $(this).children().text() == "Experience" ) {
            
            $( "#sectionTwo" ).load( "./pages/LinksInfo.html #exp" );
        }
        
        if ( $(this).children().text() == "Future Plans" ) {
            
            $( "#sectionTwo" ).load( "./pages/LinksInfo.html #plan" );
        }
        
        if ( $(this).children().text() === "Contact Me" ) {
            
            $( "#sectionTwo" ).load( "./pages/LinksInfo.html #contact" );
        }
    });
});

    

