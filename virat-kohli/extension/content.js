
let viratKohliImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40k3bdtsjDFvRxcNrGtunuxHz9q0S7WFUjIadIaM1xw&s",
    "https://timesofindia.indiatimes.com/photo/104569839/104569839.jpg",
    "https://wallpapers.com/images/hd/smiling-virat-kohli-hd-ghdrwtslv52wozhv.jpg",
    "https://c.ndtvimg.com/2022-10/4kk1g8pg_virat-kohli-afp-_625x300_31_October_22.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2u-ujNImt7H9OIY6F7lnmq8GC2fva3DZjFfrnoSEA2Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2-kllRjt7kjgFpGSFVziohOh2pAmaPrNW97WR2eT5Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86D7AAYDoH-pVGHOqemY3LrV54jdmFFLNvoHV_7iLgQ&s",
    "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-41048,resizemode-75,msid-57949474/news/sports/virat-kohli-brave-new-india-or-a-sullen-bully.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Virat_Kohli_with_AudiQ7.png/169px-Virat_Kohli_with_AudiQ7.png"
];
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    const randomImg = Math.floor(Math.random() * viratKohliImages.length);
    images[i].src = viratKohliImages[randomImg];
}


