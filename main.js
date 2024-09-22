import { lyrics } from "./lyrics";
let index = 0;

function changeLyrics()
{
    const currentLyrics = lyrics[index].trim().split('\n');

    text.forEach((para, i) =>
    {
        para.textContent = currentLyrics[i];
    });
    index = (index+1) % lyrics.length;
}

let btn = document.getElementById("button");
let text = document.querySelectorAll("p");


btn.onclick = changeLyrics;
