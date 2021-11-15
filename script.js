const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

//Global Variable
let photosArray = [];

// Unsplash API - https://unsplash.com/documentation#location
const count = 10;
const apiKey = 'DNeE4ox98GqONcQhADELMrdRKrE0PRKzGUz9M7rD_OE';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for(const key in attributes) { 
        element.setAttribute(key, attributes [key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, { 
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside the <a>, then put both inside image container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}


// Fetch Request - Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();       
    } catch (error) {
        //Catch Error Here
    }
}

// On Load
getPhotos();