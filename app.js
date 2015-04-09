function getValues()
{
    var eachValues = [];

    $(".val-to-add").each(function(){
        eachValues.push(parseInt($(this).val()));
    });
    add(eachValues);
}

function add(eachValues)
{
    var sum = 0;
    $.each(eachValues, function(){
        sum += parseInt(this) || 0;
    });

    printSum(sum);
}

function printSum(sum)
{
    $("#sum").text(sum);
}

$(".val-to-add").on("keyup", function(){
    getValues();
});