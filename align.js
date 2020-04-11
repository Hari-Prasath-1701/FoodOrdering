
$(document).ready(function(){
  $("a.aall").css({"font-weight":"900"})
$("div.all").show();
$("div.india").hide();
$("div.italy").hide();
$("div.greek").hide();
$("div.china").hide();
$("div.thai").hide();

$("a.aind").click(
function()
{
$("a.achi").css({"font-weight":"normal"})
$("a.agreek").css({"font-weight":"normal"})
$("a.aitl").css({"font-weight":"normal"})
$("a.athai").css({"font-weight":"normal"})
$("a.aall").css({"font-weight":"normal"})
$("a.aind").css({"font-weight":"900"})
$("div.all").hide();
$("div.india").show();
$("div.italy").hide();
$("div.greek").hide();
$("div.china").hide();
$("div.thai").hide();
});
  
$("a.athai").click(function()
{
$("a.achi").css({"font-weight":"normal"})
$("a.agreek").css({"font-weight":"normal"})
$("a.aitl").css({"font-weight":"normal"})
$("a.athai").css({"font-weight":"900"})
$("a.aall").css({"font-weight":"normal"})
$("a.aind").css({"font-weight":"normal"})
$("div.all").hide();
$("div.india").hide();
$("div.italy").hide();
$("div.greek").hide();
$("div.china").hide();
$("div.thai").show();
});  

$("a.aitl").click(function()
{
$("a.achi").css({"font-weight":"normal"})
$("a.agreek").css({"font-weight":"normal"})
$("a.aitl").css({"font-weight":"900"})
$("a.athai").css({"font-weight":"normal"})
$("a.aall").css({"font-weight":"normal"})
$("a.aind").css({"font-weight":"normal"})
$("div.all").hide();
$("div.india").hide();
$("div.italy").show();
$("div.greek").hide();
$("div.china").hide();
$("div.thai").hide();
});  

$("a.agreek").click(function()
{
$("a.achi").css({"font-weight":"normal"})
$("a.agreek").css({"font-weight":"900"})
$("a.aitl").css({"font-weight":"normal"})
$("a.athai").css({"font-weight":"normal"})
$("a.aall").css({"font-weight":"normal"})
$("a.aind").css({"font-weight":"normal"})
$("div.all").hide();
$("div.india").hide();
$("div.italy").hide();
$("div.greek").show();
$("div.china").hide();
$("div.thai").hide();
});  

$("a.achi").click(function()
{
$("a.achi").css({"font-weight":"900"})
$("a.agreek").css({"font-weight":"normal"})
$("a.aitl").css({"font-weight":"normal"})
$("a.athai").css({"font-weight":"normal"})
$("a.aall").css({"font-weight":"normal"})
$("a.aind").css({"font-weight":"normal"})
$("div.all").hide();
$("div.india").hide();
$("div.italy").hide();
$("div.greek").hide();
$("div.china").show();
$("div.thai").hide();
});  

$("a.aall").click(function()
{
$("a.achi").css({"font-weight":"normal"})
$("a.agreek").css({"font-weight":"normal"})
$("a.aitl").css({"font-weight":"normal"})
$("a.athai").css({"font-weight":"normal"})
$("a.aall").css({"font-weight":"900"})
$("a.aind").css({"font-weight":"normal"})
$("div.all").show();
$("div.india").hide();
$("div.italy").hide();
$("div.greek").hide();
$("div.china").hide();
$("div.thai").hide();
});  


});


