$(document).ready(function () {
  $(".hide").hide();

  $(".marker-cdmx").click(function () {
    $(".hide").hide();
    $(".cdmx-text").toggle();
  });

  $(".marker-guadalajara").click(function () {
    $(".hide").hide();
    $(".guadalajara-text").toggle();
  });

  $(".marker-monterrey").click(function () {
    $(".hide").hide();
    $(".monterrey-text").toggle();
  });

  $(".marker-puebla").click(function () {
    $(".hide").hide();
    $(".puebla-text").toggle();
  });

  $(".marker-cancun").click(function () {
    $(".hide").hide();
    $(".cancun-text").toggle();
  });

  $(".marker-villahermosa").click(function () {
    $(".hide").hide();
    $(".villahermosa-text").toggle();
  });

  $(".marker-queretaro").click(function () {
    $(".hide").hide();
    $(".queretaro-text").toggle();
  });

  $(".marker-veracruz").click(function () {
    $(".hide").hide();
    $(".veracruz-text").toggle();
  });
});

/* function showData(state) {
  alert("Data for " + state);
  // You can replace the alert with your logic to display data
}


document.addEventListener("DOMContentLoaded", function () {
  // Get all circle elements
  var circles = document.querySelectorAll("circle");

  // Add event listeners to each circle
  circles.forEach(function (circle) {
    circle.addEventListener("mouseover", function () {
      showData(circle.getAttribute("data-state"), circle);
    });

    circle.addEventListener("click", function () {
      showData(circle.getAttribute("data-state"), circle);
    });
  });

  function showData(state, circle) {
    // Get the specific data for the state (replace this with your actual data logic)
    var dataForState = getDataForState(state);

    console.log(state);
    console.log("Data for state:", dataForState);

    // Create a message element
    var message = document.createElement("div");
    message.className = "message";
    message.textContent = "Data for " + state + ": " + dataForState;

    console.log("Message element:", message);

    // Position the message element above the circle
    var circleRect = circle.getBoundingClientRect();
    message.style.top = circleRect.top - 30 + "px"; // Adjust the position as needed
    message.style.left = circleRect.left + "px";

    console.log("Top of circle:", circleRect.top);
    console.log("Left of circle:", circleRect.left);
    console.log("Calculated top for message:", circleRect.top - 30 + "px");
    console.log("Calculated left for message:", circleRect.left + "px");

    // Append the message element to the body
    document.body.appendChild(message);

    // Remove the message element after a delay (e.g., 2 seconds)
    setTimeout(function () {
      document.body.removeChild(message);
    }, 7000);
  }

  // Replace this function with your actual data retrieval logic
  function getDataForState(state) {
    console.log("Getting data for state:", state);
    // Example: Replace this with your actual data retrieval logic
    var data = {
      CDMX: "Population: 5 million, Capital: Chihuahua City",
      Guadalajara: "Population: 8 million, Capital: Guadalajara",
      Monterrey: "Population: 5 million, Capital: Chihuahua City",
      Puebla: "Population: 8 million, Capital: Guadalajara",
      Cancun: "Population: 5 million, Capital: Chihuahua City",
      Villahermosa: "Population: 8 million, Capital: Guadalajara",
      Queretaro: "Population: 5 million, Capital: Chihuahua City",
      Veracruz: "Population: 8 million, Capital: Guadalajara",
    };

    return data[state] || "No data available";
  }
});

*/
