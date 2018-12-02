var start = new Date()


var loaded = setInterval(() => {
    if (document.querySelector("div[data-qa='thank-you-screen']")) {
        start = new Date();
        clearInterval(loaded);
    }
},10)


var poll = setInterval(() => {
    if (document.querySelector("div[data-qa='thank-you-screen-visible']")) {
        var end = new Date();
        var time_ms = end - start;
        alert(`Form completed in ${time_ms}ms`)
        clearInterval(poll);
    }
},10)
