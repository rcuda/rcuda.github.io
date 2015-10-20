var totalInvestment = 800;
var accountBalance = 130;


function PopulateModal(item, price)
{
    $("#price").html("$" + price + "");
    $("#" + item + "").css("background-color", "#D0D0D0");
    $('#myModal').modal('show');
}

function SubmitForm()
{
    $("#modalTitle2").html("Thank you");
    $("#modalDescription2").html("Someone will be in contact soon");
    $("#form").hide();
}