class ScenarioSelector {
    roomManager;
    scenarios;

    constructor(roomManager) {
        this.roomManager = roomManager;
    }

    setup(scenarios) {
        var self = this;
        self.scenarios = scenarios;
        var scenariosDownDrop = document.getElementById("scenarios");

        scenariosDownDrop.addEventListener("change", function (e) {
            var scenario = self.scenarios[e.currentTarget.value];
            roomManager.setup(scenario.rooms);
            mapDrawer.setScenario(scenario);
        });

        self.removeOptions(scenariosDownDrop);

        for (var i = 0; i < self.scenarios.length; i++) {
            var option = document.createElement("option");
            option.text = self.scenarios[i].name;
            option.value = i;
            scenariosDownDrop.add(option, i);

            if (
                self.scenarios[i].selected !== undefined &&
                self.scenarios[i].selected
            )
                scenariosDownDrop.value = i;
        }

        scenariosDownDrop.dispatchEvent(new Event("change"));
    }

    removeOptions(ele) {
        for (var i = ele.options.length - 1; i >= 0; i--) {
            ele.remove(i);
        }
    }
}
