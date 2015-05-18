var submit_names = document.getElementById( 'submit_names' );
//submit_names.addEventListener( 'click', send_Names, false );

function send_Names() {
    var xhr = new XMLHttpRequest();
    var first = document.getElementById( 'first_name' ).value;
    var last = document.getElementById( 'last_name' ).value;
    var send_data = "primer_nombre="+first+"&segundo_nombre="+last;
    
    xhr.open( "POST" , "../pages/insertNames.php" , true  );
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        
        if ( xhr.readyState == 4 && xhr.status == 200 ) {
            var response = xhr.responseText;
            var display_response = document.getElementById( 'server_response' );
            display_response.innerHTML = response;
        }
    };
    
    xhr.send( send_data );
} // end of send_Names function

submit_names.addEventListener( 'click', send_Names, false );