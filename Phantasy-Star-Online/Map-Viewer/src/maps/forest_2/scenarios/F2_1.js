maps.forEach((map) => {
    if (map.name === "Forest 2") {
        map.scenarios.push({
            name: "1",
            averageTime: 114,
            rooms: [
                {
                    src: "assets/maps/forest_2/R1.png",
                    order: 1,
                    start: true,
                    objects: [
                        { type: "start", position: { x: -324, y: -296 } },
                        { type: "capsule", position: { x: -241, y: -296 } },
                        {
                            type: "door_switch",
                            position: { x: -201, y: -277 },
                            colour: "blue",
                        },
                        {
                            type: "door",
                            colour: "blue",
                            position: { x: -184, y: -310 },
                            positionOffset: { x: -184, y: -275 },
                        },
                        { type: "item_box", position: { x: -261, y: -240 } },
                        { type: "item_box", position: { x: -273, y: -248 } },
                        { type: "item_box", position: { x: -284, y: -236 } },
                        { type: "item_box", position: { x: -268, y: -226 } },
                        { type: "item_box", position: { x: -279, y: -216 } },
                        {
                            type: "label",
                            position: { x: -259, y: -322 },
                            value: "1",
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            optional: "true",
                            spawnBox: {
                                position: { x: -250, y: -135 },
                                size: { x: 30, y: 35 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -239, y: -175 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -224, y: -187 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -218, y: -287 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R2.png",
                    order: 2,
                    objects: [
                        { type: "switch", position: { x: -49, y: -226 } },
                        {
                            type: "special_item_box",
                            position: { x: -34, y: -296 },
                        },
                        {
                            type: "special_item_box",
                            position: { x: -43, y: -306 },
                        },
                        {
                            type: "special_item_box",
                            position: { x: -33, y: -306 },
                        },
                        { type: "item_box", position: { x: -28, y: -217 } },
                        { type: "item_box", position: { x: -38, y: -207 } },
                        { type: "item_box", position: { x: -26, y: -205 } },
                        { type: "item_box", position: { x: -33, y: -197 } },
                        { type: "capsule", position: { x: -72, y: -240 } },
                        {
                            type: "label",
                            position: { x: -80, y: -263 },
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
                                            position: { x: -43, y: -130 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: -97, y: -146 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: { x: -92, y: -188 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -50, y: -133 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: { x: -80, y: -217 },
                                        },
                                        {
                                            name: "Gigobooma",
                                            position: { x: -73, y: -123 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R3.png",
                },
                {
                    src: "assets/maps/forest_2/R4.png",
                    optional: "true",
                    objects: [
                        { type: "item_box", position: { x: 190, y: -186 } },
                        { type: "item_box", position: { x: 191, y: -178 } },
                        { type: "item_box", position: { x: 195, y: -172 } },
                        { type: "item_box", position: { x: 181, y: -170 } },
                        { type: "item_box", position: { x: 188, y: -158 } },
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
                                            position: { x: 67, y: -160 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: 115, y: -197 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: 148, y: -173 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R5.png",
                    optional: "true",
                    objects: [
                        {
                            type: "laser_switch",
                            position: { x: -187, y: 13 },
                            colour: "aqua",
                        },
                        { type: "item_box", position: { x: -320, y: -80 } },
                        { type: "item_box", position: { x: -320, y: -93 } },
                        { type: "item_box", position: { x: -312, y: -86 } },
                        { type: "item_box", position: { x: -312, y: -104 } },
                        { type: "item_box", position: { x: -301, y: -96 } },
                        {
                            type: "door_switch",
                            position: { x: -162, y: -74 },
                            colour: "fuchsia",
                        },
                        {
                            type: "door_switch",
                            position: { x: -245, y: -119 },
                            colour: "orange",
                        },
                        {
                            type: "door",
                            position: { x: -155, y: -135 },
                            positionOffset: { x: -135, y: -105 },
                            colour: "fuchsia",
                        },
                        {
                            type: "door",
                            position: { x: -251, y: -149 },
                            positionOffset: { x: -221, y: -149 },
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
                                            position: { x: -225, y: -106 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -183, y: -56 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: { x: -233, y: -79 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -194, y: -93 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -232, y: -73 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -223, y: -128 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -173, y: -100 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R6.png",
                    optional: true,
                    objects: [
                        { type: "item_box", position: { x: -129, y: 160 } },
                        { type: "item_box", position: { x: -139, y: 166 } },
                        {
                            type: "laser",
                            position: { x: -142, y: 3 },
                            positionOffset: { x: -102, y: 3 },
                            colour: "aqua",
                        },
                        {
                            type: "laser",
                            position: { x: -100, y: 3 },
                            positionOffset: { x: -60, y: 3 },
                            colour: "aqua",
                        },
                        {
                            type: "special_item_box",
                            position: { x: -109, y: -25 },
                        },
                        {
                            type: "special_item_box",
                            position: { x: -98, y: -27 },
                        },
                        {
                            type: "special_item_box",
                            position: { x: -105, y: -43 },
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            spawnBox: {
                                position: { x: -130, y: 75 },
                                size: { x: 60, y: 1 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -86, y: 72 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: -111, y: 70 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: -98, y: 51 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R7.png",
                    order: 3,
                    objects: [
                        {
                            type: "label",
                            position: { x: -17, y: -23 },
                            value: "3",
                        },
                        { type: "capsule", position: { x: 22, y: -51 } },
                        { type: "capsule", position: { x: -37, y: 287 } },
                    ],
                    waves: [
                        {
                            order: 1,
                            spawnBox: {
                                position: { x: -5, y: -20 },
                                size: { x: 56, y: 1 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 3, y: 27 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: -17, y: 21 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -11, y: 49 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -18, y: 125 },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: { x: -35, y: 168 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -2, y: 136 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -51, y: 166 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -58, y: 248 },
                                        },
                                    ],
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -34, y: 220 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -6, y: 125 },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            order: 2,
                            optional: "true",
                            spawnBox: {
                                position: { x: -247, y: 81 },
                                size: { x: 30, y: 15 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Rag Rappy",
                                            position: { x: -144, y: 271 },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: { x: -96, y: 295 },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: { x: -89, y: 256 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R8.png",
                    optional: "true",
                    objects: [
                        { type: "item_box", position: { x: 85, y: -39 } },
                        { type: "item_box", position: { x: 85, y: -29 } },
                        { type: "item_box", position: { x: 99, y: -35 } },
                        { type: "item_box", position: { x: 97, y: -47 } },
                        { type: "item_box", position: { x: 108, y: -44 } },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R9.png",
                },
                {
                    src: "assets/maps/forest_2/R10.png",
                    optional: "true",
                    objects: [
                        { type: "capsule", position: { x: -330, y: 155 } },
                        {
                            type: "laser_switch",
                            position: { x: -338, y: 103 },
                            colour: "turquoise",
                        },
                        {
                            type: "laser",
                            position: { x: -325, y: 88 },
                            positionOffset: { x: -295, y: 88 },
                            colour: "turquoise",
                        },
                        { type: "item_box", position: { x: -312, y: 68 } },
                        { type: "item_box", position: { x: -324, y: 61 } },
                        { type: "item_box", position: { x: -300, y: 61 } },
                        { type: "item_box", position: { x: -311, y: 54 } },
                        { type: "item_box", position: { x: -324, y: 49 } },
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
                                            position: { x: -249, y: 252 },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: { x: -347, y: 172 },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: { x: -267, y: 126 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: { x: -280, y: 207 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -225, y: 206 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: -235, y: 145 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_2/R11.png",
                    order: "4",
                    objects: [
                        {
                            type: "label",
                            position: { x: 86, y: 164 },
                            value: "4",
                        },
                        {
                            type: "laser_switch",
                            position: { x: 106, y: 290 },
                            colour: "blue",
                        },
                        {
                            type: "laser_switch",
                            position: { x: 282, y: 232 },
                            colour: "purple",
                        },
                        {
                            type: "laser",
                            position: { x: 252, y: 249 },
                            positionOffset: { x: 275, y: 249 },
                            colour: "purple",
                        },
                        {
                            type: "laser",
                            position: { x: 252, y: 255 },
                            positionOffset: { x: 275, y: 255 },
                            colour: "blue",
                        },
                        { type: "item_box", position: { x: 292, y: 279 } },
                        { type: "item_box", position: { x: 300, y: 289 } },
                        { type: "item_box", position: { x: 283, y: 280 } },
                        { type: "item_box", position: { x: 288, y: 291 } },
                        { type: "capsule", position: { x: 275, y: 269 } },
                        { type: "monument", position: { x: 260, y: 291 } },
                    ],
                },
            ],
        });
    }
});