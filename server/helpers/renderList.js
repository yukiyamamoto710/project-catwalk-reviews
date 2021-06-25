const renderList= (product, review, page, count) => {
  let rendered = {};
  rendered.product = product;
  rendered.page = page;
  rendered.count = count;
  rendered.results = review;
  return rendered;
}

module.exports = renderList;