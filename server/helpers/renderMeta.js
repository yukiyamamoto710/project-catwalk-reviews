const renderMeta = (product_id, res) => {
  let results = {};
  const ratings = {};
  res.forEach(row => {
    if (ratings[row.rating]) {
      ratings[row.rating]++;
    } else {
      ratings[row.rating] = 1;
    }
  })
  results.ratings = ratings;
  const recommend = {};
  res.forEach(row => {
    if (recommend[row.recommend]) {
      recommend[row.recommend]++;
    } else {
      recommend[row.recommend] = 1;
    }
  })
  results.recommended = recommend;
  return results;
}

// var res = [
//   { id: '148740', rating: 2, recommend: true },
//   { id: '148741', rating: 3, recommend: true },
//   { id: '148742', rating: 4, recommend: true },
//   { id: '148743', rating: 5, recommend: true },
//   { id: '148744', rating: 5, recommend: true }
// ];
// var product_id = 25811;

// console.log(renderMeta(product_id, res));