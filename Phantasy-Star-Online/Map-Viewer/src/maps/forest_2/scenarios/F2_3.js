maps.forEach((map) => {
    if (map.name === "Forest 2") {
        map.scenarios.push({
            name: "3",
            averageTime: 114,
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
                    src: "assets/maps/forest_2/R1.png",
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_2/R2.png",
                    active: true,
                    selected: true,
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
                    src: "assets/maps/forest_2/R3.png",
                    active: true,
                    selected: false,
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
                    src: "assets/maps/forest_2/R5.png",
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_2/R9.png",
                    active: true,
                    selected: false,
                },
                {
                    src: "assets/maps/forest_2/R10.png",
                    active: true,
                    selected: false,
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
                },
            ],
        });
    }
});
