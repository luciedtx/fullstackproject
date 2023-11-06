<?php
    $nom= "Lucie";
    $age= 18 ;
    $estEtudiant= TRUE ;//booleen
    // creer une constante
    define("PI",3.14);
    echo PI;
    var_dump($nom,$age);


// exercice 1

    $nom="Randy";
    $nombre1= 7 ;
    $nombre2= 4 ;
    echo "Les variables nom, nombre1 et nombre2 ont pour valeurs respectives ".$nom .", " .$nombre1 .", " .$nombre2 ."." ."<br>" ;
    
    echo "L'addition de nombre1 et nombre2 est : " .($nombre1 + $nombre2) ."<br>";
    echo "L'addition de nombre1 et nombre2 est : " .($nombre1 * $nombre2) ."<br>";
    echo "L'addition de nombre1 et nombre2 est : " .($nombre1 - $nombre2) ."<br>";
    echo "L'addition de nombre1 et nombre2 est : " .($nombre1 / $nombre2) ."<br>";
    echo "L'addition de nombre1 et nombre2 est : " .($nombre1 % $nombre2) ."<br>";
    echo "L'addition de nombre1 et nombre2 est : " .($nombre1 ** $nombre2) ."<br>";

    $tableau= array(18,14,27,5);
    var_dump($tableau);
    $monBooleen= FALSE;
    echo gettype($tableau) ."<br>";
    echo gettype($monBooleen) ."<br>";

    define("JE_SUIS_UNE_CONSTANTE","je suis une constante.");
    echo JE_SUIS_UNE_CONSTANTE  ."<br>";

    $age=25;
    $message= ($age >= 18 ) ? "Vous etes majeur" : "Vous etes mineur ";
    echo $message ."<br>";

    // $note=15;
    // if ($note >= 15){
    //     echo "felicitations";
    // } elseif ($note>=12){
    //     echo "tableau d'honneur";
    // } elseif ($note>=10){
    //     echo " encouragement";
    // } else {
    //     echo "echoué";
    // }


    // exercice 2 
    $nom= "Jeanne";
    $age= 15;
    $estUnHomme= FALSE;

    if ($estUnHomme == TRUE){
        echo $nom ." a " .$age ."ans et c'est un homme.";
    } else{
        echo $nom ." a " .$age ."ans et c'est une femme.";
    }

    $message = ($estUnHomme == TRUE) ? $nom ." a " .$age ."ans et c'est un homme." : $nom ." a " .$age ."ans et c'est une femme." ;
    echo $message ."<br>";

    // exercice 3
    $mois=rand(1,12);
    switch($mois){
        case 1 :
            echo "1 Nous sommes en Janvier.";
            break ;
        case 2 :
            echo "2 Nous sommes en Février.";
            break ;
        case 3 :
            echo "3 Nous sommes en Mars.";
            break ;
        case 4 :
            echo "4 Nous sommes en Avril.";
            break ;
        case 5 :
            echo "5 Nous sommes en Mai.";
            break ;
        case 6 :
            echo "6 Nous sommes en Juin.";
            break ;
        case 7 :
            echo "7 Nous sommes en Juillet.";
            break ;
        case 8 :
            echo "8 Nous sommes en Aout.";
            break ;
        case 9 :
            echo "9 Nous sommes en Septembre.";
            break ;
        case 10 :
            echo "10 Nous sommes en Octobre.";
            break ;
        case 11 :
            echo " 11 Nous sommes en Novembre.";
            break ;
        case 12 :
            echo "12 Nous sommes en Décembre.";
            break ;
    }

    // exercice 4
    

?>