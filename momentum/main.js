
setInterval(() => {
    var dt = new Date();
    document.getElementsByClassName("time")[0].innerHTML = dt.toLocaleTimeString();
}, 1000);