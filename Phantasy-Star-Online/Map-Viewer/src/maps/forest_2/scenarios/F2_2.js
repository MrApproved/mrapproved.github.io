maps.forEach((map) => {
    if (map.name === "Forest 2") {
        map.scenarios.push({
            name: "2",
            averageTime: 170,
            rooms: [
                {
                    src: "assets/maps/forest_2/R5.png",
                    active: true,
                    selected: false,
                    order: 1,
                    start: true,
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: -301,
                                y: -20,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: -220,
                                y: 16,
                            },
                            colour: "aqua",
                            positionOffset: {
                                x: -220,
                                y: 48,
                            },
                        },
                        {
                            type: "start",
                            position: {
                                x: -304,
                                y: -100,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -251,
                                y: -149,
                            },
                            colour: "orange",
                            positionOffset: {
                                x: -219,
                                y: -149,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "orange",
                            position: {
                                x: -248,
                                y: -130,
                            },
                        },
                        {
                            type: "laser_switch",
                            colour: "aqua",
                            position: {
                                x: -146,
                                y: -62,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -194,
                                y: -5,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -181,
                                y: -7,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -194,
                                y: 6,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -181,
                                y: 5,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -187,
                                y: 16,
                            },
                        },
                        {
                            type: "label",
                            value: "1",
                            position: {
                                x: -367,
                                y: -58,
                            },
                        },
                    ],
                    waves: [
                        {
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -205,
                                                y: -67,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -171,
                                                y: -80,
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
                                                x: -229,
                                                y: -15,
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
                                                x: -195,
                                                y: -99,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            order: 1,
                            optional: true,
                            active: true,
                            spawnLines: [
                                {
                                    position: {
                                        x: -340,
                                        y: -25,
                                    },
                                    positionOffset: {
                                        x: -270,
                                        y: -25,
                                    },
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
                                                x: -214,
                                                y: -112,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -227,
                                                y: -87,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -260,
                                        y: -10,
                                    },
                                    positionOffset: {
                                        x: -210,
                                        y: 0,
                                    },
                                },
                            ],
                        },
                        {
                            order: 3,
                            active: true,
                            optional: false,
                            encounters: [],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R1.png",
                    active: true,
                    selected: false,
                    order: 2,
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
                                                x: -272,
                                                y: -205,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -221,
                                                y: -192,
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
                                            name: "Gigobooma",
                                            position: {
                                                x: -230,
                                                y: -288,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -219,
                                                y: -226,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -240,
                                        y: -250,
                                    },
                                    positionOffset: {
                                        x: -190,
                                        y: -250,
                                    },
                                },
                            ],
                        },
                    ],
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: -337,
                                y: -284,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -335,
                                y: -299,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -322,
                                y: -308,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -323,
                                y: -295,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -306,
                                y: -314,
                            },
                        },
                        {
                            type: "label",
                            value: "2",
                            position: {
                                x: -310,
                                y: -200,
                            },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R2.png",
                    active: true,
                    selected: false,
                    order: 3,
                    objects: [
                        {
                            type: "label",
                            value: "3",
                            position: {
                                x: -140,
                                y: -198,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -133,
                                y: -156,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -124,
                                y: -167,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -116,
                                y: -179,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -16,
                                y: -229,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -21,
                                y: -218,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -76,
                                y: -240,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "red",
                            position: {
                                x: -56,
                                y: -237,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -30,
                                y: -285,
                            },
                            colour: "red",
                            positionOffset: {
                                x: -30,
                                y: -253,
                            },
                            lineWidth: 30,
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -38,
                                y: -299,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -46,
                                y: -311,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -34,
                                y: -310,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "magenta",
                            position: {
                                x: -118,
                                y: -123,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -154,
                                y: -133,
                            },
                            colour: "magenta",
                            positionOffset: {
                                x: -132,
                                y: -101,
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
                                                x: -68,
                                                y: -195,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -66,
                                                y: -161,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -110,
                                                y: -145,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    active: true,
                                    enemies: [],
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
                                            name: "Savage Wolf",
                                            position: {
                                                x: -82,
                                                y: -157,
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
                                                x: -80,
                                                y: -131,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R7.png",
                    active: true,
                    selected: false,
                    order: 4,
                    objects: [
                        {
                            type: "label",
                            value: "4",
                            position: {
                                x: -28,
                                y: -28,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -23,
                                y: 273,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -72,
                                y: 293,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -80,
                                y: 296,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -94,
                                y: 301,
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
                                            name: "Booma",
                                            position: {
                                                x: 6,
                                                y: 24,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -16,
                                                y: 39,
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
                                                x: -38,
                                                y: 192,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -16,
                                                y: 132,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -16,
                                                y: 212,
                                            },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -55,
                                                y: 246,
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
                                                x: -50,
                                                y: 240,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -32,
                                        y: 15,
                                    },
                                    positionOffset: {
                                        x: 32,
                                        y: 15,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R6.png",
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
                                                x: -95,
                                                y: 84,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -124,
                                                y: 70,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -104,
                                                y: 38,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: -170,
                                        y: 70,
                                    },
                                    positionOffset: {
                                        x: -60,
                                        y: 70,
                                    },
                                },
                            ],
                        },
                    ],
                    objects: [
                        {
                            type: "monument",
                            position: {
                                x: -98,
                                y: -19,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -75,
                                y: 9,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -132,
                                y: 169,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -142,
                                y: 159,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -146,
                                y: 173,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -155,
                                y: 162,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -157,
                                y: 180,
                            },
                        },
                        {
                            type: "label",
                            value: "5",
                            position: {
                                x: -188,
                                y: 78,
                            },
                        },
                    ],
                    order: 5,
                },
                {
                    src: "assets/maps/forest_2/R11.png",
                    active: true,
                    selected: false,
                    order: 6,
                    objects: [
                        {
                            type: "label",
                            value: "6",
                            position: {
                                x: 78,
                                y: 193,
                            },
                        },
                        {
                            type: "laser_switch",
                            colour: "turquoise",
                            position: {
                                x: 100,
                                y: 289,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: 282,
                                y: 239,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: 247,
                                y: 253,
                            },
                            colour: "purple",
                            positionOffset: {
                                x: 277,
                                y: 253,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: 247,
                                y: 263,
                            },
                            colour: "turquoise",
                            positionOffset: {
                                x: 277,
                                y: 263,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 292,
                                y: 285,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 295,
                                y: 297,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 282,
                                y: 287,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 283,
                                y: 295,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 257,
                                y: 279,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 259,
                                y: 290,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 117,
                                y: 187,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 165,
                                y: 121,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 164,
                                y: 121,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 174,
                                y: 80,
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
                                                x: 186,
                                                y: 270,
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
                                                x: 160,
                                                y: 287,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: 141,
                                                y: 223,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 166,
                                                y: 276,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 141,
                                                y: 253,
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
                                                x: 200,
                                                y: 275,
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
                                                x: 197,
                                                y: 263,
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
                                                x: 210,
                                                y: 270,
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
                                                x: 164,
                                                y: 281,
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
                                                x: 154,
                                                y: 218,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R9.png",
                    active: true,
                    selected: false,
                    order: 7,
                    objects: [
                        {
                            type: "label",
                            value: "7",
                            position: {
                                x: 134,
                                y: 37,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 317,
                                y: 92,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 323,
                                y: 79,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 330,
                                y: 62,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 340,
                                y: 67,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 335,
                                y: 77,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 214,
                                y: 93,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 236,
                                y: -19,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 213,
                                y: 97,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 148,
                                y: 165,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 235,
                                y: -18,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 180,
                                y: -56,
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
                                            name: "Monest",
                                            position: {
                                                x: 259,
                                                y: 43,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 239,
                                                y: 134,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 253,
                                                y: 136,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 267,
                                                y: 137,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 279,
                                                y: 137,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 290,
                                                y: 139,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 301,
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
                                            name: "Gigobooma",
                                            position: {
                                                x: 294,
                                                y: 33,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 300,
                                                y: 89,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 235,
                                                y: 83,
                                            },
                                        },
                                    ],
                                },
                            ],
                            spawnLines: [
                                {
                                    position: {
                                        x: 160,
                                        y: 30,
                                    },
                                    positionOffset: {
                                        x: 300,
                                        y: -50,
                                    },
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
                                            name: "Gobooma",
                                            position: {
                                                x: 285,
                                                y: -32,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 292,
                                                y: -14,
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
                    finish: true,
                    order: 8,
                    objects: [
                        {
                            type: "label",
                            value: "8",
                            position: {
                                x: 322,
                                y: -240,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 264,
                                y: -282,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 251,
                                y: -282,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 257,
                                y: -270,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 245,
                                y: -270,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 133,
                                y: -302,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 119,
                                y: -294,
                            },
                        },
                        {
                            type: "boss_warp",
                            position: {
                                x: 85,
                                y: -266,
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
                                                x: 330,
                                                y: -152,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 311,
                                                y: -164,
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
                                                y: -156,
                                            },
                                        },
                                        {
                                            name: "Hildebear",
                                            position: {
                                                x: 139,
                                                y: -259,
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
                            optional: false,
                            encounters: [
                                {
                                    order: 1,
                                    active: true,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 68,
                                                y: -158,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 124,
                                                y: -200,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 160,
                                                y: -169,
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
                                x: 84,
                                y: -214,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 84,
                                y: -201,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 95,
                                y: -214,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 94,
                                y: -202,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 194,
                                y: -174,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 190,
                                y: -163,
                            },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R8.png",
                    active: true,
                    selected: false,
                    objects: [
                        {
                            type: "special_item_box",
                            position: {
                                x: 80,
                                y: -47,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 93,
                                y: -45,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 86,
                                y: -60,
                            },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R10.png",
                    active: true,
                    selected: false,
                    objects: [
                        {
                            type: "laser_switch",
                            colour: "limegreen",
                            position: {
                                x: -337,
                                y: 101,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: -325,
                                y: 90,
                            },
                            colour: "limegreen",
                            positionOffset: {
                                x: -295,
                                y: 90,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -322,
                                y: 67,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -310,
                                y: 69,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -328,
                                y: 52,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -318,
                                y: 55,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -305,
                                y: 58,
                            },
                        },
                        {
                            type: "door_switch",
                            colour: "skyblue",
                            position: {
                                x: -220,
                                y: 100,
                            },
                        },
                        {
                            type: "door",
                            position: {
                                x: -246,
                                y: 91,
                            },
                            colour: "skyblue",
                            positionOffset: {
                                x: -216,
                                y: 82,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -221,
                                y: 221,
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
                                            name: "Rag Rappy",
                                            position: {
                                                x: -246,
                                                y: 253,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -280,
                                                y: 136,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -340,
                                                y: 168,
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
                                                x: -240,
                                                y: 157,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -292,
                                                y: 201,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -230,
                                                y: 196,
                                            },
                                        },
                                    ],
                                },
                            ],
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
                                x: 183,
                                y: -82,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 205,
                                y: -70,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 203,
                                y: -68,
                            },
                            colour: "springgreen",
                            positionOffset: {
                                x: 208,
                                y: 0,
                            },
                        },
                    ],
                },
            ],
        });
    }
});
