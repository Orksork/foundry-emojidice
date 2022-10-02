import {EMOJIS} from '../data/AllEmoji.js';
import {HALLOWEEN} from '../data/sets.js';
import {CARDS} from '../data/sets.js';
import {MAJONG} from '../data/sets.js';
import {ANIMALS} from '../data/sets.js';

const specialSet = (Math.random() * 100001);

const getRandomEmoji = (num, emojiArray) => {

  var retVal = []
  if(specialSet < 500) {
    // all 👁️
    emojiArray = ['👁️'];
  } else if (specialSet < 1500) {
    // 💩 on 1s
    retVal.push('💩');
  } else if (specialSet < 2000) {
    // all 💩
    emojiArray = ['💩'];
  }

  for(var i = retVal.length; i < num; i++) {
      retVal.push(emojiArray[~~(Math.random() * emojiArray.length)])
  }
  return retVal
}

const addSystem = (dice3d, systemId, systemName, emojiArray) => {
  dice3d.addSystem({ id: systemId, name: systemName }, "default");

     dice3d.addDicePreset({
       type: "d20",
       labels: getRandomEmoji(20, emojiArray),
       system: systemId
     },"d20");

     dice3d.addDicePreset({
       type: "d2",
            labels: getRandomEmoji(2, emojiArray),
       system: systemId

     });

     dice3d.addDicePreset({
       type: "d4",
            labels: getRandomEmoji(4, emojiArray),
       system: systemId

     },"d4");

     dice3d.addDicePreset({
       type: "d6",
            labels: getRandomEmoji(6, emojiArray),
       system: systemId
     },"d6");

     dice3d.addDicePreset({
       type: "df",
       labels: getRandomEmoji(3, emojiArray),
       system: systemId,
     },"df");

     dice3d.addDicePreset({
       type: "d8",
            labels: getRandomEmoji(8, emojiArray),
       system: systemId
     },"d8");

     dice3d.addDicePreset({
       type: "d10",
            labels: getRandomEmoji(10, emojiArray),
       system: systemId
     },"d10");

     dice3d.addDicePreset({
       type: "d12",
            labels: getRandomEmoji(12, emojiArray),
       system: systemId
     },"d12");

     dice3d.addDicePreset({
       type: "d100",
            labels: getRandomEmoji(10, emojiArray),
       system: systemId
     },"d10");
}

Hooks.on('diceSoNiceReady', (dice3d) => {
    addSystem(dice3d, "Emojus", "ORK - 🤘🏻", EMOJIS);
    addSystem(dice3d, "Halloween", "ORK - 🎃 Spooky Emojis ", HALLOWEEN);
    addSystem(dice3d, "Majong", "ORK - 🀄 Let's Play Majong", MAJONG);
    addSystem(dice3d, "DeckOCards", "ORK - 🃞 Poker anyone?", CARDS);
    addSystem(dice3d, "Animals", "ORK - 🐈 Chaos approved", ANIMALS);
  });
