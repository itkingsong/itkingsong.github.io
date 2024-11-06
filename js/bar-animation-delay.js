var xAxisData1 = [];
var data11 = [];
var data22 = [];
for (var i = 0; i < 100; i++) {
  xAxisData1.push('A' + i);
  data11.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  data22.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}