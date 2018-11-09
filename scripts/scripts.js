$(document).ready(() => {
$('#cow').hide();

$('#gate').hide();

$('#herd').hide();

$('#resting').hide();

$('#cowbutton').on('click', () => {
   $('#cow').toggle();
  });
  $('#gatebutton').on('click', () => {
    $('#gate').toggle();
    });
  $('#herdbutton').on('click', () => {
    $('#herd').toggle();
      });
  $('#restingbutton').on('click', () => {
     $('#resting').toggle();
        });
});
