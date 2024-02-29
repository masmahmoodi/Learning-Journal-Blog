
// displaying header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })



// displaying footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })



const viewMoreBlogs = document.querySelector(".more")
const displaying = document.querySelector(".show-more")

viewMoreBlogs.addEventListener("click", ()=>{
    displaying.classList.toggle("hidden")
})





