maps.forEach((map) => {
    if (map.name === "Forest 1") {
        map.scenarios.push({
            name: "2",
            averageTime: 114,
            rooms: [
                {
                    order: 4,
                    src: "assets/maps/forest/F1_R1.png",
                    objects: [
                        {
                            type: "label",
                            value: "4",
                            position: { x: -260, y: -300 },
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
                                },
                            ],
                        },
                        {
                            order: 2,
                            id: "B",
                            optional: true,
                            spawnBox: {
                                position: { x: -180, y: -260 },
                                size: { x: 52, y: 60 },
                            },
                            encounters: [
                                {
                                    order: 1,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -160,
                                                y: -240,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -150,
                                                y: -200,
                                            },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Savage Wolf",
                                            position: {
                                                x: -140,
                                                y: -180,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest/F1_R2.png",
                },
                {
                    order: 5,
                    finish: true,
                    src: "assets/maps/forest/F1_R3.png",
                    objects: [
                        {
                            type: "label",
                            value: "5",
                            position: { x: -10, y: -160 },
                        },
                        { type: "finish", position: { x: -40, y: -100 } },
                    ],
                },
                {
                    src: "assets/maps/forest/F1_R4.png",
                },
                {
                    src: "assets/maps/forest/F1_R5.png",
                    order: 3,
                    objects: [
                        {
                            type: "label",
                            value: "3",
                            position: { x: -370, y: -50 },
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
                                },
                            ],
                        },
                    ],
                },
                {
                    order: 1,
                    start: true,
                    src: "assets/maps/forest/F1_R6.png",
                    required: true,
                    objects: [
                        { type: "start", position: { x: -100, y: -30 } },
                        { type: "door_switch", position: { x: -70, y: 40 } },
                        {
                            type: "label",
                            value: "1",
                            position: { x: -30, y: -30 },
                        },
                        {
                            type: "explosive_trap",
                            position: { x: 100, y: 100 },
                        },
                        {
                            type: "floor_button",
                            position: { x: 125, y: 100 },
                        },
                        {
                            type: "item_box",
                            position: { x: 150, y: 100 },
                        },
                        {
                            type: "special_item_box",
                            position: { x: 175, y: 100 },
                        },
                    ],
                },
                {
                    order: 2,
                    src: "assets/maps/forest/F1_R7.png",
                    required: true,
                    objects: [
                        {
                            type: "label",
                            value: "2",
                            position: { x: -150, y: 150 },
                        },
                        {
                            type: "laser_switch",
                            position: { x: -227, y: 290 },
                        },
                        {
                            type: "laser",
                            position: { x: -240, y: 250 },
                            positionOffset: { x: -240, y: 280 },
                        },
                    ],
                },
                {
                    src: "assets/maps/forest/F1_R8.png",
                },
                {
                    src: "assets/maps/forest/F1_R9.png",
                },
                {
                    src: "assets/maps/forest/F1_R10.png",
                },
            ],
        });
    }
});
