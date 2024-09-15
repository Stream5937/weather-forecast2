//imports
import image1 from '../assets/sun.gif';         //sun icon
const image2 = image1;
import image3 from '../assets/snow.gif';         //snow icon
const image4 = image3;
import image5 from '../assets/rain.gif';         //rain icon
const image6 = image5;
import image7 from '../assets/fog.gif';         //fog icon
const image8 = image7;
import image9 from '../assets/cloud.gif';         //cloud icon
const image10 = image9;

// image sun -----------------------------------------------------------------------------------------
//icon image image_1
export const image1_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_1 = new Image();
    image_1.src = image1;
    if(image_1 && image_1.style) {
        image_1.style.height =  '100%' ;
        image_1.style.width =   '90%' ; 
        image_1.style.marginLeft = '10%';
    }
    element.appendChild(image_1);
    return element;     
}

//icon image image_2  also sun 
export const image2_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_2 = new Image();
    image_2.src = image2;
    if(image_2 && image_2.style) {
        image_2.style.height = '160px';
        image_2.style.width =   '100%'; 
        image_2.style.marginLeft = '0%';
    }
    element.appendChild(image_2);
    element.id="imageIconListItem";
    return element;     
}

// image snow -----------------------------------------------------------------------------------------
//icon image image_3
export const image3_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_3 = new Image();
    image_3.src = image3;
    if(image_3 && image_3.style) {
        image_3.style.height =  '100%' ;
        image_3.style.width =   '90%' ;
        image_3.style.marginLeft = '10%';
    }
    element.appendChild(image_3);
    return element;     
}

//icon image image_4  also snow 
export const image4_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_4 = new Image();
    image_4.src = image4;
    if(image_4 && image_4.style) {
        image_4.style.height =  '110px';
        image_4.style.width =   '100%';
        image_4.style.marginLeft = '0%';
    }
    element.appendChild(image_4);
    element.id="imageIconListItem";
    return element;     
}

// image rain -----------------------------------------------------------------------------------------
//icon image image_5
export const image5_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_5 = new Image();
    image_5.src = image5;
    if(image_5 && image_5.style) {
        image_5.style.height =  '100%' ;     //100px';
        image_5.style.width =   '90%' ;     //100px';
        image_5.style.marginLeft = '10%';
    }
    element.appendChild(image_5);
    return element;     
}

//icon image image_6  also rain 
export const image6_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_6 = new Image();
    image_6.src = image6;
    if(image_6 && image_6.style) {
        image_6.style.height =  '110px';
        image_6.style.width =   '100%';
        image_6.style.marginLeft = '0%';
    }
    element.appendChild(image_6);
    element.id="imageIconListItem";
    return element;     
}

// image fog -----------------------------------------------------------------------------------------
//icon image image_7
export const image7_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_7 = new Image();
    image_7.src = image7;
    if(image_7 && image_7.style) {
        image_7.style.height =  '100%' ;
        image_7.style.width =   '90%' ;
        image_7.style.marginLeft = '10%';
    }
    element.appendChild(image_7);
    return element;     
}

//icon image image_8  also fog 
export const image8_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_8 = new Image();
    image_8.src = image2;
    if(image_8 && image_8.style) {
        image_8.style.height =  '110px';
        image_8.style.width =   '100%';
        image_8.style.marginLeft = '0%';
    }
    element.appendChild(image_8);
    element.id="imageIconListItem";
    return element;     
}

// image cloud -----------------------------------------------------------------------------------------
//icon image image_9
export const image9_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_9 = new Image();
    image_9.src = image9;
    if(image_9 && image_9.style) {
        image_9.style.height =  '100%' ;
        image_9.style.width =   '90%' ;
        image_9.style.marginLeft = '10%';
    }
    element.appendChild(image_9);
    return element;     
}

//icon image image_10  also cloud 
export const image10_component = () => {
    const element = document.createElement('li');
    // Add the image to our <li>.
    const image_10 = new Image();
    image_10.src = image10;
    if(image_10 && image_10.style) {
        image_10.style.height =  '110px';
        image_10.style.width =   '100%';
        image_10.style.marginLeft = '0%';
    }
    element.appendChild(image_10);
    element.id="imageIconListItem";
    return element;     
}

export const imageComponents = [
    image1_component(), image2_component(),
    image3_component(), image4_component(),
    image5_component(), image6_component(),
    image7_component(), image8_component(),
    image9_component(), image10_component()
];






