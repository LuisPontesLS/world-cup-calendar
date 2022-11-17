function createGame(player1, hour, player2) {
  return `
    <li>
    <figure>
        <img 
            src="./assets/img/bandeiras/icon-${player1}.svg"
            alt="Bandeira do ${player1}"
        />
        </figure>

        <strong>${hour}</strong>

        <figure>
        <img
            src="./assets/img/bandeiras/icon-${player2}.svg"
            alt="Bandeira da ${player2}"
        />
        </figure>
    </li>
    `;
}

let delay = -0.4;
function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `;
}

document.querySelector("#cards").innerHTML =
  creatCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  creatCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  creatCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"));
