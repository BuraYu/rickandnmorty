export function createSearchBar() {
  const mainContent = document.getElementById("main-content");

  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");

  const searchBarForm = document.createElement("form");
  searchBarForm.classList.add("search-bar");

  const searchBarInput = document.createElement("input");
  searchBarInput.setAttribute("name", "query");
  searchBarInput.classList.add("search-bar__input");
  searchBarInput.setAttribute("type", "text");
  searchBarInput.setAttribute("placeholder", "search characters");
  searchBarInput.setAttribute("aria-label", "character name");

  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("search-bar__button");
  searchBarButton.setAttribute("aria-label", "search for character");

  const searchBarIcon = document.createElement("img");
  searchBarIcon.classList.add("search-bar__icon");
  searchBarIcon.setAttribute("src", "assets/magnifying-glass.png");
  searchBarIcon.setAttribute("alt", "");

  searchBarButton.appendChild(searchBarIcon);
  searchBarForm.appendChild(searchBarInput);
  searchBarForm.appendChild(searchBarButton);
  searchBarContainer.appendChild(searchBarForm);

  const darkModeSwitchContainer = document.createElement("div");
  darkModeSwitchContainer.classList.add("dark-mode-switch");

  const darkModeToggle = document.createElement("input");
  darkModeToggle.setAttribute("type", "checkbox");
  darkModeToggle.setAttribute("id", "dark-mode-toggle");
  darkModeToggle.classList.add("dark-mode-toggle");
  darkModeToggle.setAttribute("aria-label", "Toggle dark mode");

  const darkModeLabel = document.createElement("label");
  darkModeLabel.setAttribute("for", "dark-mode-toggle");
  darkModeLabel.textContent = "Dark Mode";

  darkModeSwitchContainer.appendChild(darkModeLabel);
  darkModeSwitchContainer.appendChild(darkModeToggle);

  mainContent.appendChild(searchBarContainer);
  mainContent.appendChild(darkModeSwitchContainer);
}
