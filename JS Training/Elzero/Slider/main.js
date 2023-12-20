// From ES6 Features --> Create an array from the first parameter
var sliderImages = Array.from(document.querySelectorAll('.slider-img img'));

// Get Number Of slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentIndex = 1;

// Slide Number
var slideNumber = document.getElementById('number');

// Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create the Main Ul Element
var paginationElement = document.createElement('ul');

// Create Id For the Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slide Count

for (var i = 1; i <= slidesCount; i++) {
    // Create Li
    var paginationItem = document.createElement('li');

    // Set Attribute
    paginationItem.setAttribute('data-index', i);

    //Append Items To The Main List
    paginationElement.appendChild(paginationItem)

}

// Add the created ul element to the page
document.getElementById('indicator').appendChild(paginationElement)

// Get the New Created Ul
var paginationCreatedElement = document.getElementById('pagination-ul')

// Get Pagination Items
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets 
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function (){
        currentIndex = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

//Call Checker function
checker();

function nextSlide() {


    if (nextButton.classList.contains('disabled')) {
        return false
    } else {
        currentIndex++;
        checker();

    }



}

function prevSlide() {


    if (prevButton.classList.contains('disabled')) {
        return false
    } else {
        currentIndex--;
        checker();

    }

}

// Create The Cheacker Function 
function checker() {

    //Set SLide Number
    slideNumber.textContent = currentIndex + "/" + slidesCount;

    //Remove All Active
    removeActive();
    //Set Active Class on Current slide
    sliderImages[currentIndex - 1].classList.add('active');

    //Set Active Class On Pagination Item
    paginationCreatedElement.children[currentIndex - 1].classList.add('active');
    // removeActive();

    // Check If Current Slide Is the first
    if (currentIndex == 1) {

        //Add Desabled Class on prev button
        prevButton.classList.add('disabled');
    } else {
        //remove Desabled Class on prev button
        prevButton.classList.remove('disabled');
    }

    // Check If Current slide Is The Last
    if (currentIndex == 5) {

        //Add Desabled Class on prev button
        nextButton.classList.add('disabled');
    } else {
        //remove Desabled Class on prev button
        nextButton.classList.remove('disabled');
    }
}

// Remove Active CLasses using foreach

function removeActive() {

    //Remove From Images
    sliderImages.forEach((img) => {
        img.classList.remove('active')
    })

    // Remove From Pagination Bullets
    paginationBullets.forEach((bullet) => {
        bullet.classList.remove('active')
    })
}