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
  creatCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  creatCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("USA", "16:00", "wales")
  ) +
  creatCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi-arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  creatCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  creatCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  creatCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"));
