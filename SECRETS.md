# So my favorite frame of the first five minutes of the direct to VHS movie Kronk's New Groove was...

Okay are they gone? Here's some details about what's going on and what this module actually does.

## But Why?
This started as a way to troll my friends, but I loved the idea so much I started expanding it more and more and just started adding dice. So now I'm ripping out most of the memes and other things and making this look better. If you're curious you can step back through the commits and see some of the fun I've had.

## But What?
The main feature is the '🤘🏻' dice. This dice pulls the entire emoji list and assembles random emoji into every die face for all of the standard dice. The *best* part of this is that because of the joys of client based architechure, each user will generate their own set of emoji for the die faces. This means that I might roll a 20, see it as '🐈‍⬛', but my friend sees it as '🗿'.

The original goal for this module was to have a DM install, teach, and let players get comfortable with Dice So Nice! dice. Then a couple weeks in, the DM adds this module introducing new dice, and whomever is in on the joke sets their dice skin to '🤘🏻' and suddenly all dice have emoji all over them.

## What Emojis Does This Have?
In order to achieve this, I had to create a list of all of the emojis that my PC could display. These are spread about through ~8 or so blocks in UNICODE so it was a lot of formatting. This is included in [the data directory](./data/AllEmoji.txt). Feel free to take it and use it in your projects, but if you wouldn't mind crediting Orksork for it that'd be awesome.

## Okay, But What Else Is There?
The second dice I came up with, along the same time I was thinking of emoji dice, was "Oops! All 20s". Which is a pretty self explanitory joke.

Next I had the idea for secret dice, which if you don't know, whenever the emoji die are generated(per user) there are *tiny* chances for the emoji dice's presets to be ignored and instead a specific custom die will be used. DMs, if a player gets upset by this feature, tell them you're gonna do something real quick, then have them refresh their browser to roll again. Currently the weighting is a random number from 1-10000. 1-500 is all '👁️'. 500-1500 replaces the 1 value with '💩'. 1500-2000 replaces all faces with '💩'.

I've also included two non-dice to roll. The first being a great idea to make the tabletop feel more halloweeny by being able to throw pumpkins for dice. Then I thought of a second great joke so on April 1st, the pumpkins are replaced with Jar Jar Binks.

## Why have more headers?
TODO: Make a "holiday" pack that uses models of the closest holiday.

## What sets exist?

Halloween set:
🎃 🐈‍⬛ 🗡️ 🩸 ⚰️ ⛓️ 🔮 🕯️ 👽 🤖 💀 😨 👁️ 👺 👹 😱 👻 🕷️ 🧟 ☠️

## How can I suggest extra sets?
Create an issue with a clean list of the UNICODE emojis you want assembled into a list, what you want to call it, and any special requests.

## Can I See That Awesome Recorder Meme Again?
![Sure](./pics/RECORDER_MEME1.png?raw=true)