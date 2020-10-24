import { drawHexagons } from "./hexagon";

(() => {
    const copyText = document.getElementById(
        "copy-link"
    ) as HTMLTextAreaElement;
    const linkText = document.getElementById(
        "link-text"
    ) as HTMLParagraphElement;

    copyText.addEventListener("click", () => {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        linkText.innerHTML = "You've copied the text! Invite a friend!";
    });

    drawHexagons();
    window.addEventListener("resize", drawHexagons);
})();
