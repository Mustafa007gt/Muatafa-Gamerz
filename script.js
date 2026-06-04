const container = document.getElementById("gamesContainer");

function displayGames(list) {
  container.innerHTML = "";

  list.forEach(game => {
    container.innerHTML += `
      <div class="game">
        <img src="${game.image}">
        <h3>${game.name}</h3>
        <p>${game.size} | ${game.type}</p>
        <button onclick="openGame(${game.id})">تفاصيل</button>
      </div>
    `;
  });
}

displayGames(games);
