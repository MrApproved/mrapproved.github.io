maps.forEach((map) => {
    if (map.name === "Forest 2") {
        map.scenarios.push({
            name: "1",
            averageTime: 150,
            rooms: [
                {
                    src: "assets/maps/forest_2/R1.png",
                    order: 1,
                    start: true,
                    objects: [
                        {
                            type: "start",
                            position: {
                                x: -324,
                                y: -296,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -241,
                                y: -296,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -201,
                                y: -277,
                            },
                            colour: "blue",
                        },
                        {
                            type: "door",
                            colour: "blue",
                            position: {
                                x: -184,
                                y: -310,
                            },
                            positionOffset: {
                                x: -184,
                                y: -275,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -261,
                                y: -240,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -273,
                                y: -248,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -284,
                                y: -236,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -268,
                                y: -226,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -279,
                                y: -216,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: -259,
                                y: -322,
                            },
                            value: "1",
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            optional: true,
                            spawnBox: {
                                position: {
                                    x: -250,
                                    y: -135,
                                },
                                size: {
                                    x: 30,
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
                                                x: -239,
                                                y: -175,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -224,
                                                y: -187,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -218,
                                                y: -287,
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
                    src: "assets/maps/forest_2/R2.png",
                    order: 2,
                    objects: [
                        {
                            type: "switch",
                            position: {
                                x: -49,
                                y: -226,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -34,
                                y: -296,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -43,
                                y: -306,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -33,
                                y: -306,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -28,
                                y: -217,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -38,
                                y: -207,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -26,
                                y: -205,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -33,
                                y: -197,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -72,
                                y: -240,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: -80,
                                y: -263,
                            },
                            value: "2",
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
                                                x: -43,
                                                y: -130,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -97,
                                                y: -146,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -92,
                                                y: -188,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -50,
                                                y: -133,
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
                                                x: -80,
                                                y: -217,
                                            },
                                        },
                                        {
                                            name: "Gigobooma",
                                            position: {
                                                x: -73,
                                                y: -123,
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
                    src: "assets/maps/forest_2/R7.png",
                    order: 3,
                    objects: [
                        {
                            type: "label",
                            position: {
                                x: -17,
                                y: -23,
                            },
                            value: "3",
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 22,
                                y: -51,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -37,
                                y: 287,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            spawnBox: {
                                position: {
                                    x: -5,
                                    y: -20,
                                },
                                size: {
                                    x: 56,
                                    y: 1,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 3,
                                                y: 27,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -17,
                                                y: 21,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -11,
                                                y: 49,
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
                                                x: -18,
                                                y: 125,
                                            },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -35,
                                                y: 168,
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
                                                x: -2,
                                                y: 136,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -51,
                                                y: 166,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -58,
                                                y: 248,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -34,
                                                y: 220,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -6,
                                                y: 125,
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
                                    x: -247,
                                    y: 81,
                                },
                                size: {
                                    x: 30,
                                    y: 15,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -144,
                                                y: 271,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -96,
                                                y: 295,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -89,
                                                y: 256,
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
                    src: "assets/maps/forest_2/R11.png",
                    order: "4",
                    objects: [
                        {
                            type: "label",
                            position: {
                                x: 110,
                                y: 164,
                            },
                            value: "4",
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: 106,
                                y: 290,
                            },
                            colour: "blue",
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: 282,
                                y: 232,
                            },
                            colour: "purple",
                        },
                        {
                            type: "laser",
                            position: {
                                x: 252,
                                y: 249,
                            },
                            positionOffset: {
                                x: 275,
                                y: 249,
                            },
                            colour: "purple",
                        },
                        {
                            type: "laser",
                            position: {
                                x: 252,
                                y: 255,
                            },
                            positionOffset: {
                                x: 275,
                                y: 255,
                            },
                            colour: "blue",
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 292,
                                y: 279,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 300,
                                y: 289,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 283,
                                y: 280,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 288,
                                y: 291,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 275,
                                y: 269,
                            },
                        },
                        {
                            type: "monument",
                            position: {
                                x: 260,
                                y: 291,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 165,
                                y: 119,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            optional: true,
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 176,
                                                y: 264,
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
                                                x: 155,
                                                y: 282,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: 143,
                                                y: 220,
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
                                                x: 133,
                                                y: 234,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 147,
                                                y: 251,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: 201,
                                                y: 277,
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
                            spawnBox: {
                                position: {
                                    x: 93,
                                    y: 206,
                                },
                                size: {
                                    x: 100,
                                    y: 100,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 192,
                                                y: 254,
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
                                                x: 194,
                                                y: 261,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Gigobooma",
                                            position: {
                                                x: 144,
                                                y: 276,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Hildebear",
                                            position: {
                                                x: 152,
                                                y: 220,
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
                    src: "assets/maps/forest_2/R9.png",
                    order: 5,
                    objects: [
                        {
                            type: "warp",
                            position: {
                                x: 223,
                                y: 94,
                            },
                        },
                        {
                            type: "warp",
                            position: {
                                x: 229,
                                y: -16,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 321,
                                y: 61,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 338,
                                y: 67,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 320,
                                y: 80,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 333,
                                y: 85,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 318,
                                y: 98,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: 151,
                                y: 15,
                            },
                            value: "5",
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 223,
                                y: 95,
                            },
                            positionOffset: {
                                x: 163,
                                y: 120,
                            },
                        },
                        {
                            type: "warp_line",
                            position: {
                                x: 229,
                                y: -15,
                            },
                            positionOffset: {
                                x: 200,
                                y: -70,
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
                                            name: "Monest",
                                            position: {
                                                x: 265,
                                                y: 42,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 350,
                                                y: 116,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 340,
                                                y: 125,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 320,
                                                y: 129,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 302,
                                                y: 128,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 288,
                                                y: 126,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: 270,
                                                y: 130,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 293,
                                                y: 8,
                                            },
                                        },
                                        {
                                            name: "Gigobooma",
                                            position: {
                                                x: 260,
                                                y: 30,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 293,
                                                y: 86,
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
                                    x: 163,
                                    y: -94,
                                },
                                size: {
                                    x: 50,
                                    y: 50,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 257,
                                                y: -16,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 278,
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
                    src: "assets/maps/forest_2/R3.png",
                    finish: true,
                    order: 6,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 234,
                                y: -166,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 232,
                                y: -181,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 221,
                                y: -172,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 220,
                                y: -189,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 257,
                                y: -207,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: 273,
                                y: -123,
                            },
                            value: "6",
                        },
                        {
                            type: "boss_warp",
                            position: {
                                x: 81,
                                y: -260,
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
                                            name: "Gobooma",
                                            position: {
                                                x: 311,
                                                y: -169,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 327,
                                                y: -150,
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
                                                x: 330,
                                                y: -168,
                                            },
                                        },
                                        {
                                            name: "Hildebear",
                                            position: {
                                                x: 137,
                                                y: -277,
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
                    src: "assets/maps/forest_2/R4.png",
                    optional: true,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 190,
                                y: -186,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 191,
                                y: -178,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 195,
                                y: -172,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 181,
                                y: -170,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 188,
                                y: -158,
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
                                                x: 67,
                                                y: -160,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 115,
                                                y: -197,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 148,
                                                y: -173,
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
                    src: "assets/maps/forest_2/R5.png",
                    optional: true,
                    objects: [
                        {
                            type: "laser_switch",
                            position: {
                                x: -187,
                                y: 13,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -320,
                                y: -80,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -320,
                                y: -93,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -312,
                                y: -86,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -312,
                                y: -104,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -301,
                                y: -96,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -162,
                                y: -74,
                            },
                            colour: "fuchsia",
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -245,
                                y: -119,
                            },
                            colour: "orange",
                        },
                        {
                            type: "door",
                            position: {
                                x: -155,
                                y: -135,
                            },
                            positionOffset: {
                                x: -135,
                                y: -105,
                            },
                            colour: "fuchsia",
                        },
                        {
                            type: "door",
                            position: {
                                x: -251,
                                y: -149,
                            },
                            positionOffset: {
                                x: -221,
                                y: -149,
                            },
                            colour: "orange",
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
                                            name: "Savage Wolf",
                                            position: {
                                                x: -225,
                                                y: -106,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -183,
                                                y: -56,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -233,
                                                y: -79,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -194,
                                                y: -93,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -232,
                                                y: -73,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -223,
                                                y: -128,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -173,
                                                y: -100,
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
                    src: "assets/maps/forest_2/R6.png",
                    optional: true,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: -129,
                                y: 160,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -139,
                                y: 166,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: -142,
                                y: 3,
                            },
                            positionOffset: {
                                x: -102,
                                y: 3,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "laser",
                            position: {
                                x: -100,
                                y: 3,
                            },
                            positionOffset: {
                                x: -60,
                                y: 3,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -109,
                                y: -25,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -98,
                                y: -27,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -105,
                                y: -43,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            spawnBox: {
                                position: {
                                    x: -130,
                                    y: 75,
                                },
                                size: {
                                    x: 60,
                                    y: 1,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -86,
                                                y: 72,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -111,
                                                y: 70,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -98,
                                                y: 51,
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
                    src: "assets/maps/forest_2/R8.png",
                    optional: true,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 85,
                                y: -39,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 85,
                                y: -29,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 99,
                                y: -35,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 97,
                                y: -47,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 108,
                                y: -44,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_2/R10.png",
                    optional: true,
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: -330,
                                y: 155,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -338,
                                y: 103,
                            },
                            colour: "turquoise",
                        },
                        {
                            type: "laser",
                            position: {
                                x: -325,
                                y: 88,
                            },
                            positionOffset: {
                                x: -295,
                                y: 88,
                            },
                            colour: "turquoise",
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -312,
                                y: 68,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -324,
                                y: 61,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -300,
                                y: 61,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -311,
                                y: 54,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -324,
                                y: 49,
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
                                                x: -249,
                                                y: 252,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -347,
                                                y: 172,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: -267,
                                                y: 126,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -280,
                                                y: 207,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -225,
                                                y: 206,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -235,
                                                y: 145,
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
                    src: "assets/maps/forest_2/R12.png",
                    optional: true,
                    objects: [
                        {
                            type: "warp",
                            position: {
                                x: 199,
                                y: -74,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 172,
                                y: -78,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
            ],
            route: [
                {
                    x: -327,
                    y: -294,
                },
                {
                    x: -186,
                    y: -294,
                },
                {
                    x: -95,
                    y: -228,
                },
                {
                    x: -33,
                    y: -119,
                },
                {
                    x: 11,
                    y: -91,
                },
                {
                    x: 14,
                    y: -26,
                },
                {
                    x: -11,
                    y: 258,
                },
                {
                    x: 67,
                    y: 238,
                },
                {
                    x: 116,
                    y: 280,
                },
                {
                    x: 221,
                    y: 239,
                },
                {
                    x: 268,
                    y: 236,
                },
                {
                    x: 258,
                    y: 288,
                },
                {
                    x: 253,
                    y: 240,
                },
                {
                    x: 147,
                    y: 202,
                },
                {
                    x: 165,
                    y: 121,
                },
                {
                    x: 199,
                    y: 88,
                },
                {
                    x: 313,
                    y: -66,
                },
                {
                    x: 334,
                    y: -136,
                },
                {
                    x: 308,
                    y: -166,
                },
                {
                    x: 176,
                    y: -240,
                },
                {
                    x: 95,
                    y: -246,
                },
            ],
        });
    }
});
