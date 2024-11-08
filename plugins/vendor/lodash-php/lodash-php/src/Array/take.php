<?php

declare(strict_types=1);

/*
 * This file is part of the SolidWorx Lodash-PHP project.
 *
 * @author     Pierre du Plessis <open-source@solidworx.co>
 * @copyright  Copyright (c) 2017
 */

namespace _;

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @category Array
 *
 * @param array $array The array to query.
 * @param int   $n     The number of elements to take.
 *
 * @return array the slice of `array`.
 * @example
 * <code>
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 * </code>
 */
function take(array $array, int $n = 1): array
{
    if (1 > $n) {
        return [];
    }

    array_splice($array, $n);

    return $array;
}
