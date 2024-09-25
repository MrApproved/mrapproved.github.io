maps.forEach((map) => {
    if (map.name === "Forest 1") {
        map.scenarios.push({
            name: "2",
            averageTime: 150,
            rooms: [
                {
                    src: "assets/maps/forest_1/R4.png",
                    required: true,
                    order: 1,
                    start: true,
                    objects: [
                        {
                            type: "start",
                            position: {
                                x: 305,
                                y: 19,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: 332,
                                y: -95,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "laser",
                            position: {
                                x: 285,
                                y: -147,
                            },
                            positionOffset: {
                                x: 285,
                                y: -117,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 262,
                                y: -138,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 277,
                                y: 14,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 269,
                                y: 6,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 262,
                                y: -2,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 269,
                                y: -70,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: 323,
                                y: -156,
                            },
                            colour: "lightgrey",
                        },
                        {
                            type: "label",
                            position: {
                                x: 359,
                                y: -92,
                            },
                            value: "1",
                        },
                        {
                            type: "door",
                            position: {
                                x: 287,
                                y: -167,
                            },
                            colour: "lightgrey",
                            positionOffset: {
                                x: 317,
                                y: -177,
                            },
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R2.png",
                    order: 2,
                    required: true,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 258,
                                y: -203,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 245,
                                y: -209,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 233,
                                y: -216,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 275,
                                y: -310,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 261,
                                y: -307,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 247,
                                y: -307,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 120,
                                y: -263,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: 185,
                                y: -312,
                            },
                            value: "2",
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
                                                x: 233,
                                                y: -272,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 266,
                                                y: -267,
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
                                                x: 283,
                                                y: -238,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 277,
                                                y: -269,
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
                                                x: 211,
                                                y: -278,
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
                    src: "assets/maps/forest_1/R3.png",
                    order: 3,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 179,
                                y: -27,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 174,
                                y: -19,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 169,
                                y: -5,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 78,
                                y: -7,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 72,
                                y: -20,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 65,
                                y: -32,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 130,
                                y: 14,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: 154,
                                y: -117,
                            },
                            value: "3",
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
                                                x: 123,
                                                y: -138,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 82,
                                                y: -114,
                                            },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: {
                                                x: 41,
                                                y: -65,
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
                                                x: 131,
                                                y: -6,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: 155,
                                                y: 4,
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
                    src: "assets/maps/forest_1/R9.png",
                    order: 4,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 205,
                                y: 213,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 202,
                                y: 197,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 191,
                                y: 205,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 214,
                                y: 204,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: 134,
                                y: 229,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 76,
                                y: 226,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 68,
                                y: 214,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: 245,
                                y: 146,
                            },
                            value: "4",
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
                                                x: 125,
                                                y: 153,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: 159,
                                                y: 143,
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
                                                x: 166,
                                                y: 125,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 96,
                                                y: 159,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 166,
                                                y: 185,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 88,
                                                y: 174,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 172,
                                                y: 166,
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
                    src: "assets/maps/forest_1/R8.png",
                    order: 5,
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: -36,
                                y: 248,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: 5,
                                y: 245,
                            },
                            value: "5",
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R6.png",
                    order: 6,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: -12,
                                y: 100,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -2,
                                y: 88,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 14,
                                y: -2,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 6,
                                y: -8,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -3,
                                y: -13,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: -59,
                                y: -18,
                            },
                            value: "6",
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
                                                x: -25,
                                                y: 84,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -52,
                                                y: 66,
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
                                                x: -25,
                                                y: 50,
                                            },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -47,
                                                y: 41,
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
                                                x: -73,
                                                y: 87,
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
                    src: "assets/maps/forest_1/R7.png",
                    order: 7,
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: -141,
                                y: 54,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -199,
                                y: 220,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -227,
                                y: 293,
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
                                y: 282,
                            },
                            colour: "red",
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
                                x: -260,
                                y: 253,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -260,
                                y: 266,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -270,
                                y: 266,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: -215,
                                y: 158,
                            },
                            value: "7",
                        },
                    ],
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_1/R5.png",
                    order: 8,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: -315,
                                y: -141,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -319,
                                y: -130,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -213,
                                y: -92,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: -210,
                                y: -79,
                            },
                        },
                        {
                            type: "laser",
                            position: {
                                x: -227,
                                y: -98,
                            },
                            positionOffset: {
                                x: -227,
                                y: -68,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -332,
                                y: -56,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "label",
                            position: {
                                x: -365,
                                y: -36,
                            },
                            value: "8",
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
                                            name: "Monest",
                                            position: {
                                                x: -303,
                                                y: 4,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: -369,
                                                y: -9,
                                            },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: {
                                                x: -366,
                                                y: 16,
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
                                                x: -275,
                                                y: -99,
                                            },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: {
                                                x: -259,
                                                y: -66,
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
                                                x: -255,
                                                y: -14,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: -256,
                                                y: -46,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: {
                                                x: -276,
                                                y: -74,
                                            },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -284,
                                                y: -104,
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
                    src: "assets/maps/forest_1/R1.png",
                    order: 9,
                    finish: true,
                    objects: [
                        {
                            type: "capsule",
                            position: {
                                x: -248,
                                y: -241,
                            },
                        },
                        {
                            type: "laser_switch",
                            position: {
                                x: -333,
                                y: -276,
                            },
                            colour: "violet",
                        },
                        {
                            type: "laser",
                            position: {
                                x: -313,
                                y: -285,
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
                                x: -309,
                                y: -306,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -309,
                                y: -323,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -289,
                                y: -325,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -289,
                                y: -306,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -199,
                                y: -299,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -189,
                                y: -301,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -116,
                                y: -288,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: -115,
                                y: -275,
                            },
                        },
                        {
                            type: "door_switch",
                            position: {
                                x: -113,
                                y: -222,
                            },
                            colour: "aqua",
                        },
                        {
                            type: "finish",
                            position: {
                                x: -168,
                                y: -186,
                            },
                        },
                        {
                            type: "capsule",
                            position: {
                                x: -127,
                                y: -194,
                            },
                        },
                        {
                            type: "label",
                            position: {
                                x: -85,
                                y: -272,
                            },
                            value: "9",
                        },
                        {
                            type: "door",
                            position: {
                                x: -97,
                                y: -177,
                            },
                            colour: "aqua",
                            positionOffset: {
                                x: -77,
                                y: -200,
                            },
                        },
                    ],
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
                                                x: -204,
                                                y: -252,
                                            },
                                        },
                                    ],
                                    active: true,
                                },
                            ],
                            active: true,
                        },
                        {
                            order: 1,
                            id: "B",
                            optional: true,
                            spawnBox: {
                                position: {
                                    x: -190,
                                    y: -210,
                                },
                                size: {
                                    x: 45,
                                    y: 45,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -151,
                                                y: -220,
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
                    selected: true,
                },
                {
                    src: "assets/maps/forest_1/R10.png",
                    optional: true,
                    objects: [
                        {
                            type: "item_box",
                            position: {
                                x: 327,
                                y: 301,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 332,
                                y: 282,
                            },
                        },
                        {
                            type: "item_box",
                            position: {
                                x: 334,
                                y: 268,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 314,
                                y: 215,
                            },
                        },
                        {
                            type: "special_item_box",
                            position: {
                                x: 327,
                                y: 226,
                            },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            id: "A",
                            spawnBox: {
                                position: {
                                    x: 270,
                                    y: 300,
                                },
                                size: {
                                    x: 30,
                                    y: 30,
                                },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 252,
                                                y: 297,
                                            },
                                        },
                                        {
                                            name: "Booma",
                                            position: {
                                                x: 239,
                                                y: 287,
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
                    x: 303,
                    y: 17,
                },
                {
                    x: 311,
                    y: -150,
                },
                {
                    x: 287,
                    y: -204,
                },
                {
                    x: 221,
                    y: -271,
                },
                {
                    x: 178,
                    y: -282,
                },
                {
                    x: 143,
                    y: -276,
                },
                {
                    x: 130,
                    y: -251,
                },
                {
                    x: 129,
                    y: -207,
                },
                {
                    x: 120,
                    y: -128,
                },
                {
                    x: 140,
                    y: 18,
                },
                {
                    x: 141,
                    y: 82,
                },
                {
                    x: 53,
                    y: 158,
                },
                {
                    x: 11,
                    y: 170,
                },
                {
                    x: -23,
                    y: 233,
                },
                {
                    x: -49,
                    y: 230,
                },
                {
                    x: -75,
                    y: 158,
                },
                {
                    x: -71,
                    y: 108,
                },
                {
                    x: -89,
                    y: 62,
                },
                {
                    x: -123,
                    y: 62,
                },
                {
                    x: -155,
                    y: 78,
                },
                {
                    x: -176,
                    y: 140,
                },
                {
                    x: -182,
                    y: 206,
                },
                {
                    x: -222,
                    y: 204,
                },
                {
                    x: -241,
                    y: 160,
                },
                {
                    x: -302,
                    y: 128,
                },
                {
                    x: -273,
                    y: -190,
                },
                {
                    x: -240,
                    y: -224,
                },
                {
                    x: -213,
                    y: -217,
                },
                {
                    x: -170,
                    y: -185,
                },
            ],
        });
    }
});
