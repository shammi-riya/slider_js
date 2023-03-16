const sliderImg = [
'images/142748735-Daisy_flower.webp',
'images/bloom-blossom-flora-46216.jpg',
'images/OIP.jpg',
'images/red-roses-flower-rose-pictures-501.jpg',

]


const image = document.getElementById("imges");
let count = 0



const nextArrow =() =>{
    if(count>=sliderImg.length-1) {
        count=0
        image.src= sliderImg[count]
      }else{
        count++
        image.src= sliderImg[count]
      }
}

const prevArrow = () =>{
  if(count <=1){
    count = sliderImg.length-1
    image.src =sliderImg[count]
  }else{
    count--
    image.src =sliderImg[count]
  }
}






