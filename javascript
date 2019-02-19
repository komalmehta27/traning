SORTING USING FOR LOOP:

var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}
console.log(output);

--------------------------------------------------

SORTING USING FOR EACH AND MAP LOOP:

function asc(f) {

  var d = [];
  f.map(function(e, i, a) {
    d[i] = e
  })
  var k = [];
  f.forEach(function(e, i, a) {
    var g = d.indexOf(Math.min.apply(null, d))
    var s = d.splice(g, 1)
    k[i] = s
  })

  document.write(k)
}
asc([3, 4, 1, 2, -3, 20, 10, 22, 7, 5, 7, 8, 200, 6])

-------------------------------------------------------------
DIFFERENCE BETWEEN FOR EACH AND MAP:-

DIFFERENCE BETWEEN FOR EACH & MAP:-

forEach()?—?executes a provided function once for each array element.
map()?—?creates a new array with the results of calling a provided function on every element in the calling array.
What exactly does this mean?

Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

