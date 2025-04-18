/*
 * The file encoding is UTF-8 without BOM; the newline format is LF
 * This file is part of "This Is the House That Jack Built" for UrqW.
 * SPDX-License-Identifier: CC0-1.0
 */

$('#mute').hide();
$('.navbar-right').hide();

window.percentageRatio = function(num1, num2) {
    if (num2 === 0) return 0;
    return Math.round((num1/num2)*100);
}
