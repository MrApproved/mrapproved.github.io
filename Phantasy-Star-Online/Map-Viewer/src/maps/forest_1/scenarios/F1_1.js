maps.forEach((map) => {
    if (map.name === "Forest 1") {
        map.scenarios.push({
            name: "1",
            averageTime: 80,
            rooms: [
                {
                    order: 1,
                    start: true,
                    src: "assets/maps/forest_1/R6.png",
                    objects: [
                        {
                            type: "start",
                            position: {
                                x: 0,
                                y: 0,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -70,
                                y: 40,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -45,
                                y: 105,
                            },
                            colour: "yellow",
                        },
                        {
                            type: "label",
                            value: "1",
                            position: {
                                x: -30,
                                y: -30,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -50,
                                y: 0,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -60,
                                y: 10,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -10,
                                y: 80,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -20,
                                y: 85,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -25,
                                y: 75,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -75,
                                y: 95,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -102,
                                y: 48,
                            },
                            colour: "aqua",
                            positionOffset: {
                                x: -102,
                                y: 80,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -87,
                                y: 140,
                            },
                            colour: "yellow",
                            positionOffset: {
                                x: -57,
                                y: 140,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    order: 2,
                    src: "assets/maps/forest_1/R7.png",
                    objects: [
                        {
                            type: "label",
                            value: "2",
                            position: {
                                x: -150,
                                y: 150,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -227,
                                y: 290,
                            },
                            colour: "red",
                        },
                        {
                            type: "laser",
                            position: {
                                x: -240,
                                y: 250,
                            },
                            positionOffset: {
                                x: -240,
                                y: 280,
                            },
                            colour: "red",
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -190,
                                y: 220,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -260,
                                y: 253,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -260,
                                y: 263,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -270,
                                y: 253,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -270,
                                y: 263,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -270,
                                y: 135,
                            },
                            colour: "deeppink",
                        },
                        {
                            type: "door",
                            position: {
                                x: -327,
                                y: 110,
                            },
                            colour: "deeppink",
                            positionOffset: {
                                x: -287,
                                y: 110,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R5.png",
                    order: 3,
                    objects: [
                        {
                            type: "label",
                            value: "3",
                            position: {
                                x: -370,
                                y: -50,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -210,
                                y: -83,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -210,
                                y: -93,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -220,
                                y: -93,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -220,
                                y: -83,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -265,
                                y: -150,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: -230,
                                y: -95,
                            },
                            positionOffset: {
                                x: -230,
                                y: -70,
                            },
                            colour: "aquamarine",
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -320,
                                                y: -10,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -300,
                                                y: -70,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -280,
                                                y: -130,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -320,
                                                y: 20,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Monest",
                                            position: {
                                                x: -290,
                                                y: -10,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                        {
                            order: 2,
                            optional: true,
                            spawnBox: {
                                position: {
                                    x: -339,
                                    y: -67,
                                },
                                size: {
                                    x: 25,
                                    y: 35,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -336,
                                                y: -80,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -316,
                                                y: -68,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -317,
                                                y: -40,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -335,
                                                y: -32,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    order: 4,
                    src: "assets/maps/forest_1/R1.png",
                    objects: [
                        {
                            type: "label",
                            value: "4",
                            position: {
                                x: -260,
                                y: -300,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -335,
                                y: -278,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -305,
                                y: -305,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -295,
                                y: -305,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -305,
                                y: -315,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -295,
                                y: -315,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: -315,
                                y: -285,
                            },
                            positionOffset: {
                                x: -270,
                                y: -285,
                            },
                            colour: "aquamarine",
                        },
                        {
                            type: "laser",
                            position: {
                                x: -315,
                                y: -285,
                            },
                            positionOffset: {
                                x: -315,
                                y: -255,
                            },
                            colour: "violet",
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -245,
                                y: -245,
                            },
                            positionOffset: {
                                x: -270,
                                y: -285,
                            },
                            colour: "aquamarine",
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -145,
                                y: -175,
                            },
                            positionOffset: {
                                x: -270,
                                y: -285,
                            },
                            colour: "violet",
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -200,
                                y: -200,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -190,
                                y: -190,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -130,
                                y: -295,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -120,
                                y: -285,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            id: "A",
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -220,
                                                y: -240,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -140,
                                                y: -220,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -110,
                                                y: -210,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                        {
                            order: 2,
                            id: "B",
                            optional: true,
                            spawnBox: {
                                position: {
                                    x: -180,
                                    y: -260,
                                },
                                size: {
                                    x: 52,
                                    y: 60,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -160,
                                                y: -250,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -150,
                                                y: -210,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -140,
                                                y: -200,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    order: 5,
                    finish: true,
                    src: "assets/maps/forest_1/R3.png",
                    waves: [
                        {
                            order: 1,
                            id: "A",
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -40,
                                                y: -120,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -35,
                                                y: -140,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 90,
                                                y: -110,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 75,
                                                y: -90,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 120,
                                                y: -60,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                        {
                            order: 2,
                            id: "B",
                            optional: true,
                            spawnBox: {
                                position: {
                                    x: 120,
                                    y: -40,
                                },
                                size: {
                                    x: 40,
                                    y: 40,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: 140,
                                                y: -20,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    objects: [
                        {
                            type: "label",
                            value: "5",
                            position: {
                                x: -10,
                                y: -160,
                            },
                        },
                        {
                            type: "finish",
                            position: {
                                x: 70,
                                y: -40,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 40,
                                y: -180,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 45,
                                y: -185,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 50,
                                y: -175,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 45,
                                y: -170,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 150,
                                y: -155,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 170,
                                y: -55,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 170,
                                y: -25,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 160,
                                y: -15,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: 160,
                                y: 10,
                            },
                            colour: "yellow",
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R2.png",
                    waves: [
                        {
                            order: 1,
                            id: "A",
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Monest",
                                            position: {
                                                x: 280,
                                                y: -240,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 270,
                                                y: -270,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 260,
                                                y: -240,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 290,
                                                y: -230,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 280,
                                                y: -205,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: 320,
                                                y: -280,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 330,
                                y: -270,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 325,
                                y: -260,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 320,
                                y: -250,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 230,
                                y: -230,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 235,
                                y: -220,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 240,
                                y: -210,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 285,
                                y: -190,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R4.png",
                    waves: [
                        {
                            order: 1,
                            id: "A",
                            optional: true,
                            spawnBox: {
                                position: {
                                    x: 250,
                                    y: -30,
                                },
                                size: {
                                    x: 110,
                                    y: 0,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 300,
                                                y: 10,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 285,
                                                y: 0,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 315,
                                                y: 10,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 335,
                                y: -20,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 340,
                                y: -10,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 260,
                                y: 20,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 265,
                                y: 10,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 255,
                                y: 15,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: 270,
                                y: -60,
                            },
                            colour: "green",
                        },
                        {
                            type: "laser",
                            position: {
                                x: 285,
                                y: -120,
                            },
                            positionOffset: {
                                x: 285,
                                y: -140,
                            },
                            colour: "green",
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 265,
                                y: -138,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R8.png",
                    objects: [
                        {
                            type: "door_switch",
                            position: {
                                x: 10,
                                y: 190,
                            },
                            colour: "darkblue",
                        },
                        {
                            type: "door",
                            position: {
                                x: 31,
                                y: 147,
                            },
                            colour: "darkblue",
                            positionOffset: {
                                x: 31,
                                y: 177,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R9.png",
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 65,
                                y: 120,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 75,
                                y: 130,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 190,
                                y: 208,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 200,
                                y: 200,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 200,
                                y: 210,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 210,
                                y: 202,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 170,
                                y: 105,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 150,
                                                y: 200,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 170,
                                                y: 210,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 200,
                                                y: 165,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 210,
                                                y: 180,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: 140,
                                                y: 140,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R10.png",
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: 340,
                                y: 280,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 290,
                                y: 310,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 280,
                                y: 305,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 270,
                                y: 300,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 310,
                                y: 220,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 320,
                                y: 230,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 270,
                                                y: 280,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                    ],
                    active: true,
                    selected: false,
                },
            ],
            route: [
                {
                    x: -1,
                    y: 3,
                },
                {
                    x: -61,
                    y: 49,
                },
                {
                    x: -99,
                    y: 65,
                },
                {
                    x: -132,
                    y: 66,
                },
                {
                    x: -158,
                    y: 80,
                },
                {
                    x: -167,
                    y: 104,
                },
                {
                    x: -179,
                    y: 172,
                },
                {
                    x: -185,
                    y: 201,
                },
                {
                    x: -206,
                    y: 205,
                },
                {
                    x: -226,
                    y: 202,
                },
                {
                    x: -233,
                    y: 172,
                },
                {
                    x: -266,
                    y: 148,
                },
                {
                    x: -302,
                    y: 123,
                },
                {
                    x: -273,
                    y: -184,
                },
                {
                    x: -244,
                    y: -220,
                },
                {
                    x: -92,
                    y: -191,
                },
                {
                    x: -55,
                    y: -170,
                },
                {
                    x: -37,
                    y: -133,
                },
                {
                    x: 69,
                    y: -40,
                },
            ],
        });
    }
});
