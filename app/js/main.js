function openOrderWind() {
    document.getElementById("order_form").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
}    
function closeOrderWind() {
    document.getElementById("order_form").style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
}
