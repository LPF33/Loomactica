import { TPlayer } from "./types";

const room: string = window.location.pathname.replace(/\/play\//, "");
const socket: SocketIOClient.Socket = io({ query: { room: room } });

const player: TPlayer = {
    spaceship: 1,
    name: "player",
    player: null,
};

const allStartImg = document.querySelectorAll("#start img") as NodeListOf<
    HTMLImageElement
>;
const goButton = document.querySelector("#go") as HTMLButtonElement;
const inputName = document.querySelector("#name") as HTMLInputElement;

allStartImg.forEach((element, index) => {
    element.addEventListener("click", () => {
        player.spaceship = (index + 1) as 1 | 2 | 3 | 4 | 5 | 6;
        goButton.style.display = "inline";
    });
});

inputName.addEventListener("input", (e: Event) => {
    player.name = (e.currentTarget as HTMLInputElement).value;
});

socket.on("player-number", (id: number) => {
    player.player = id as 1 | 2;
    if (player.name === "player") {
        player.name = `player${id}`;
    }
});
