// const bashlig=document.querySelector(".bashlig");
// window.addEventListener("scroll", () => {
//     if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
//         bashlig.style.background="black"
//     }
//     else{
//         bashlig.style.background="none"
//     }
// })
// const menuList=document.createElement("div")
// menuList.classList.add("menu-list")
// menuList.innerHTML=`

//                         <ul>
//                             <li>Home</li>
//                             <li>Hotel</li>
//                             <li>About</li>
//                             <li>Blog</li>
//                             <li>Contact</li>
//                         </ul>
//                     `
// document.body.append(menuList)
// const menuBtn =document.querySelector(".menu")
// menuBtn.addEventListener("click" , () => {
//     if(menuList.classList.value=="menu-list"){
//         menuList.style.transform="translateX(100%)"
//         menuList.classList.add("active")
//         menuBtn.innerHTML=`<i class="bi bi-x-lg"></i>`
//         console.log(menuList.classList.value)
//     }else{
//         menuList.style.transform="translateX(0%)"
//         menuList.classList.remove("active")
//         menuBtn.innerHTML=`<i class="bi bi-list"></i>`

//         console.log(menuList.classList.value)

//     }
// })