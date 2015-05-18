var xhr = new XMLHttpRequest();

xhr.onload = function() {
    
    if ( true ) {
        
        var ref = xhr.responseXML;
        var eventOne = ref.getElementsByTagName('event');
        var loc = eventOne[0].getElementsByTagName('location')[0].firstChild.nodeValue;
        var box = document.createElement('b');
        box.setAttribute('id', 'testBox');
        box.appendChild(document.createTextNode( loc ) ); //insert box before h1 sectionOne id
        
        var section = document.getElementById('sectionOne');
        var firstChild = section.firstChild.nextSibling;
        section.insertBefore( box , firstChild );
        
        var childSection = section.childNodes[ 0 ].nextSibling; // article node
        
        var img = document.createElement('img');
        setAttr( img , {'id' : 'peruPic' } );
        img.setAttribute( 'src' , getTagNode( eventOne[ 0 ] , 'image' ) );
        img.appendChild( document.createTextNode( 'this is an image' ) );
        section.insertBefore( img, childSection );

    }// end if loop
    
    function getTagNode( fileRef , tag ){
        return fileRef.getElementsByTagName( tag )[ 0 ].firstChild.nodeValue;
    }
    
    function setAttr( obj , attr ) {
        for ( var i in attr ) {
            obj.setAttribute( i , attr[ i ] );
        }
    }
};//end browser repsonse/ onload function 

xhr.open('GET' , '../XML/myXML.xml', true);
xhr.send(null);


