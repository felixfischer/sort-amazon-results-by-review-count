// ==UserScript==
// @name         Amazon Review Count Rank
// @namespace    http://felixfischer.com/
// @version      1.0
// @description  Sort Amazon Search Results by Review Count
// @author       Felix Fischer
// @include      *amazon.*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {

    function addOption() {
        var sortDropdown = document.getElementById('sort');
        var hasOption = document.getElementById('sort-rcr');
        if (sortDropdown && !hasOption) {
            console.log('insert sort option: Review Count Rank');
            var newOption = '<option value="review-count-rank" id="sort-rcr">Review Count Rank</option>';
            sortDropdown.insertAdjacentHTML('beforeend', newOption);
        }
    }

    setInterval(addOption, 1000);

})();
