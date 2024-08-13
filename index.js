const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const countryEl = document.getElementById("country");
const phoneNumberEl = document.getElementById("phone-number");
const stateEl = document.getElementById("state");
const cityEl = document.getElementById("city");
const villageEl = document.getElementById("village");

const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
  const userInfo = JSON.parse(storedUserInfo);

  // Display user information in the card
  firstNameEl.textContent = userInfo.firstName;
  lastNameEl.textContent = userInfo.lastName;
  countryEl.textContent = userInfo.country;
  phoneNumberEl.textContent = userInfo.phoneNumber;
  stateEl.textContent = userInfo.state;
  cityEl.textContent = userInfo.city;
  villageEl.textContent = userInfo.village;
} else {
  storeUserInfo();
}

// Function to store user information in local storage
function storeUserInfo() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const country = prompt("Enter your country:");
  const phoneNumber = prompt("Enter your phone number:");
  const state = prompt("Enter your state:");
  const city = prompt("Enter your city:");
  const village = prompt("Enter your village:");

  const userInfo = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
  };

  // Store user information in local storage as a JSON string
  localStorage.setItem("userInformation", JSON.stringify(userInfo));

  // Display user information in the card

  firstNameEl.textContent = userInfo.firstName;
  lastNameEl.textContent = userInfo.lastName;
  countryEl.textContent = userInfo.country;
  phoneNumberEl.textContent = userInfo.phoneNumber;
  stateEl.textContent = userInfo.state;
  cityEl.textContent = userInfo.city;
  villageEl.textContent = userInfo.village;

}

// Call the function to store user information
// storeUserInfo();
