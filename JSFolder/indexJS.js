/* the following code works for inserting 
var textNode = document.createElement('DIV');
textNode.setAttribute('class' , 'myTestingClass');
var message = '<h3 class=\"testingText\">Hello there this is a test</h3>';

textNode.innerHTML = message;

var tagH1 = document.getElementById('newDiv');
var parent = tagH1.parentNode;

parent.insertBefore(textNode, tagH1.nextSibling); */

/*-----------------------------------------------------*/
var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if ( true ) {
      
      var response = xhr.responseXML;//retrieve XML file and store it in response variable
      var events = response.getElementsByTagName('event'); //retrieve event tag from events 
      
      for ( var i = 0; i < events.length; i++ ){
          
          var container, location, school, age, hobby, image, newline;
          container = document.createElement('div');
          container.className = 'event'; // set container attribute CLASS to event
          
          image = document.createElement('img');
          image.setAttribute('src', getNodeValue( events[ i ] , 'image' ) );
          image.appendChild( document.createTextNode( getNodeValue( events[ i ] , 'location' ) ) );
          container.appendChild(image);
          
          location = document.createElement('p');
          school = document.createElement('b');
          newline = document.createElement('br');
          school.appendChild( document.createTextNode( getNodeValue( events[i] ), 'school' ) );
          location.appendChild( newline );
          location.insertBefore( school, newline );
          location.appendChild( document.createTextNode( getNodeValue( events[ i ], 'age' ) ) );
          container.appendChild( location );
      }
      // end of for loop
      
      //function getNodeValue
      function getNodeValue( obj, tag ){
          return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
      }
      
  } // end of if Loop  
};

xhr.open('Get' , '../XML/myXML.xml' , true);
xhr.send(null);


