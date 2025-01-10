// NAVBAR SECTION
// Select the navbar element
const navbar = document.querySelector('.nav-scroll');

// Change the background color when the page is scrolled
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent'); // Set background color when scrolled
  } else {
    navbar.classList.add('transparent'); // Keep it transparent when at the top
  }
});

// Hamburger menu for mobile view
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the menu visibility
});

// CLASSES SECTION BUTTONS AND FEATURES
// Select all buttons in the class section
const buttons = document.querySelectorAll('.class-btn');

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
    button.classList.add('active'); // Add active class to the clicked button
  });
});

// Reference to the container button
let btn = document.querySelector(".container-btn");
// Select the container holding features
let features = document.querySelector("#features-container");

// Add click event to the buttons
btn.addEventListener("click", (e) => {
  // Remove animation class to trigger re-render
  features.classList.remove("features-container");
  // Trigger CSS transitions
  void features.offsetWidth;
  // Add the animation class back
  features.classList.add("features-container");

  // Check which button is clicked and call the corresponding function
  switch (e.target.id) {
    case "yoga":
      yoga(); // Call yoga function
      break;
    case "group":
      group(); // Call group function
      break;
    case "solo":
      solo(); // Call solo function
      break;
    case "stretch":
      stretch(); // Call stretch function
      break;
    default:
      return; // Do nothing if the button is undefined
  }
});

// Function to update yoga features
function yoga() {
  // Update title and description
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Yoga?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  
  // Update time information
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Yoga Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Update the image
  document.querySelector("#features-container img").src = "img/yoga.jpg";
}

// Function to update group features
function group() {
  // Update title and description
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Group?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  
  // Update time information
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Group Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Update the image
  document.querySelector("#features-container img").src = "img/group.webp";
}

// Function to update solo features
function solo() {
  // Update title and description
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Solo?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  
  // Update time information
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Solo Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Update the image
  document.querySelector("#features-container img").src = "img/solo.jpg";
}

// Function to update stretch features
function stretch() {
  // Update title and description
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Stretch?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  
  // Update time information
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Stretch Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Update the image
  document.querySelector("#features-container img").src = "img/stret.webp";
}

// BMI CALCULATION
// Add input event listeners to height and weight fields
document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

function calculateBMI() {
  // Get height and weight input values from the user
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const weight = parseFloat(document.getElementById('weight').value);

  if (height > 0 && weight > 0) {
    // BMI formula: weight / height^2
    const bmi = weight / (height * height);
    console.log("Calculated BMI:", bmi); // Debugging line to check the BMI value
    updateBMIMeter(bmi);
  }
}

function updateBMIMeter(bmi) {
  // Control the triangle position based on BMI value
  const triangle = document.querySelector('.triangle');
  const imgContainer = document.querySelector('.BMI-img-container'); // Fixed class name
  
  // Set BMI limits based on visual scale
  const minBMI = 10;
  const maxBMI = 50; // Set realistic max BMI for scale
  const containerWidth = imgContainer.clientWidth;
  
  // Calculate triangle position within min-max BMI range
  let bmiPosition = ((bmi - minBMI) / (maxBMI - minBMI)) * containerWidth;
  
  // Clamp position to container bounds
  bmiPosition = Math.max(0, Math.min(bmiPosition, containerWidth));
  
  // Set the left position of the triangle
  triangle.style.left = `${bmiPosition}px`;
}



// OUR BEST TRAINERS SECTION
document.querySelectorAll('.trainer-card').forEach(card => {
  card.addEventListener('click', () => {
    const layer = card.querySelector('.trainer-layer');
    // Toggle the visibility of trainer information
    if (layer.style.display === 'none' || layer.style.display === '') {
      layer.style.display = 'block'; // Show information
    } else {
      layer.style.display = 'none'; // Hide information
    }
  });
});
