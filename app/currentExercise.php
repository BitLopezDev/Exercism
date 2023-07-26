<?php


declare(strict_types=1);


function distance(string $str1 = "111GAGCCTACTAACGGGAT", string $str2 = "222CATCGTAATGACGGCCT")
{

    if (strlen($str1) !== strlen($str2)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');

    }
    $len = strlen($str1);
    $summa = 0;

    for ($i = 0; $i < $len; $i++) {
        if ($str1[$i] != $str2[$i]) {
            $summa += 1;
        }
    }

    return $summa;

}

distance("A", "G");