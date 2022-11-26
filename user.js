// ==UserScript==
// @name         Amazon: Sort by Review Count Rank
// @namespace    http://felixfischer.com/
// @version      1.2
// @description  Adds an option to sort search results by number of reviews
// @author       Felix Fischer
// @supportURL   https://github.com/felixfischer/sort-amazon-results-by-review-count/issues
// @include      *www.amazon.*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {

    function addOption() {
        var sortDropdown = document.getElementById('s-result-sort-select');
        var hasOption = document.getElementById('sort-rcr');
        if (sortDropdown && !hasOption) {
            console.log('insert sort option: Review Count Rank');
            var searchParams = new URLSearchParams(window.location.search);
            searchParams.set('s','review-count-rank');
            var newParams = searchParams.toString();
            var option= document.createElement("option");
            var newOption = '<option data-url=/s?'+newParams+' value="review-count-rank" id="sort-rcr">Review Count Rank</option>';
            sortDropdown.insertAdjacentHTML('beforeend', newOption);
        }
    }

    setInterval(addOption, 1000);

})();
