$(document).ready(function(){
  $("#formOne").submit(function(){
    var nameInput = $("#name").val();

    $(".name").append(nameInput);

    $("#postcard").show();
    event.preventDefault();
    $(".btn").attr("disabled", true);
  });
});