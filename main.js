function infiniteLoop(arr,d,n){
  const len = arr.length;
  
  //coding here...
  for ( let i = 0; i < n; i++) {
    if (d === "left") {
    const temp1 = arr[1].shift();
    arr[3].push(temp1);
    
    const temp2 = arr[2].shift();
    arr[1].push(temp2);
    
    const temp3 = arr[3].shift();
    arr[2].push(temp3);
    
  } else if (d === "right") {
    const temp1 = arr[1].pop();
    arr[2].unshift(temp1);
    
    const temp2 = arr[2].pop();
    arr[3].unshift(temp2);
    
    const temp3 = arr[3].pop();
    arr[1].unshift(temp3);
    
    }
  }

  
  return arr;
}