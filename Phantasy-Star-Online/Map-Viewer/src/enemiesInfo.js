class EnemiesInfo {
    init(enemies) {
        var enemyWindows = document.getElementById("map-enemies-window");
        var enemyTable = document.createElement("table");
        var enemyTableHeadRow = document.createElement("tr");
        var enemyTableHeadName = document.createElement("th");
        enemyTableHeadName.appendChild(document.createTextNode("Name"));
        var enemyTableHeadHealth = document.createElement("th");
        enemyTableHeadHealth.appendChild(document.createTextNode("Health"));
        var enemyTableHeadColour = document.createElement("th");
        enemyTableHeadColour.appendChild(document.createTextNode("Colour"));

        enemyTableHeadRow.appendChild(enemyTableHeadName);
        enemyTableHeadRow.appendChild(enemyTableHeadHealth);
        enemyTableHeadRow.appendChild(enemyTableHeadColour);

        enemyTable.appendChild(enemyTableHeadRow);
        enemies.forEach((enemy) => {
            var enemyTableRow = document.createElement("tr");
            var enemyTableNameCell = document.createElement("td");
            enemyTableNameCell.appendChild(
                document.createTextNode(
                    `${enemy.name}${enemy.rare === true ? " *" : ""}`
                )
            );
            var enemyTableHealthCell = document.createElement("td");
            enemyTableHealthCell.appendChild(document.createTextNode(enemy.hp));
            var enemyTableColourCell = document.createElement("td");
            enemyTableColourCell.style.backgroundColor = enemy.colour;

            enemyTableRow.appendChild(enemyTableNameCell);
            enemyTableRow.appendChild(enemyTableHealthCell);
            enemyTableRow.appendChild(enemyTableColourCell);

            enemyTable.appendChild(enemyTableRow);
        });

        enemyWindows.appendChild(enemyTable);
    }
}
