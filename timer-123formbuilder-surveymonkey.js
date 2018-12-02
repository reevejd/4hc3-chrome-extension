// document.addEventListener("DOMContentLoaded", function(event) { 
//   alert('loaded');
var start = new Date()
setTimeout(() => {
    var submitButton = document.querySelector("button[type='submit']")
    submitButton.addEventListener('click', () => {
        var end = new Date();
        var time_ms = end - start;
        alert(`Form completed in ${time_ms}ms`)
    })
},1000)
