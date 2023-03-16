const sliderImg = [
'images/142748735-Daisy_flower.webp',
'images/bloom-blossom-flora-46216.jpg',
'images/OIP.jpg',
'images/red-roses-flower-rose-pictures-501.jpg',

]

const changeImg = document.getElementById("imge")

let count = 0
const nextArrow=()=>{  
  if(count >= sliderImg.length-1 ){
     count = 0
     changeImg.src= sliderImg[count]
  }else{
    count++
    changeImg.src= sliderImg[count]
   
  }   
}


const prevArrow = ()=>{
  
  console.log(count);
  
  if(count <=1){
    const imgIndex = sliderImg[count]
    count = sliderImg.length-1
    changeImg.src= imgIndex
  }else{
    count--
    const imgIndex = sliderImg[count]
    changeImg.src= imgIndex
  }
}