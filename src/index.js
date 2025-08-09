function handleAL(event) {
  event.preventDefault();

  new Typewriter("#pomee", {
    strings: "دنیا همه هیچ . اهل دنیا همه هیچ",
    autoStart: true,
    delay: 1,
  });
}

let submitElement = document.querySelector("#submit-1");
submitElement.addEventListener("click", handleAL);
