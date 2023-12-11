//
//let data = [
//    {
//    'Ernakulam1':{['edappaly', 'vytilla', 'hmt', 'kakkanad']},
//    {
//    'Ernakulam1':{['edappaly', 'vytilla', 'hmt', 'kakkanad']},
//    {
//    'Ernakulam1':{['edappaly', 'vytilla', 'hmt', 'kakkanad']},
//  ];
//
//
//window.onload = function() {
//  var districtSel = document.getElementById("district");
//  var branchSel = document.getElementById("branch");
//
//  for (var x in data) {
//    districtSel.options[districtSel.options.length] = new Option(x, x);
//  }
//  districtSel.onchange = function() {
//  //empty
//    branchSel.length = 1;
//    //display correct values
//    for (var y in data[this.value]) {
//      branchSel.options[branchSel.options.length] = new Option(y,y);
//    }
//  }
//}
var data = {
  "Ernakulam": {
    "vytila":["bank1","bank2"],
    "kakkanad": ["bank1","bank2"],
    "aluva": ["bank1","bank2"]
  },
  "Thrissur": {
    "irinjalakuda": ["bank1","bank2"],
    "thriprayar": ["bank1","bank2"]
  },
    "palakkad": {
    "ottapalam": ["bank1","bank2"],
    "shoranur": ["bank1","bank2"]
  },

}
window.onload = function() {
  var districtSel = document.getElementById("district");
  var branchSel = document.getElementById("branch");
  var subSel = document.getElementById("subbranch");
  for (var x in data) {
    districtSel.options[districtSel.options.length] = new Option(x, x);
  }
  districtSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    subSel.length = 1;
    branchSel.length = 1;
    //display correct values
    for (var y in data[this.value]) {
      branchSel.options[branchSel.options.length] = new Option(y, y);
    }
  }
  branchSel.onchange = function() {
    //empty Chapters dropdown
    subSel.length = 1;
    //display correct values
    var z = data[districtSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      subSel.options[subSel.options.length] = new Option(z[i], z[i]);
    }
  }
}