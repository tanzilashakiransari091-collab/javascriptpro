function showData() {

    var contentBox = document.getElementById("main-content");
    console.log(contentBox.children);

    var items = document.getElementsByClassName("render");

    for (var i = 0; i < items.length; i++) {
        console.log(items[i].innerHTML);
    }

    document.getElementById("first-name").value = "Alex";
    document.getElementById("last-name").value = "Bank";
    document.getElementById("email").value = "alexbank@example.com";

}

showData();