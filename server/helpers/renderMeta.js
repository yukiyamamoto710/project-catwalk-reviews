const renderMeta = (product_id, res) => {
  let results = {};
  results.product_id = product_id;

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

module.exports = renderMeta;
