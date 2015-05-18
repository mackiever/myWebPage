var picArray = new Array();
picArray[0] = new Image();
picArray[0].src = "../images/imagesPeru/peru1.jpg";
picArray[1] = new Image();
picArray[1].src = "../images/imagesPeru/peru2.jpg";
picArray[2] = new Image();
picArray[2].src = "../images/imagesPeru/peru3.jpg";

function changePic() {
    //var arrows = document.getElementsByClassName( 'arrows' ); // get img tags left and right
    var slidePics = document.getElementById('imageTarget');
    
    var i = 0;
    for ( i; i < picArray.length; i++ ) {
        if ( picArray[ i ].src === slidePics.src ) {
            if ( i >= picArray.length - 1  ) {
                slidePics.src = picArray[ 0 ].src;
                break;
            }
            slidePics.src = picArray[ i + 1 ].src;
            break;
        }
    }
}

    var arrows = document.getElementsByClassName('arrows');
    
    for ( var j = 0; j < arrows.length; j++ ) {
        arrows[ j ].addEventListener( 'click' , changePic, false );
    }
