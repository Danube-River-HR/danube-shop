export default connect(mapStateToProps, {
  getProductData,
  getRelatedProducts,
  getProductStyles,
  getAverageRating,
  fetchAllProductData
})(App);


// <--------------------------------------->

const mapDispatchToProps = {
  getProductData,
  getRelatedProducts,
  getProductStyles,
  getAverageRating,
  fetchAllProductData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);