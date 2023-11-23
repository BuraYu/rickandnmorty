export function createPagination() {
const mainContent = document.getElementById("main-content");

const navigation = document.createElement("nav");
navigation.classList.add("navigation");
navigation.setAttribute("data-js", "navigation");

const prevButton = document.createElement("button");
prevButton.classList.add("button", "button--prev");
prevButton.setAttribute("data-js", "button-prev");
prevButton.textContent = "previous";

const paginationSpan = document.createElement("span");
paginationSpan.classList.add("navigation__pagination");
paginationSpan.setAttribute("data-js", "pagination");
paginationSpan.textContent = "1 / 42"; // You can update this dynamically based on your logic

const nextButton = document.createElement("button");
nextButton.classList.add("button", "button--next");
nextButton.setAttribute("data-js", "button-next");
nextButton.textContent = "next";

navigation.appendChild(prevButton);
navigation.appendChild(paginationSpan);
navigation.appendChild(nextButton);

mainContent.appendChild(navigation);
}
