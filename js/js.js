function PopulateModal(item, price)
{
    $("#price").html("$" + price + "");
    $('#myModal').modal('show');
}