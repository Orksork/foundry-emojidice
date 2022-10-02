
const jarJar = "modules/orksork-emoji-dice/models/darth_jar_jar_star_wars_custom_model.glb"
const pumpkins = "modules/orksork-emoji-dice/models/pumpkin.glb"

Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({ id: "20s", name: "ORK - Oops! All 20s" }, "default");

    dice3d.addDicePreset({
        type: "d20",
        labels: Array(20).fill("20"),
        system: "20s"
    },"d20");

    dice3d.addDicePreset({
        type: "d2",
        labels: Array(2).fill("20"),
        system: "20s"
    });

    dice3d.addDicePreset({
        type: "d4",
        labels: Array(4).fill("20"),
        system: "20s"
    },"d4");

    dice3d.addDicePreset({
        type: "d6",
        labels: Array(6).fill("20"),
        system: "20s"
    },"d6");

    dice3d.addDicePreset({
        type: "df",
        labels: Array(3).fill("20"),
        system: "20s",
        fontScale: 1.3
    },"df");

    dice3d.addDicePreset({
        type: "d8",
        labels: Array(8).fill("20"),
        system: "20s"
    },"d8");

    dice3d.addDicePreset({
        type: "d10",
        labels: Array(10).fill("20"),
        system: "20s" 
    },"d10");

    dice3d.addDicePreset({
        type: "d12",
        labels: Array(12).fill("20"),
        system: "20s"
    },"d12");

    dice3d.addDicePreset({
        type: "d100",
        labels: Array(10).fill("20"),
        system: "20s"
    },"d10");


    const d = new Date();
    if(d.getMonth() == 4 && d.getDay() <= 7) {
        dice3d.addSystem({ id: "pumpkin", name: "ORK - Let the Pumkins roll" }, "default");

        dice3d.addDicePreset({
            type: "d20",
            modelFile: jarJar,
            system: "pumpkin"
        },"d20");

        dice3d.addDicePreset({
            type: "d2",
            modelFile: jarJar,
            system: "pumpkin"
        });

        dice3d.addDicePreset({
            type: "d4",
            modelFile: jarJar,
            system: "pumpkin"
        },"d4");

        dice3d.addDicePreset({
            type: "pumpkin",
            modelFile: jarJar,
            system: "pumpkin"
        },"d6");

        dice3d.addDicePreset({
            type: "df",
            modelFile: jarJar,
            system: "pumpkin",
        },"df");

        dice3d.addDicePreset({
            type: "d8",
            modelFile: jarJar,
            system: "pumpkin"
        },"d8");

        dice3d.addDicePreset({
            type: "d10",
            modelFile: jarJar,
            system: "pumpkin" 
        },"d10");

        dice3d.addDicePreset({
            type: "d12",
            modelFile: jarJar,
            system: "pumpkin"
        },"d12");

        dice3d.addDicePreset({
            type: "d100",
            modelFile: jarJar,
            system: "pumpkin"
        },"d10");
    } else {
        dice3d.addSystem({ id: "pumpkin", name: "ORK - Let the Pumkins roll" }, "default");

        dice3d.addDicePreset({
            type: "d20",
            modelFile: pumpkins,
            system: "pumpkin"
        },"d20");
    
        dice3d.addDicePreset({
            type: "d2",
            modelFile: pumpkins,
            system: "pumpkin"
        });
    
        dice3d.addDicePreset({
            type: "d4",
            modelFile: pumpkins,
            system: "pumpkin"
        },"d4");
    
        dice3d.addDicePreset({
            type: "d6",
            modelFile: pumpkins,
            system: "pumpkin"
        },"d6");
    
        dice3d.addDicePreset({
            type: "df",
            modelFile: pumpkins,
            system: "pumpkin",
        },"df");
    
        dice3d.addDicePreset({
            type: "d8",
            modelFile: pumpkins,
            system: "pumpkin"
        },"d8");
    
        dice3d.addDicePreset({
            type: "d10",
            modelFile: pumpkins,
            system: "pumpkin" 
        },"d10");
    
        dice3d.addDicePreset({
            type: "d12",
            modelFile: pumpkins,
            system: "pumpkin"
        },"d12");
    
        dice3d.addDicePreset({
            type: "d100",
            modelFile: pumpkins,
            system: "pumpkin"
        },"d10");
    }
});