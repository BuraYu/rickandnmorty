export function createCharacterCard(img, name, status, type, occur) {
  let cardLi = document.createElement("li");
  cardLi.classList.add("card");

  let imageContainerDiv = document.createElement("div");
  imageContainerDiv.classList.add("card__image-container");

  let imageElement = document.createElement("img");
  imageElement.classList.add("card__image");
  imageElement.src = `${img}`;
  imageElement.alt = `${name}`;

  let imageGradientDiv = document.createElement("div");
  imageGradientDiv.classList.add("card__image-gradient");

  imageContainerDiv.appendChild(imageElement);
  imageContainerDiv.appendChild(imageGradientDiv);

  let cardContentDiv = document.createElement("div");
  cardContentDiv.classList.add("card__content");

  let cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = `${name}`;

  let cardInfoDL = document.createElement("dl");
  cardInfoDL.classList.add("card__info");

  let statusTitle = document.createElement("dt");
  statusTitle.classList.add("card__info-title");
  statusTitle.textContent = "Status";

  let statusDescription = document.createElement("dd");
  statusDescription.classList.add("card__info-description");
  statusDescription.textContent = `${status}`;

  var typeTitle = document.createElement("dt");
  typeTitle.classList.add("card__info-title");
  typeTitle.textContent = "Type";

  var typeDescription = document.createElement("dd");
  typeDescription.classList.add("card__info-description");
  typeDescription.textContent = `${type}`;

  var occurrencesTitle = document.createElement("dt");
  occurrencesTitle.classList.add("card__info-title");
  occurrencesTitle.textContent = "Occurrences";

  var occurrencesDescription = document.createElement("dd");
  occurrencesDescription.classList.add("card__info-description");
  occurrencesDescription.textContent = `${occur}`;

  cardInfoDL.appendChild(statusTitle);
  cardInfoDL.appendChild(statusDescription);

  cardInfoDL.appendChild(typeTitle);
  cardInfoDL.appendChild(typeDescription);

  cardInfoDL.appendChild(occurrencesTitle);
  cardInfoDL.appendChild(occurrencesDescription);

  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardInfoDL);

  cardLi.appendChild(imageContainerDiv);
  cardLi.appendChild(cardContentDiv);

  document.querySelector(".card-container").appendChild(cardLi);
}
