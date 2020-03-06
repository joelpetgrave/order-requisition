function multiplyBy()
{
        quantity = document.getElementById("qty").value;
        unitprice = document.getElementById("uprice").value;
        document.getElementById("tprice").innerHTML = quantity * unitprice;
}  



// add new item row
$(document).ready(function(){
  var i = 0;
  //var html = '<p/> <div class="form-row" id="items-' + i + '"> <div class="col-xl-1 offset-xl-0" style="width: 15%;padding-right: 0;padding-left: 0;"><input type="text" class="form-control form-control-sm" id="qty-' + i + '" name="qty[]" placeholder="QTY" style="width: 100%;padding: 0;padding-left: 7px;" /></div> <div class="col-xl-5" style="width: 55%;max-width: none;"><input type="text" class="form-control form-control-sm d-flex flex-fill" id="description-' + i + '" placeholder="Description" style="width: 100%;" /></div> <div class="col-xl-2" style="width: 15%;"><input type="text" class="form-control form-control-sm" id="uprice-' + i + '" placeholder="Unit Price" style="width: 100%;" /></div> <div class="col-xl-2" style="width: 15%;max-width: 15%;padding-right: 2px;padding-left: 2px;"><input type="text" class="form-control form-control-sm" id="tprice-' + i + '" readonly placeholder="Total" style="width: 100%;" /></div> <div class="col-xl-2" style="width: 15%;"><button class="btn btn-primary" id="remove" type="button" style="height: 42px;padding-top: 6px;padding-bottom: 6px;padding-right: 12px;padding-left: 12px;margin: 0px;background-color: rgb(10,105,54);">Delete</button></div> </div>';
  var maxRows = 10;
  var x = 1;
  $("#qty-" + i).change(function() {
    upd_art(i)
  });
  $("#uprice-" + i).change(function() {
    upd_art(i)
  });
 
  $("button[name=add]").click(function (){
  if(x <= maxRows){
      i++;
    $("#items-0").append('<p/> <div class="form-row" id="items-0"> <div class="col-xl-1 offset-xl-0" style="width: 15%;padding-right: 0;padding-left: 0;"><input type="text" class="form-control form-control-sm" id="qty-' + i + '" name="qty[]" placeholder="QTY" style="width: 100%;padding: 0;padding-left: 7px;" /></div> <div class="col-xl-5" style="width: 55%;max-width: none;"><input type="text" class="form-control form-control-sm d-flex flex-fill" id="description-' + i + '" placeholder="Description" style="width: 100%;" /></div> <div class="col-xl-2" style="width: 15%;"><input type="text" class="form-control form-control-sm" id="uprice-' + i + '" placeholder="Unit Price" style="width: 100%;" /></div> <div class="col-xl-2" style="width: 15%;max-width: 15%;padding-right: 2px;padding-left: 2px;"><input type="text" class="form-control form-control-sm" id="tprice-' + i + '" readonly placeholder="Total" style="width: 100%;" /></div> <div class="col-xl-2" style="width: 15%;"><button class="btn btn-primary" id="remove" type="button" style="height: 42px;padding-top: 6px;padding-bottom: 6px;padding-right: 12px;padding-left: 12px;margin: 0px;background-color: rgb(10,105,54);">Delete</button></div> </div>');
    $("#qty-" + i).change(function() {
      upd_art(i)
    });
    $("#uprice-" + i).change(function() {
      upd_art(i)
    });
    x++;
  };
  });

  $("#items-0").on('click','#remove',function(){

      $(this).parent('div').parent().remove()
      x--;
      i--;

    });
      
   



/* sum row
$(".form-row").each(function () {
  $(".form-row").keyup(function () {
    $(".form-row").each(function(){
      $("#tprice").val("$"+$("#qty").val() * +$("#uprice").val());

    });*/
    
    

$(document).ready(function() {
    
    $("#qty-" + i).change(function() {
    
    upd_art(i);
      });
      $("#uprice-" + i).change(function() {
        
        upd_art(i);
      });
          

function upd_art(i) {
  var qty = $("#qty-" + i).val();
  var price = $("#uprice-" + i).val();
  var totNumber = (qty * price);
  var tot = totNumber.toFixed(2);
  $("#tprice-" + i).val(tot);
  alert("success");
};
});
});


/*$(function () {
  $("#childqty, #childuprice").keyup(function () {
    
     $("#childtprice").val("$"+$("#childqty").val() * +$("#childuprice").val());
  });
});
$(document).ready(function(){
var count;
var Price;
  $("#qty").onkeyup(function(){

    count.val("#qty")
    $("#tprice").val(count * Price)
});

$("#uprice").keyup(function(){

  count.val("#uprice")
  //$("#tprice").val(count * Price)
});

//$("#tprice").val(count * Price)
*/


