function goToActivity(page) {
    localStorage.userName = document.getElementById("userName");
    localStorage.partnerName = document.getElementById("partnerName");
    
    var newURL = window.location.href;
    var index = newURL.lastIndexOf('/') + 1;
    newURL = newURL.slice(0, index);
    newURL += page + ".html";
    window.location.assign(newURL);
}