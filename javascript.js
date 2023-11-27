const changeBtn= document.getElementById('btn-change')
const colors=["red","yelow","blue","#B4F8C8","#FBE712"]
console.log(changeBtn)

changeBtn.addEventListener('click',()=>{
    var rand=Math.floor(Math.random()*colors.length)
    console.log(rand)
    document.body.style.backgroundColor=colors[rand]
})