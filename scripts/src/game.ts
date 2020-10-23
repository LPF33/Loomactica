import { TPlayer } from "./types";

const room: string = window.location.pathname.replace(/\/play\//, "");
const socket: SocketIOClient.Socket = io({ query: { room: room } });

const player: TPlayer = {
    spaceship: 0,
    name: "player",
};

const allStartImg = document.querySelectorAll("#start img") as NodeListOf<
    HTMLImageElement
>;
const goButton = document.querySelector("#go") as HTMLButtonElement;
const inputName = document.querySelector("#name") as HTMLInputElement;

Array.prototype.forEach.call(
    allStartImg,
    (element: HTMLImageElement, index) => {
        element.addEventListener("click", () => {
            player.spaceship = index + 1;
            goButton.style.display = "inline";
        });
    }
);

inputName.addEventListener("input", (e: Event) => {
    player.name = (e.currentTarget as HTMLInputElement).value;
});
