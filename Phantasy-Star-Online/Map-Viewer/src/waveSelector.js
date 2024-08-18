class WaveSelector {
    setupForRoom(room, roomContainer) {
        if (room.waves !== undefined) {
            room.waves.forEach((wave) => {
                var waveContents = document.createElement("div");
                waveContents.className = "wave-contents";

                var waveHeader = document.createElement("div");
                waveHeader.innerHTML = `<span>Wave: ${wave.order}${
                    wave.optional === true ? " - Optional" : ""
                } </span>`;
                waveHeader.className = "wave-header";

                var waveCheckbox = document.createElement("input");
                waveCheckbox.type = "checkbox";

                var waveEncounters = document.createElement("div");
                waveEncounters.className = "wave-encounters";

                waveHeader.appendChild(waveCheckbox);
                waveContents.appendChild(waveHeader);
                waveContents.appendChild(waveEncounters);

                // Encounter Selector
                if (wave.encounters !== undefined) {
                    wave.encounters.forEach((encounter) => {
                        encounter.active = true;
                        var encounterContainer = document.createElement("div");
                        encounterContainer.className = "encounter-contents";
                        var encounterHeader = document.createElement("div");

                        encounterHeader.className = "encounter-header";
                        encounterHeader.innerHTML = `<span>Encounter: ${encounter.order}</span>`;

                        var encounterCheckbox = document.createElement("input");
                        encounterCheckbox.type = "checkbox";

                        encounterHeader.appendChild(encounterCheckbox);
                        encounterContainer.appendChild(encounterHeader);
                        waveEncounters.appendChild(encounterContainer);

                        encounterCheckbox.checked = encounter.active;

                        encounterCheckbox.addEventListener(
                            "change",
                            function (e) {
                                encounter.active = e.currentTarget.checked;
                            }
                        );

                        encounter.enemies.forEach((enemy) => {
                            var enemyDiv = document.createElement("div");
                            var enemySpan = document.createElement("span");
                            enemySpan.appendChild(
                                document.createTextNode(enemy.name)
                            );
                            enemyDiv.appendChild(enemySpan);
                            encounterContainer.appendChild(enemyDiv);

                            //encounter.active = room.order !== undefined;
                        });
                    });
                }

                waveCheckbox.addEventListener("change", function (e) {
                    wave.active = e.currentTarget.checked;
                });

                //wave.active = room.order !== undefined;
                wave.active = true;
                waveCheckbox.checked = wave.active;

                roomContainer.appendChild(waveContents);
            });
        }
    }
}
