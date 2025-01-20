function toggleThreads1(){
  console.log("toggle")

  document.body.querySelectorAll('details')
  .forEach((e) => {(e.hasAttribute('open')) ?
    e.removeAttribute('open') : e.setAttribute('open',true);
    console.log(e.hasAttribute('open'))
  })
}

// Initialize the state variable from localStorage (default to true if not set)
let areThreadsOpen = JSON.parse(localStorage.getItem('threadsOpen')) ?? true; // Default to true (open)

// Function to toggle the threads' open/closed state
function toggleThreads() {
  // Get all the <details> elements
  const detailsElements = document.body.querySelectorAll('details');


    // Toggle the state for the next time
    areThreadsOpen = !areThreadsOpen;

    // Save the current state to localStorage
    localStorage.setItem('threadsOpen', JSON.stringify(areThreadsOpen));
    
  // Set all <details> to the same state (either open or closed)
  detailsElements.forEach((e) => {
    if (areThreadsOpen) {
      e.setAttribute('open', true);  // Open all
    } else {
      e.removeAttribute('open');  // Close all
    }
  });


}







// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Apply the state when the page loads (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {


  // Immediately apply the state (open or closed) based on areThreadsOpen
  const detailsElements = document.body.querySelectorAll('details');
  
  detailsElements.forEach((e) => {
    if (areThreadsOpen) {
      e.setAttribute('open', true);  // Open all if state is true
    } else {
      e.removeAttribute('open');  // Close all if state is false
    }
  });



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Get the button:
let mybutton = document.getElementById("myBtn");
if (mybutton) {
  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

} else {
  
}






});



