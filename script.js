
/*
Finding HTML Elements
-document.getElementById(id)	        Find an element by element id
-document.getElementsByTagName(name)	Find elements by tag name
-document.getElementsByClassName(name)	Find elements by class name
Changing HTML Elements
-element.innerHTML =                    new html content	Change the inner HTML of an element
-element.attribute =                    new value	Change the attribute value of an HTML element
-element.style.property =               new style	Change the style of an HTML element
-element.setAttribute(attribute, value)	Change the attribute value of an HTML element
Adding and Deleting Elements
-document.createElement(element)	   Create an HTML element
-document.removeChild(element)	       Remove an HTML element
-document.appendChild(element)	       Add an HTML element
-document.replaceChild(new, old)	   Replace an HTML element
-document.write(text)	               Write into the HTML output stream
Adding Events Handlers
-document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
*/


//ACT1
const buttonPress = document.getElementById('hide')

buttonPress.addEventListener('click', ()=> {
    if (image.style.visibility=='visible') {
    document.getElementById('image').style.visibility = 'hidden';
    } else image.style.visibility = 'visible'
})



//ACT2

const image = document.getElementById(`image`);
const button = document.getElementById(`Submitbutton`);
const input = document.getElementById(`imgURL`);

button.addEventListener(`click`, () => {
    image.src = imgURL.value;
});


//ACT3
const header = document.getElementById(`heading`);
const btn = document.getElementById(`colorbtn`);
const inPut = document.getElementById(`color`);

btn.addEventListener(`click`, () => {
    header.style.color = inPut.value;
});


