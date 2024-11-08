<?php

declare(strict_types=1);

/*
 * This file is part of the SolidWorx Lodash-PHP project.
 *
 * @author     Pierre du Plessis <open-source@solidworx.co>
 * @copyright  Copyright (c) 2017
 */

use function _\slice;
use PHPUnit\Framework\TestCase;

class SliceTest extends TestCase
{
    public function testSlice()
    {
        $array = ['a', 'b', 'c', 'd'];
        $this->assertSame(['c', 'd'], slice($array, 2));
    }
}
