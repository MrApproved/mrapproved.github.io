maps.forEach((map) => {
    if (map.name === "Forest 1") {
        map.scenarios.push({
            name: "3",
            averageTime: 170,
            rooms: [
                {
                    src: "assets/maps/forest_1/R1.png",
                    order: 7,
                    objects: [
                        {
                            type: "laser_switch",
                            position: { x: -331, y: -268 },
                            colour: "violet",
                        },
                        { type: "item_box", position: { x: -309, y: -308 } },
                        { type: "item_box", position: { x: -309, y: -322 } },
                        { type: "item_box", position: { x: -293, y: -322 } },
                        { type: "item_box", position: { x: -293, y: -308 } },
                        {
                            type: "laser",
                            position: { x: -314, y: -290 },
                            positionOffset: { x: -274, y: -290 },
                            colour: "violet",
                        },
                        { type: "item_box", position: { x: -164, y: -182 } },
                        { type: "item_box", position: { x: -178, y: -177 } },
                        { type: "item_box", position: { x: -179, y: -199 } },
                        { type: "item_box", position: { x: -195, y: -190 } },
                        {
                            type: "label",
                            position: { x: -86, y: -276 },
                            value: "7",
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
                                            position: { x: -114, y: -229 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -139, y: -278 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -228, y: -280 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -168, y: -297 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -128, y: -297 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: -124, y: -263 },
                                        },
                                        {
                                            name: "Barbarous Wolf",
                                            position: { x: -166, y: -271 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R2.png",
                    order: 9,
                    finish: true,
                    objects: [
                        { type: "finish", position: { x: 311, y: -285 } },
                        {
                            type: "label",
                            position: { x: 176, y: -240 },
                            value: "9",
                        },
                        { type: "item_box", position: { x: 247, y: -224 } },
                        { type: "item_box", position: { x: 243, y: -209 } },
                        { type: "item_box", position: { x: 235, y: -220 } },
                        { type: "capsule", position: { x: 304, y: -204 } },
                    ],
                    waves: [
                        {
                            order: 1,
                            optional: true,
                            spawnBox: {
                                position: { x: 269, y: -230 },
                                size: { x: 40, y: 40 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 303, y: -216 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: 331, y: -257 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: 331, y: -270 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R3.png",
                    order: 8,
                    objects: [
                        {
                            type: "door_switch",
                            position: { x: 101, y: -14 },
                            colour: "yellow",
                        },
                        { type: "item_box", position: { x: 167, y: -32 } },
                        { type: "item_box", position: { x: 174, y: -21 } },
                        { type: "item_box", position: { x: 167, y: -10 } },
                        { type: "item_box", position: { x: 44, y: -173 } },
                        { type: "item_box", position: { x: 30, y: -172 } },
                        { type: "item_box", position: { x: 39, y: -161 } },
                        { type: "item_box", position: { x: 26, y: -160 } },
                        { type: "capsule", position: { x: 60, y: -191 } },
                        {
                            type: "label",
                            position: { x: -3, y: -168 },
                            value: "8",
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
                                            position: { x: 41, y: -70 },
                                        },
                                        {
                                            name: "Rag Rappy",
                                            position: { x: 82, y: -115 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Gobooma",
                                            position: { x: 117, y: -115 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: -4, y: -98 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 79, y: -139 },
                                        },
                                        {
                                            name: "Gobooma",
                                            position: { x: 109, y: -190 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R4.png",
                    optional: true,
                    objects: [
                        {
                            type: "special_item_box",
                            position: { x: 263, y: -140 },
                        },
                        {
                            type: "laser",
                            position: { x: 284, y: -147 },
                            positionOffset: { x: 284, y: -117 },
                            colour: "blue",
                        },
                        { type: "item_box", position: { x: 274, y: 3 } },
                        { type: "item_box", position: { x: 270, y: 19 } },
                        { type: "item_box", position: { x: 258, y: 5 } },
                        {
                            type: "laser_switch",
                            position: { x: 292, y: 28 },
                            colour: "blue",
                        },
                    ],
                    waves: [
                        {
                            order: 1,
                            spawnBox: {
                                position: { x: 275, y: 12 },
                                size: { x: 35, y: 30 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 296, y: -142 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R5.png",
                    order: 6,
                    objects: [
                        { type: "item_box", position: { x: -322, y: -131 } },
                        { type: "item_box", position: { x: -317, y: -143 } },
                        { type: "item_box", position: { x: -219, y: -97 } },
                        { type: "item_box", position: { x: -204, y: -96 } },
                        { type: "item_box", position: { x: -220, y: -83 } },
                        { type: "item_box", position: { x: -205, y: -81 } },
                        {
                            type: "laser",
                            position: { x: -229, y: -99 },
                            positionOffset: { x: -229, y: -69 },
                            colour: "aqua",
                        },
                        {
                            type: "laser_switch",
                            position: { x: -332, y: -60 },
                            colour: "aqua",
                        },
                        {
                            type: "label",
                            position: { x: -370, y: -51 },
                            value: "6",
                        },
                        { type: "capsule", position: { x: -262, y: -145 } },
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
                                            position: { x: -241, y: -35 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: -246, y: 11 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: -235, y: 3 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: -223, y: -4 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: -211, y: -15 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: -206, y: -26 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -322, y: 20 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: -320, y: 30 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -321, y: 0 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R6.png",
                    order: 4,
                    objects: [
                        { type: "item_box", position: { x: -67, y: 28 } },
                        { type: "item_box", position: { x: -67, y: 14 } },
                        { type: "item_box", position: { x: -57, y: 2 } },
                        { type: "item_box", position: { x: -56, y: 16 } },
                        { type: "item_box", position: { x: -2, y: 97 } },
                        { type: "item_box", position: { x: 2, y: 83 } },
                        {
                            type: "label",
                            position: { x: -54, y: -38 },
                            value: "4",
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
                                            position: { x: -7, y: 59 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: 27, y: 99 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: 28, y: 89 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: 30, y: 78 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: 34, y: 65 },
                                        },
                                        {
                                            name: "Mothmant",
                                            position: { x: 37, y: 54 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -72, y: 80 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: -71, y: 57 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R7.png",
                    order: 5,
                    objects: [
                        { type: "capsule", position: { x: -178, y: 82 } },
                        { type: "capsule", position: { x: -203, y: 215 } },
                        { type: "item_box", position: { x: -270, y: 252 } },
                        { type: "item_box", position: { x: -256, y: 253 } },
                        { type: "item_box", position: { x: -271, y: 267 } },
                        { type: "item_box", position: { x: -258, y: 268 } },
                        {
                            type: "laser_switch",
                            position: { x: -229, y: 288 },
                            colour: "red",
                        },
                        {
                            type: "laser",
                            position: { x: -240, y: 249 },
                            positionOffset: { x: -240, y: 282 },
                            colour: "red",
                        },
                        {
                            type: "label",
                            position: { x: -212, y: 130 },
                            value: "5",
                        },
                        { type: "capsule", position: { x: -292, y: 145 } },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R8.png",
                    order: 3,
                    objects: [
                        { type: "capsule", position: { x: -34, y: 245 } },
                        {
                            type: "label",
                            position: { x: -56, y: 285 },
                            value: "3",
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R9.png",
                    order: 2,
                    objects: [
                        { type: "capsule", position: { x: 59, y: 191 } },
                        { type: "item_box", position: { x: 203, y: 126 } },
                        { type: "item_box", position: { x: 203, y: 111 } },
                        { type: "item_box", position: { x: 214, y: 118 } },
                        { type: "item_box", position: { x: 207, y: 191 } },
                        { type: "item_box", position: { x: 210, y: 203 } },
                        { type: "item_box", position: { x: 191, y: 189 } },
                        { type: "item_box", position: { x: 194, y: 207 } },
                        {
                            type: "label",
                            position: { x: 248, y: 132 },
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
                                            position: { x: 90, y: 172 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: 145, y: 161 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 83, y: 110 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: 168, y: 108 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 93, y: 159 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: 182, y: 171 },
                                        },
                                    ],
                                },
                                {
                                    order: 4,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: { x: 76, y: 118 },
                                        },
                                        {
                                            name: "Savage Wolf",
                                            position: { x: 75, y: 216 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest_1/R10.png",
                    start: true,
                    order: 1,
                    objects: [
                        { type: "start", position: { x: 328, y: 274 } },
                        { type: "item_box", position: { x: 326, y: 221 } },
                        { type: "item_box", position: { x: 315, y: 216 } },
                        { type: "item_box", position: { x: 276, y: 312 } },
                        { type: "item_box", position: { x: 274, y: 297 } },
                        { type: "item_box", position: { x: 260, y: 303 } },
                        { type: "capsule", position: { x: 226, y: 279 } },
                        {
                            type: "label",
                            position: { x: 194, y: 337 },
                            value: "1",
                        },
                    ],
                },
            ],
        });
    }
});
