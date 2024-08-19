maps.forEach((map) => {
    if (map.name === "Forest 1") {
        map.scenarios.push({
            name: "2",
            averageTime: 114,
            selected: true,
            rooms: [
                {
                    src: "assets/maps/forest/F1_R1.png",
                },
                {
                    src: "assets/maps/forest/F1_R2.png",
                    order: 2,
                    required: true,
                    objects: [
                        { type: "item_box", position: { x: 258, y: -203 } },
                        { type: "item_box", position: { x: 245, y: -209 } },
                        { type: "item_box", position: { x: 233, y: -216 } },
                        { type: "item_box", position: { x: 275, y: -310 } },
                        { type: "item_box", position: { x: 261, y: -307 } },
                        { type: "item_box", position: { x: 247, y: -307 } },
                        { type: "capsule", position: { x: 120, y: -263 } },
                        {
                            type: "label",
                            position: { x: 185, y: -312 },
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
                                            position: { x: 233, y: -272 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: 266, y: -267 },
                                        },
                                    ],
                                },
                                {
                                    order: 2,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 283, y: -238 },
                                        },
                                        {
                                            name: "Booma",
                                            position: { x: 277, y: -269 },
                                        },
                                    ],
                                },
                                {
                                    order: 3,
                                    enemies: [
                                        {
                                            name: "Booma",
                                            position: { x: 211, y: -278 },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    src: "assets/maps/forest/F1_R3.png",
                },
                {
                    src: "assets/maps/forest/F1_R4.png",
                    required: true,
                    order: 1,
                    start: true,
                    objects: [
                        { type: "start", position: { x: 305, y: 19 } },
                        {
                            type: "laser_switch",
                            position: { x: 332, y: -95 },
                            colour: "aqua",
                        },
                        {
                            type: "laser",
                            position: { x: 285, y: -147 },
                            positionOffset: { x: 285, y: -117 },
                            colour: "aqua",
                        },
                        {
                            type: "special_item_box",
                            position: { x: 262, y: -138 },
                        },
                        { type: "item_box", position: { x: 277, y: 14 } },
                        { type: "item_box", position: { x: 269, y: 6 } },
                        { type: "item_box", position: { x: 262, y: -2 } },
                        { type: "capsule", position: { x: 269, y: -70 } },
                        {
                            type: "door_switch",
                            position: { x: 323, y: -156 },
                            colour: "lightgrey",
                        },
                        {
                            type: "label",
                            position: { x: 359, y: -92 },
                            value: "1",
                        },
                    ],
                },
                {
                    src: "assets/maps/forest/F1_R5.png",
                },
                {
                    src: "assets/maps/forest/F1_R6.png",
                },
                {
                    src: "assets/maps/forest/F1_R7.png",
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
