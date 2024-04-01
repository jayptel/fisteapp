document.addEventListener('DOMContentLoaded', async () => {
  const addProductForm = document.getElementById('addProductForm');
  const productList = document.getElementById('productList');
  const addButton = document.getElementById('addButton');
  const updateButton = document.getElementById('updateButton');
  let selectedProductId = null;

  // Function to fetch and display all products
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const products = await response.json();
      productList.innerHTML = ''; // Clear the list
      products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `ID: ${product._id}
                        Name: ${product.name}  
                        Quantity: ${product.qty}  
                        Price: ${product.price}`;
        
        // Create Update Button
        const updateButtonElem = document.createElement('button');
        updateButtonElem.textContent = 'Update';
        updateButtonElem.addEventListener('click', () => {
          // Fill form with selected product data
          document.getElementById('name').value = product.name;
          document.getElementById('qty').value = product.qty;
          document.getElementById('price').value = product.price;
          selectedProductId = product._id;
          addButton.disabled = true;
          updateButton.disabled = false;
        });

        // Create Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deleteProduct(product._id);
        });

        li.appendChild(updateButtonElem);
        li.appendChild(deleteButton);
        productList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to add a new product
  const addProduct = async (data) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        addProductForm.reset();
        fetchProducts(); // Refresh the product list
        
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Function to update a product
  const updateProduct = async () => {
    try {
      const formData = new FormData(addProductForm);
      const data = {
        name: formData.get('name'),
        qty: formData.get('qty'),
        price: formData.get('price')
      };
      const response = await fetch(`/api/products/${selectedProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        addProductForm.reset();
        fetchProducts(); // Refresh the product list
        addButton.disabled = false;
        updateButton.disabled = true;
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Function to delete a product
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        addProductForm.reset();
        fetchProducts(); // Refresh the product list
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Event listener for add product form submission
  addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addProductForm);
    const data = {
      name: formData.get('name'),
      qty: formData.get('qty'),
      price: formData.get('price')
    };
    await addProduct(data);
  });

  // Event listener for update button click
  updateButton.addEventListener('click', async () => {
    await updateProduct();
  });

  // Fetch and display products initially
  fetchProducts();
});
