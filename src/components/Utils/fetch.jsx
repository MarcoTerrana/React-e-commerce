export const getCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories/");
    const data = await response.json();
    console.log(data);
    return data;
  };