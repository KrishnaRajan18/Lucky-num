
function starOutGrid(grid) {
    indicies = [];
  
    for (let i of grid) {
      if (i.includes("*")) {
        for (let j of i) {
          if (j === "*") {
            indicies.push(i.indexOf(j));
          }
        }
        i.fill("*", 0, i.length - 1);
      }
    }
  
    for (let i of indicies) {
      for (let j of grid) {
        j[i] = "*";
      }
    }
  
    return grid;


    
  }