(() => {
    const all = document.getElementById("text-and-link") as HTMLDivElement;
    const copyText = document.getElementById(
        "copy-link"
    ) as HTMLTextAreaElement;
    const linkText = document.getElementById(
        "link-text"
    ) as HTMLParagraphElement;

    if (document.documentElement.offsetWidth > 769) {
        copyText.style.height = linkText.offsetHeight + 5 + "px";
    }

    copyText.addEventListener("click", () => {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        linkText.innerHTML = "You've copied the text! Invite a friend!";

        all.classList.remove("wobble");
        all.classList.add("fall");
    });

    window.addEventListener("resize", () => {
        if (document.documentElement.offsetWidth > 769) {
            copyText.style.height = linkText.offsetHeight + 5 + "px";
        } else {
            copyText.style.height = "auto";
        }
    });
})();
