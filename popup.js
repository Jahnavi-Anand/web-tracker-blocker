// popup.js

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle button click event
  function onSettingsButtonClick() {
    // Open extension settings page in a new tab
    chrome.tabs.create({ url: 'options.html' });
  }

  // Get reference to the settings button
  var settingsButton = document.getElementById('settings-btn');

  // Add click event listener to the settings button
  settingsButton.addEventListener('click', onSettingsButtonClick);

  // Example of fetching blocked items and displaying them in the popup
  // Replace this with your actual logic to fetch and display blocked items
  var blockedItemsContainer = document.getElementById('blocked-items');
  blockedItemsContainer.innerHTML = '<p>No tracking elements blocked.</p>';
});
