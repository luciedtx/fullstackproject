<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tableau des entiers, carrés et racines carrées</title>
    </head>
    <body>

        <table border="1">
            <tr>
                <th>Entier</th>
                <th>Carré</th>
                <th>Racine carrée</th>
            </tr>

            <?php
                for ($i = 1; $i <= 10; $i++) {
                    $carre = $i * $i;
                    $racineCarree = sqrt($i);
                    echo "<tr>
                            <td>$i</td>
                            <td>$carre</td>
                            <td>$racineCarree</td>
                        </tr>";
                }
            ?>
        </table>

    </body>
</html>