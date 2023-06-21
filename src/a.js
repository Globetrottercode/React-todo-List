var minimumCost = function (cost) {
  cost.sort((a, b) => {
    return b - a;
  });
  let minCost = 0;
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 === 0) {
      continue;
    } else {
      minCost = minCost + cost[i];
    }
  }
  return minCost;
};

console.log(minimumCost([1, 2, 3]));
