<script>
var content = "";
$( document ).ready(function() {
$.get('data.txt', function(theData) {
theData = theData.replace(/\r/g,'');
theData = theData.replace(/\t/g,' ');
theData = theData.split('\n');
totalRows = theData.length;
theHead = theData[0].split(' ');
content += "<tr>";
theHead.forEach(TH);
content += "</tr>";
for(let i=1;i<totalRows;++i){
theTD = theData[i].split(' ');
content += "<tr>";
theTD.forEach(TD);
content += "</tr>";
}
$('#mytable').html(content);
});
});
function TH(value){
content += "<th>" + value + "</th>";
}
function TD(value){
content += "<td>" + value + "</td>";
}
</script>