
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
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        },"d20");

        dice3d.addDicePreset({
            type: "d2",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        });

        dice3d.addDicePreset({
            type: "d4",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        },"d4");

        dice3d.addDicePreset({
            type: "pumpkin",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        },"d6");

        dice3d.addDicePreset({
            type: "df",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin",
        },"df");

        dice3d.addDicePreset({
            type: "d8",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        },"d8");

        dice3d.addDicePreset({
            type: "d10",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin" 
        },"d10");

        dice3d.addDicePreset({
            type: "d12",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        },"d12");

        dice3d.addDicePreset({
            type: "d100",
            modelFile: "modules/orksorkdice/darth_jar_jar_star_wars_custom_model.glb",
            system: "pumpkin"
        },"d10");
    } else {
        dice3d.addSystem({ id: "pumpkin", name: "ORK - Let the Pumkins roll" }, "default");

        dice3d.addDicePreset({
            type: "d20",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        },"d20");
    
        dice3d.addDicePreset({
            type: "d2",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        });
    
        dice3d.addDicePreset({
            type: "d4",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        },"d4");
    
        dice3d.addDicePreset({
            type: "pumpkin",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        },"d6");
    
        dice3d.addDicePreset({
            type: "df",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin",
        },"df");
    
        dice3d.addDicePreset({
            type: "d8",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        },"d8");
    
        dice3d.addDicePreset({
            type: "d10",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin" 
        },"d10");
    
        dice3d.addDicePreset({
            type: "d12",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        },"d12");
    
        dice3d.addDicePreset({
            type: "d100",
            modelFile: "modules/orksorkdice/pumpkin.glb",
            system: "pumpkin"
        },"d10");
    }
});