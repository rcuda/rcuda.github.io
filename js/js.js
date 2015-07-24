var totalInvestment = 800;
var accountBalance = 130;


function PopulateModal(item, price)
{
    $("#price").html("$" + price + "");
    $("#" + item + "").css("background-color", "#D0D0D0");
    $('#myModal').modal('show');
}
