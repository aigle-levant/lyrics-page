const lyrics = [
    //glory - 1
    `
    Deep in a corner of the night
    We were lying in the middle of the road
    Counting the planes as they flew by
    Inconceivable imagining them go
    And drunk we set the world to rights
    `,
    //send them off! - 2
    `
    Set me free from my jealousy
    Won't you exorcise my mind?
    Won't you exorcise my mind?
    I want to be free as I'll ever be
    Exorcise my mind
    Help me exorcise my mind
    `,
    //winter of our youth - 3
    `
    I know the winter's getting colder
    But why, just 'cause we're a little older do
    I relive it, I relive it
    Oh, I'm peddling backwards
    Even if I'm peddling alone
    Can't help it
    I relive it, I relive it, oh
    `,
    //pompeii - 4
    `
    But if you close your eyes
    Does it almost feel like nothing changed at all?
    And if you close your eyes
    Does it almost feel like you've been here before?
    How am I gonna be an optimist about this?
    How am I gonna be an optimist about this?
    `,
    //warmth - 5
    `
    Hold me in this wild, wild, world
    'Cause in your warmth I forget how cold it can be
    And in your heat I feel how cold it can get
    Hold me in this wild, wild, world
    'Cause in your warmth I forget how cold it can be
    And in your heat I feel how cold it can get
    Now draw me close
    `,
    //good grief - 6
    `
    Shut my eyes and count to ten
    It goes in one ear out the other, oh
    One ear out the other, oh
    Burning bright right till the end
    Now you'll be missing from the photographs
    Missing from the photographs
    `,
    //weight of living 1 - 7
    `
    Your albatross, let it go, let it go
    Your albatross, shoot it down, shoot it down
    When you just can't shake
    The heavy weight of living
    When you just can't seem to shake
    The weight of living
    `,
    //shame - 8
    `
    I can see a change
    I can see a change in you
    I see it coursing through your veins
    And it is a shame
    It is a shame on you
    I barely recognize your face
    `,
    //things we lost in the fire - 9
    `
    I was the match and you were the rock, maybe we started this fire
    We sat apart and watched all we had burn on the pyre
    You said, "We were born with nothing and we sure as hell have nothing now"
    You said, "We were born with nothing and we sure as hell have nothing now"
    `,
    //hangin` - 10
    `
    Just leave me hangin' in the breeze if it makes you feel better
    'Cause still through the leaves the wind keeps blowing
    I could just turn the other cheek if it makes you feel better
    Cause still through the leaves the wind keeps blowing, but
    Don't leave me hangin'
    I'm coming for you, I'm coming for you
    `
];
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
