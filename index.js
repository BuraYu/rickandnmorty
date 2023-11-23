import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBarInput = document.querySelector(".search-bar__input");
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
const minPage = 1;
let page = 1;
let searchQuery = "";

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    cardContainer.innerHTML = "";
    pagination.innerHTML = `${page} / ${maxPage}`;
    addData(page);
  } else {
    console.log(`page ${minPage}, doesn't work`);
  }
});

nextButton.addEventListener("click", () => {
  if (page < 42) {
    page++;
    console.log(page);
    cardContainer.innerHTML = "";
    pagination.innerHTML = `${page} / ${maxPage}`;
    addData(page);
  } else {
    console.log(`page ${maxPage}, doesn't work`);
  }
});

async function fetchCharacters(x) {
  console.log(x);
  let url = "https://rickandmortyapi.com/api/character/?page=" + x;
  try {
    const fetchRnm = await fetch(url);
    const data = await fetchRnm.json();
    //img, name, status, type, occur
    return data;
  } catch (error) {
    console.log("Error fetching data.", error);
  }
}

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  cardContainer.innerHTML = "";
  const input = searchBarInput.value;
  addSearchData(input);
});
async function fetchSingleCharacters(x) {
  let url = "https://rickandmortyapi.com/api/character/?name=" + x;
  try {
    const fetchRnm = await fetch(url);
    const data = await fetchRnm.json();
    //img, name, status, type, occur
    return data;
  } catch (error) {
    console.log("Error fetching data.", error);
  }
}

const addSearchData = async function (single) {
  const data = await fetchSingleCharacters(single);

  for (let i = 0; i <= 25; i++) {
    const { name, status, type, episode, image } = data.results[i];

    //img, name, status, type, occur
    const occur = episode.length;
    await createCharacterCard(image, name, status, type, occur);
  }
};

const addData = async function (page) {
  const data = await fetchCharacters(page);

  for (let i = 0; i <= 20; i++) {
    const { name, status, type, episode, image } = data.results[i];

    //img, name, status, type, occur
    const occur = episode.length;
    await createCharacterCard(image, name, status, type, occur);
  }
};

const darkModeSwitch = document.querySelector('[data-js="dark-mode-switch"]');

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  darkModeSwitch.addEventListener("change", function () {
    body.classList.toggle("dark-mode", this.checked);
    changeImageSource();
  });
});

function changeImageSource() {
  const bannerImage = document.getElementById("banner-image");
  console.log(bannerImage.src);
  if (bannerImage.src == "http://127.0.0.1:5500/img/banner.png") {
    bannerImage.src = "img/bannerdark.jpg";
  } else {
    bannerImage.src = "img/banner.png";
  }
}

addData(1);
