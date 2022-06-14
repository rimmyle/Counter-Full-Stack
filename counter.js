"use strict";
(function() {
    window.addEventListener("load", init);
    const URL = "http://localhost:8000/";
    function init() {
        if(localStorage.getItem("val")) {
            id("num").innerHTML = localStorage.getItem("val");
        }

        id("up").addEventListener("click", goUp);
        id("down").addEventListener("click", goDown);
        id("reset").addEventListener("click", reset);
    }

    function goUp() {
        id("num").innerHTML = parseInt(id("num").innerHTML) + 1;
        localStorage.setItem("val", parseInt(id("num").innerHTML));
    }

    function goDown() {
        id("num").innerHTML = parseInt(id("num").innerHTML) - 1;
        localStorage.setItem("val", parseInt(id("num").innerHTML));
    }

    function reset() {
        id("num").innerHTML = 0;
        localStorage.setItem("val", parseInt(id("num").innerHTML));
    }

    function id(id) {
        return document.getElementById(id)
    }

    async function checkStatus(res) {
        if (!res.ok) {
          throw new Error(await res.text());
        }
        return res;
      }
})();