document.body.style.fontFamily="Arial,sans-serif";

document.getElementById('nickname').textContent = 'Omair';
document.getElementById('favorites').textContent = 'Soccer';
document.getElementById('hometown').textContent = 'Karachi';


var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    list[i].className = 'list-item';
 }
 
 var myPicture= document.createElement('img');
      myPic.src = 'image/IMG_1282.jpg';
// Parent node is body, child is (myPic)
      document.body.appendChild(myPic);

// var body= document.body;
// var newImage= document.createElement('img');
// newImage.src= 'image/IMG_1282';
// newImage.style.backgroundColor='green';
