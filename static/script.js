document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("close");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.style.display = "block";
        close.style.display = "block";
        hamburger.style.display = "none";
        
    });

    close.addEventListener("click", function () {
        menu.style.display = "none";
        close.style.display = "none";
        hamburger.style.display = "block";
    });
});


// Wait for the page to load before running the JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get the <p> element to animate
    const introText = document.querySelector('#introduction p');

    // Text to type
    const textToType = "An application that predicts economic indicators of the Indian economy.";

    // Initialize variables
    let textIndex = 0;
    let cursorVisible = true;

    // Function to toggle cursor visibility
    function toggleCursor() {
        cursorVisible = !cursorVisible;
        introText.innerHTML = textToType.substring(0, textIndex) + (cursorVisible ? '|' : '');
    }

    // Function to display the text letter by letter
    function typeText() {
        if (textIndex < textToType.length) {
            introText.innerHTML = textToType.substring(0, textIndex + 1) + '|';
            textIndex++;
            setTimeout(typeText, 50); // Adjust the typing speed as needed (in milliseconds)
        } else {
            setInterval(toggleCursor, 500); // Toggle cursor every 500ms
        }
    }

    // Start the typing animation when the page is loaded
    typeText();
});




// Wait for the document to load before running the JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const industryTypeSelect = document.getElementById("industry-type");
    const subsectorsDiv = document.getElementById("subsectors");
    const subsectorSelect = document.getElementById("subsector");

    // Define subsectors for each major sector (customize as needed)
    const subsectors = {
        Agriculture: ["Agriculture Overall", "Fishing", "Livestock", "Horticulture", "Tea", "Wheat", "Rice", "Forestry"],
        Service: ['Service Overall', 'BPO', 'Information technology', 'Retail', 'Telecommunications', 'Tourism', 'Financial Services', 'Hotels and Resturants'],
        Manufacturing: ['Manufacturing Overall', 'Automobiles',
        'Chemicals',
        'Constuction',
        'Electricity',
        'Electronics and Appliances',
        'Food Processing',
        'Gas',
        'Mining',
        'Pharmaceuticals',
        'Steel',
        'Textiles'],
        Others: ["Legal Services", "Movies", "Music"]
    };

    // Function to update subsector options
    function updateSubsectors() {
        const selectedIndustryType = industryTypeSelect.value;
        if (selectedIndustryType === "india") {
            subsectorsDiv.style.display = "none";
        } else {
            subsectorsDiv.style.display = "block";
            subsectorSelect.innerHTML = "";

            // Populate the subsector options based on the selected industry type
            subsectors[selectedIndustryType].forEach(subsector => {
                const option = document.createElement("option");
                option.value = subsector;
                option.textContent = subsector;
                subsectorSelect.appendChild(option);
            });
        }
    }

    // Add an event listener to the industryTypeSelect
    industryTypeSelect.addEventListener("change", updateSubsectors);

    // Call the function initially to set the initial state
    updateSubsectors();
});

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal if clicked outside the content
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}


