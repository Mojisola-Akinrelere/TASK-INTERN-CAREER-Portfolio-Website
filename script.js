// Get all elements with the class 'tab-links' and 'tab-contents'
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

// Function to open a specific tab and hide others
function opentab(tabname) {
    // Remove the 'active-link' class from all tab links
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove the 'active-tab' class from all tab contents
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add the 'active-link' class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Display the content of the clicked tab by adding the 'active-tab' class
    document.getElementById(tabname).classList.add("active-tab");
}
