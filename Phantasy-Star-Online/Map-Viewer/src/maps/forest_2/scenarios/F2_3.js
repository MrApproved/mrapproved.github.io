maps.forEach((map) => {
    if (map.name === "Forest 2") {
        map.scenarios.push({
            name: "3",
            averageTime: 165,
            selected: true,
            rooms: [
                {
                    src: "assets/maps/forest_2/R6.png",
                    active: true,
                    selected: false,
                    order: 1,
                    objects: [
                        {
                            type: "label",
                            value: "1",
                            position: {
                                x: -63,
                                y: -38,
                            },
                        },
                        {
                            type: "start",
                            position: {
                                x: -97,
                                y: -16,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -93,
                                y: 106,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -133,
                                y: 174,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -143,
                                y: 168,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -147,
                                y: 184,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -155,
                                y: 174,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -161,
                                y: 192,
                            },
                        },
                    ],
                    start: true,
                },
                {
                    src: "assets/maps/forest_2/R7.png",
                    active: true,
                    selected: false,
                    order: 2,
                    objects: [
                        {
                            type: "label",
                            value: "2",
                            position: {
                                x: 36,
                                y: 47,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -17,
                                y: 276,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -15,
                                                y: 131,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -17,
                                                y: 167,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 1,
                                                y: 111,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -23,
                                                y: 91,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            order: 2,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -37,
                                                y: 207,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -55,
                                                y: 214,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            order: 3,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 5,
                                                y: 26,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -11,
                                                y: 8,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 8,
                                                y: -3,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -40,
                                        y: 40,
                                    },
                                    positionOffset: {
                                        x: 32,
                                        y: 40,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R8.png",
                    active: true,
                    selected: false,
                    order: 3,
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: 82,
                                y: -23,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 79,
                                y: -49,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 79,
                                y: -62,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 91,
                                y: -54,
                            },
                        },
                        {
                            type: "monument",
                            position: {
                                x: 102,
                                y: -31,
                            },
                        },
                        {
                            type: "label",
                            value: "3",
                            position: {
                                x: 55,
                                y: -56,
                            },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R2.png",
                    active: true,
                    selected: false,
                    order: 4,
                    objects: [
                        {
                            type: "label",
                            value: "4",
                            position: {
                                x: -1,
                                y: -195,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -130,
                                y: -157,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -127,
                                y: -167,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -121,
                                y: -175,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -77,
                                y: -241,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -20,
                                y: -221,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -15,
                                y: -233,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "red",
                            position: {
                                x: -46,
                                y: -233,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -30,
                                y: -282,
                            },
                            colour: "red",
                            lineWidth: 26,
                            positionOffset: {
                                x: -30,
                                y: -252,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -38,
                                y: -297,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -47,
                                y: -307,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -36,
                                y: -309,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -71,
                                                y: -179,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -84,
                                                y: -132,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -96,
                                                y: -142,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -54,
                                                y: -189,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            order: 2,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -114,
                                                y: -134,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -62,
                                                y: -132,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -93,
                                                y: -159,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -50,
                                        y: -100,
                                    },
                                    positionOffset: {
                                        x: -10,
                                        y: -200,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R1.png",
                    active: true,
                    selected: false,
                    order: 5,
                    objects: [
                        {
                            type: "label",
                            value: "5",
                            position: {
                                x: -249,
                                y: -316,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -265,
                                y: -305,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -310,
                                y: -315,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -321,
                                y: -312,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -321,
                                y: -300,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -332,
                                y: -306,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -332,
                                y: -293,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -238,
                                                y: -288,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -213,
                                                y: -268,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            order: 2,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -229,
                                                y: -170,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -266,
                                                y: -194,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -211,
                                                y: -286,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -240,
                                        y: -200,
                                    },
                                    positionOffset: {
                                        x: -200,
                                        y: -200,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R5.png",
                    active: true,
                    selected: false,
                    order: 6,
                    objects: [
                        {
                            type: "label",
                            value: "6",
                            position: {
                                x: -332,
                                y: -112,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "blueviolet",
                            position: {
                                x: -160,
                                y: -94,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -156,
                                y: -136,
                            },
                            colour: "blueviolet",
                            positionOffset: {
                                x: -133,
                                y: -104,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -319,
                                y: -92,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -307,
                                y: -89,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -309,
                                y: -106,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -197,
                                                y: -38,
                                            },
                                        },
                                        {
                                            name: "Gigobooma",
                                            position: {
                                                x: -236,
                                                y: -118,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -216,
                                                y: -110,
                                            },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -200,
                                                y: -100,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R3.png",
                    active: true,
                    selected: true,
                    order: 9,
                    finish: true,
                    objects: [
                        {
                            type: "label",
                            value: "9",
                            position: {
                                x: 287,
                                y: -122,
                            },
                        },
                        {
                            type: "boss_warp",
                            position: {
                                x: 85,
                                y: -263,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 265,
                                y: -205,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 253,
                                y: -275,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 239,
                                y: -283,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 239,
                                y: -269,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 327,
                                                y: -155,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 309,
                                                y: -165,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: 335,
                                                y: -169,
                                            },
                                        },
                                        {
                                            name: "Hildebear",
                                            position: {
                                                x: 145,
                                                y: -257,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R4.png",
                    active: true,
                    selected: false,
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 71,
                                                y: -161,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 124,
                                                y: -190,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 155,
                                                y: -165,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 85,
                                y: -214,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 87,
                                y: -202,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 95,
                                y: -211,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 98,
                                y: -200,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 193,
                                y: -160,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 199,
                                y: -171,
                            },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R9.png",
                    active: true,
                    selected: false,
                    objects: [
                        {
                            type: "label",
                            value: "8",
                            position: {
                                x: 145,
                                y: 34,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 224,
                                y: 95,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 223,
                                y: -11,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 323,
                                y: 80,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 337,
                                y: 82,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 319,
                                y: 91,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 329,
                                y: 92,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 317,
                                y: 102,
                            },
                        },
                        {
                            type: "laser_switch",
                            colour: "red",
                            position: {
                                x: 179,
                                y: 98,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 223,
                                y: 96,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: -313,
                                y: 80,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 222,
                                y: -11,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 180,
                                y: -50,
                            },
                        },
                    ],
                    order: 8,
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Monest",
                                            position: {
                                                x: 257,
                                                y: 44,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 224,
                                                y: 132,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 235,
                                                y: 135,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 246,
                                                y: 138,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 258,
                                                y: 137,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 309,
                                                y: 57,
                                            },
                                        },
                                        {
                                            name: "Gigobooma",
                                            position: {
                                                x: 211,
                                                y: 33,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: 215,
                                                y: 21,
                                            },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: 311,
                                                y: 80,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R10.png",
                    active: true,
                    selected: false,
                    order: 7,
                    objects: [
                        {
                            type: "label",
                            value: "7",
                            position: {
                                x: -363,
                                y: 140,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -315,
                                y: 224,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -301,
                                y: 232,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -286,
                                y: 240,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -220,
                                y: 222,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "yellow",
                            position: {
                                x: -202,
                                y: 264,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -178,
                                y: 258,
                            },
                            colour: "yellow",
                            positionOffset: {
                                x: -178,
                                y: 290,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -344,
                                y: 90,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -345,
                                y: 102,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -333,
                                y: 94,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: -311,
                                y: 54,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: -312,
                                y: 56,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 190,
                                y: 88,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -269,
                                                y: 170,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -322,
                                                y: 188,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -267,
                                                y: 220,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -280,
                                                y: 155,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 4,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -246,
                                                y: 222,
                                            },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -266,
                                                y: 158,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            order: 2,
                            active: true,
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Hildebear",
                                            position: {
                                                x: -261,
                                                y: 154,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -267,
                                                y: 178,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -282,
                                                y: 185,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gigobooma",
                                            position: {
                                                x: -226,
                                                y: 119,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 4,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Hildebear",
                                            position: {
                                                x: -308,
                                                y: 174,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R11.png",
                    active: true,
                    selected: false,
                    objects: [
                        {
                            type: "laser",
                            position: {
                                x: 132,
                                y: 150,
                            },
                            colour: "red",
                            positionOffset: {
                                x: 168,
                                y: 168,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 157,
                                y: 110,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 167,
                                y: 116,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 158,
                                y: 122,
                            },
                        },
                        {
                            type: "laser_switch",
                            colour: "skyblue",
                            position: {
                                x: 101,
                                y: 291,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: 284,
                                y: 239,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: 250,
                                y: 249,
                            },
                            colour: "purple",
                            positionOffset: {
                                x: 280,
                                y: 249,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: 249,
                                y: 259,
                            },
                            colour: "skyblue",
                            positionOffset: {
                                x: 280,
                                y: 259,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 275,
                                y: 275,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 287,
                                y: 275,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 265,
                                y: 288,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 277,
                                y: 288,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 293,
                                y: 290,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 276,
                                y: 301,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 285,
                                y: 302,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            active: true,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 103,
                                                y: 270,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 116,
                                                y: 278,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 114,
                                                y: 292,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: 125,
                                                y: 286,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: 95,
                                                y: 239,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnBox: {
                                position: {
                                    x: 90,
                                    y: 260,
                                },
                                size: {
                                    x: 44,
                                    y: 44,
                                },
                            },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R12.png",
                    active: true,
                    selected: false,
                    objects: [
                        {
                            type: "special_item_box",
                            position: {
                                x: 184,
                                y: -79,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 202,
                                y: -64,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 201,
                                y: -63,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 201,
                                y: 10,
                            },
                        },
                    ],
                },
            ],
        });
    }
});
