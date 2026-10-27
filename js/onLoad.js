const title = document.getElementById("title")
title.addEventListener('mouseenter', function () {
    document.getElementById("title").innerHTML = "Test"
    // while (true) {
    //     title.innerText("A")
    // }
})

function subTest () {
    document.getElementById("title").innerText = "Test"
}
function test () {
    setTimeout(subTest, 1000)
}

