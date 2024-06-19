 const login= document.getElementById("loginButton");
 const dialog= document.querySelector("dialog");
 login.addEventListener("click", ()=>{
     dialog.showModal();
    console.log("testt");
 })
 closeButton.addEventListener("click", () => {
    dialog.close();
 
})
 
