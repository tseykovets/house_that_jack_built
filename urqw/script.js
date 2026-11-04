/*
 * The file encoding is UTF-8 without BOM; the newline format is LF
 * This file is part of "This Is the House That Jack Built" for UrqW.
 * SPDX-License-Identifier: CC0-1.0
 */

$('#mute').hide();
$('.navbar-right').hide();

// Calculates the percentage ratio of two numbers.
functions.percentageratio = function(num1, num2) {
    if (arguments.length !== 2) {
        throw new Error('The percentageratio() function takes 2 arguments.');
    }
    if (num2 === 0) return 0;
    return Math.round((num1/num2)*100);
};
