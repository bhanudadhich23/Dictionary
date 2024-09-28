let darkMode = document.querySelector(".custom-control-input");
let navBar = document.querySelector(".navbar");
let navBarBrand = document.querySelector(".navbar-brand");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let data = document.querySelector(".data");
let input = document.querySelector(".word");
let searchBtn = document.querySelector(".btn");
let noun = document.querySelector(".noun");
let verb = document.querySelector(".verb");
let anto = document.querySelector(".anto");
let syno = document.querySelector(".syno");

let content = document.querySelector(".content");
darkMode.addEventListener("click", () => {
  if (darkMode.checked) {
    // Apply dark mode styles
    navBar.style.backgroundColor = "black";
    navBar.style.color = "white";
    navBarBrand.style.color = "white";
    h1.style.color = "white";
    body.style.backgroundColor = "black";
    data.style.border = "5px solid white";
    content.style.backgroundColor = "white";
  } else {
    // Revert to light mode styles
    navBar.style.backgroundColor = "";
    navBar.style.color = "";
    navBarBrand.style.color = "";
    h1.style.color = "black";
    body.style.backgroundColor = "white";
    content.style.backgroundColor = "#a2d2ff";
  }
});

searchBtn.addEventListener("click", async () => {
  let searchAble = input.value;
  console.log(searchAble);
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchAble}`;

  try {
    let res = await fetch(url);
    let data = await res.json();
    noun.innerHTML = data[0].meanings[0].definitions[0].definition;
    verb.innerHTML = data[0].meanings[1].definitions[0].definition;
    anto.innerText = data[0].meanings[1].antonyms[0];
    syno.innerHTML = data[0].meanings[1].synonyms[0];
    // input.value = "";
  } catch (err) {
    console.log(err);
  }
});
