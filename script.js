function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function addRecommendation() {
    var recommendation = document.getElementById("new_recommendation").value;
    
    if (recommendation.trim() !== '') {
      var recommendationList = document.getElementById("all_recommendations");
      var newRecommendation = document.createElement("div");
      newRecommendation.classList.add("recommendation");
      newRecommendation.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;
      recommendationList.appendChild(newRecommendation);
  
      // Mostrar popup de confirmación
      showPopup(true);
  
      // Resetear el valor del textarea
      document.getElementById("new_recommendation").value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }
  