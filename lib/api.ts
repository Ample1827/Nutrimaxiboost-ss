export async function getProductById(id: string) {
    const response = await fetch(`https://your-api.com/products/${id}`);
    if (!response.ok) {
      return null; // Return null if the product is not found
    }
    return response.json();
  }
  
  // Example function to fetch all products (for static generation)
  export async function getAllProducts() {
    const response = await fetch('https://your-api.com/products');
    if (!response.ok) {
      return []; // Return an empty array if the fetch fails
    }
    return response.json();