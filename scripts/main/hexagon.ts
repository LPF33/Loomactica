export const drawHexagons = (): void => {
    const hexagonElem = document.getElementById("hexagons") as HTMLDivElement;
    hexagonElem.innerHTML = "";

    const text: string = (document.getElementById("alink") as HTMLElement)
        .innerText;

    const docWidth: number = document.documentElement.clientWidth;
    const docHeight: number = document.documentElement.clientHeight;
    const elem1H1 = document.querySelectorAll("h1")[0] as HTMLHeadingElement;
    const elem2H1 = document.querySelectorAll("h1")[1] as HTMLHeadingElement;
    const hexagonElemColumns: number = Math.floor(docWidth / 100) + 1;
    const hexagonElemRows: number =
        (docHeight - elem1H1.offsetHeight - elem2H1.offsetHeight) / 60;

    hexagonElem.style.gridTemplateColumns = `repeat(${hexagonElemColumns}, 1fr)`;

    for (let row: number = 0; row < hexagonElemRows; row++) {
        for (let column: number = 0; column < hexagonElemColumns; column++) {
            if (docHeight <= 420 && row === 0 && column === 1) {
                hexagonElem.innerHTML += `<a href="${text}" id="play-link" class="row${row}"><span  class="hexagon">PLAY</span></a>`;
                continue;
            }
            if (
                row === 1 &&
                column === hexagonElemColumns - 1 &&
                docHeight > 420
            ) {
                hexagonElem.innerHTML += `<a href="${text}" id="play-link" class="row${row}"><span  class="hexagon">PLAY</span></a>`;
                continue;
            }
            hexagonElem.innerHTML += `<div class="row${row}"><span class="hexagon"></span></div>`;
        }
    }

    const addClass = (e: Event) => {
        if (!(e.target as HTMLSpanElement).classList.contains("blinkClass")) {
            (e.target as HTMLSpanElement).classList.add("blinkClass");
            setTimeout(
                () =>
                    (e.target as HTMLSpanElement).classList.remove(
                        "blinkClass"
                    ),
                2000
            );
        }
    };

    Array.prototype.forEach.call(
        hexagonElem.childNodes,
        (elem: HTMLDivElement, index) => {
            if (elem.firstChild) {
                elem.firstChild.addEventListener("click", addClass);
                elem.firstChild.addEventListener("mouseover", addClass);
            }
        }
    );
};
