function randomIntFromInterval(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
}
function makeid(length, characters) {
  var result = '';
	var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}

function setStation(id, station) {
	$("#" + id).val(station);
}
$(".seF").submit(function () {
	var bd = $.param($(this).serializeArray());
	location.href = "htmlBase/base.html?" + bd;
});
$("[name=PNR_CODE]").val(makeid(6, "ABCDEFGHIJKLMNOPQRSTUVWXY"))
$("[name=SEAT_NO]").val(randomIntFromInterval(1, 10) + makeid(1, "ABCD"))
$("[name=CARRIAGE_NO]").val(randomIntFromInterval(1, 10));
$("[name=CP_CODE]").val(randomIntFromInterval(1, 10000));
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
$("[name=DATE_TRIP_END]").val(year + "-" + month + "-" + day);
$("[name=DATE_TRIP_START]").val(year + "-" + month + "-" + day);
