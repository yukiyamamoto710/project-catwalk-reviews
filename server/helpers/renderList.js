const renderList= (product, reviews, page, count) => {
  let rendered = {};
  let offset = 0;
  if (page > 1) {
    offset = count * (page - 1)
  }
  rendered.product = product;
  rendered.page = page;
  rendered.count = count;
  let returnedReviews = reviews.slice(offset).slice(0, count)
  rendered.results = returnedReviews;
  return rendered;
}

module.exports = renderList;