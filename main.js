
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


    function toggleMobileNav() {
        var mobileNav = document.querySelector('nav.mobile-nav ul');
        mobileNav.style.display === 'flex' ? mobileNav.style.display = 'none' : mobileNav.style.display = 'flex';
    }




const viewMoreBlogs = document.querySelector(".more")
const displaying = document.querySelector(".show-more")

viewMoreBlogs.addEventListener("click", ()=>{
    displaying.classList.toggle("hidden")
})





