var run = setInterval(function () {slideShow()}, 20000);

function slideShow() {
  
  var $image = document.querySelector('#slides');
    $image.src = 'photos/IMAG0222.jpg';

    function secondImage() {
      $image.src = 'photos/IMAG0744.jpg';
    } setTimeout(secondImage, 5000);

    function thirdImage() {
      $image.src = 'photos/IMAG0830.jpg';
    } setTimeout(thirdImage, 10000);

    function fourthImage() {
      $image.src = 'photos/IMAG0549.jpg';
    } setTimeout(fourthImage, 15000);

  } setTimeout(slideShow, 500);