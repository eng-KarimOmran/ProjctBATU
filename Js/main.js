//            nav
const IconLest = document.getElementById('IconLest')
IconLest.addEventListener('click',function(){
    const listNav = document.getElementById('listNav')
    listNav.classList.add('list-nav-open')
    const XNav = document.getElementById('XNav')
    XNav.addEventListener('click',function(){
        listNav.classList.remove('list-nav-open')
    })
})
