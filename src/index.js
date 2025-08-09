function displyPome(response) {
  new Typewriter("#pomee", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function handleAL(event) {
  event.preventDefault();

  let addPomeElemt = document.querySelector("#addPome");
  let apiKey = "19abto433b3602a6dd0fc334c03ec3cf";
  let context = `instraction: generat a persian pome abut ${addPome.value}`;
  let prompt =
    " yo are a person who love to write persian pome jut make shur to folow the instraction and write only 2 4 line pome and seperat each line with <br>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displyPome);
}

let submitElement = document.querySelector("#submit-1");
submitElement.addEventListener("click", handleAL);
