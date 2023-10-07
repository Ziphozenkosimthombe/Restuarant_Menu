let pizzaImages = [
    'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6238052/pexels-photo-6238052.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=600'
]

// Get the div element where you want to display the background image
const div = document.getElementById("image-header");
// Set the initial background image to the first element in the array
div.style.backgroundImage = "url(" + pizzaImages[0] + ")";

let index = 0;
function changeBackGroundImage(){
    //increment the index key bt 1
    index += 1
    if (index === pizzaImages.length){
        index = 0
    }
    // Set the background image to the element in the array at the current index
    div.style.backgroundImage = "url(" + pizzaImages[index] + ")";

}
// Call the function every 3 seconds using setInterval
// setInterval(changeBackGroundImage,2000);

function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}