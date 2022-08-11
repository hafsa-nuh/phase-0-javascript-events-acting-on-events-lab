// Your code here
// const input = document.getElementById('input');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

// let moveDodgerLeft = document.getElementById('dodger')
// moveDodgerLeft.style.left
// document.addEventListener('keydown', function(e) {
//     if (e.which === 37) {
//       var leftNumbers = dodger.style.left.replace('px', '')
//       var left = parseInt(leftNumbers, 10)
  
//       dodger.style.left = `${left - 1}px`
//     }
// })
function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
}
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if ( left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
}