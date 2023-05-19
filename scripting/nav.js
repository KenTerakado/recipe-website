function goToPage() {
    var selectedOption = document.getElementById("dropdown").value;
    if (selectedOption !== "") {
      window.location.href = selectedOption
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}