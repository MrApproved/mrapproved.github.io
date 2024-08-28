class MapSelector {
    maps;
    enemiesInfo;
    scenarioSelector;

    constructor(scenarioSelector) {
        this.scenarioSelector = scenarioSelector;
        this.enemiesInfo = enemiesInfo;
    }

    init(maps) {
        var self = this;
        self.maps = maps;
        var mapsDownDrop = document.getElementById("maps");

        mapsDownDrop.addEventListener("change", function (e) {
            mapDrawer.setMap(self.maps[e.currentTarget.value]);
            self.enemiesInfo.init(self.maps[e.currentTarget.value].enemies);
            self.scenarioSelector.setup(
                self.maps[e.currentTarget.value].scenarios
            );
        });

        for (var i = 0; i < self.maps.length; i++) {
            var option = document.createElement("option");
            option.text = self.maps[i].name;
            option.value = i;
            mapsDownDrop.add(option, i);

            if (self.maps[i].selected !== undefined && self.maps[i].selected)
                mapsDownDrop.value = i;
        }

        mapsDownDrop.dispatchEvent(new Event("change"));
    }
}
