const ShopCollectionSelector = (collection) => {
  return collection
    ? Object.keys(collection).map((key) => {
        console.log(key);
        return collection[key];
      })
    : null;
};
export default ShopCollectionSelector;
