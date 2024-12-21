
<template>
    <div class="search-bar-container">
      <input 
        type="text" 
        placeholder="Search products..." 
        class="search-bar"
        v-model="searchQuery">
      <!-- <button class="search-button" @click="filterProducts">Search</button> -->
      <i class="far fa-user-circle" style="font-size: 5vh; margin-left: 6px"></i>
    </div>
  
    <div class="head">Product</div>
    <section class="container">
      <div 
        class="Product" 
        v-for="product in filteredProducts" 
        :key="product.id"
        @click="navigateToProduct(product.id)">
        <div class="Productimage">
          <img :src="product.image" :alt="product.name">
        </div>
        <div class="Productcontent">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="rating">
            <span>{{ product.rating }} ★</span>
          </div>
          <div class="price">
            <span class="amount">₹{{ product.amount }}</span>
            <span class="original">₹{{ product.original }}</span>
            <span class="discount">{{ product.discount }}% Off</span>
          </div>
          <p class="delivery">{{ product.delivery }}</p>
        </div>
      </div>
    </section>
      
  <div class="pagination">
    <div class="pagination-left">
      <span>Page 1 of 12</span>
    </div>
    
    <div class="pagination-center">
      <div class="page-numbers">
        <span class="page-number">1</span>
        <span class="page-number">2</span>
        <span class="page-number">3</span>
        <span class="page-number">4</span>
        <span class="page-number">5</span>
        <span class="page-number">6</span>
        <span class="next">Next</span>
      </div>
    </div>
  </div>
    
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        products: [],
        filteredProducts: []
      };
    },
    methods: {
      addProduct(product) {
        this.products.push(product);
        this.filterProducts(); // Update filtered list
      },
      filterProducts() {
        const query = this.searchQuery.toLowerCase();
        this.filteredProducts = this.products.filter(product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
        );
      },
      navigateToProduct(id) {
        this.$router.push(`/products/${id}`);
      },
    },
    mounted() {
      // Initialize with sample data
      const initialProducts = [
        {
          id: 1,
          image: require('@/assets/product/p1.jpeg'),
          name: "Fundoosh Energy ",
          description: "250 ml",
          rating: 3.8,
          amount: 121,
          original: 300,
          discount: 55,
          delivery: "Free Delivery",
        },
        {
          id: 2,
          image: require('@/assets/product/p2.jpeg'),
          name: "Fundoosh SPICY NIMBU Shikanji",
          description: "200 ml",
          rating: 4.0,
          amount: 135,
          original: 500,
          discount: 44,
          delivery: "Free Delivery",
        },
        {
          id: 3,
          image: require('@/assets/product/p3.jpeg'),
          name: "JUST Orange",
          description: "400 ml",
          rating: 4.5,
          amount: 120,
          original: 400,
          discount: 32,
          delivery: "Free Delivery",
        },
        {
          id: 4,
          image: require('@/assets/product/p4.jpeg'),
          name: "Eco-Friendly Kraft Paper Bags",
          description: "400 ml",
          rating:3.7,
          amount: 193,
          original: 1000,
          discount: 84,
          delivery: "Free Delivery",
        },
        {
          id: 5,
          image: require('@/assets/product/p5.jpeg'),
          name: "NEW Ice Club ENERGY Drink",
          description: "200 * 150 ml",
          rating: 4.2,
          amount: 120,
          original: 200,
          discount: 14,
          delivery: "Free Delivery",
        },
        {
          id: 6,
          image: require('@/assets/product/p6.jpeg'),
          name: "JOY",
          description: "150 ml",
          rating: 3.8,
          amount: 30,
          original: 90,
          discount: 14,
          delivery: "Free Delivery",
        },
        {
          id: 7,
          image: require('@/assets/product/p7.jpeg'),
          name: "JOY Fruitca",
          description: "400 * 4 ml",
          rating: 4.1,
          amount: 580,
          original: 1700,
          discount: 74,
          delivery: "Delivery Charge 45+",
        },
        {
          id: 8,
          image: require('@/assets/product/p8.jpeg'),
          name: "CITY-DA ZEERA",
          description: "300 ml",
          rating: 4.0,
          amount: 120,
          original: 500,
          discount: 94,
          delivery: "Free Delivery",
        },
      ];
  
      initialProducts.forEach(product => this.addProduct(product));
    }
  };
  </script>
  
  <style scoped>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .search-bar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 20px 0; */
    /* margin: auto; */
    padding: auto;
    margin-top: 20px;
  }
  
  .search-bar {
    width: 50%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 25px;
    
  }
  
  .search-button {
    padding: 10px 20px;
    font-size: 16px;
    /* margin-left: 10px; */
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #218838;
  }
  
  /* Centered Header Styling */
  .head {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
    text-decoration: underline
  }
  
  /* Centered Container Styling */
  .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: auto;
  margin: auto;
  }
  
  /* Product Card Styling */
  .Product {
    cursor: pointer;
    width: 23%;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* align-items: center;
    text-align: center; */
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .Productimage img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  
  .Productcontent h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: blue;
  }
  
  .Productcontent p {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .rating {
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    border: 1px solid #28a745;
    border-radius: 5px;
    display: inline-block;
    background-color: #28a745;
  }
  .rating span {
  color: white; 
  font-size: 14px;
  font-weight: bold;
}

  
.price {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

  
  .price .amount {
    font-size: 18px;
    font-weight: bold;
    color: #000;
  }
  
  .price .original {
    font-size: 14px;
    text-decoration: line-through;
    color: #888;
    margin-top: 5px;
  }
  
  .price .discount {
    font-size: 14px;
    color: #e53935;
    font-weight: bold;
    margin-top: 5px;
  }
  
  .delivery {
    font-size: 14px;
    color: black;
    font-weight: bold;
  }

 /* Pagination */

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  margin-top: 20px;
}
.pagination-left {
  text-align: center;
  /* align-items: center; */
  flex: 1;
  font-size: 18px;
  font-weight: bold;
}



.pagination-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex:2; 
  font-size: 18px;
  font-weight: bold;
  /* margin-left: 10px; */
  
}

.page-numbers {
  display: flex;
  
}

.page-number {
  margin: 0px 15px;
  cursor: pointer;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  

}

.page-number:hover {
  text-decoration: underline;
  background-color: #28a745;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
}

.next {
  cursor: pointer;
  font-weight: bold;
}

.next:hover {
  text-decoration: underline;
  background-color: #28a745;
  width: auto;
  height: auto;
  border-radius: 10%;
  text-align: center;
}


/* Responsive Design for Mobile */
@media (max-width: 768px) {
  .Product {
    width: 48%;  /* Show two products per row */
  }

  .container {
    padding: 10px;
    margin: 10px;
  }

  .pagination {
    flex-direction: column;  /* Stack pagination elements vertically on small screens */
    align-items: center;
  }

  .pagination-left, .pagination-center {
    text-align: center;
    font-size: 14px;  /* Adjust font size for mobile view */
  }

  .page-number {
    font-size: 16px;  /* Smaller font size for mobile view */
    /* margin: 0px 10px; */
  }

  .next {
    font-size: 14px;  /* Adjust font size for mobile view */
  }
}

/* Responsive Design for Smaller Devices */
@media (max-width: 480px) {
  .Product {
    width: 100%;  /* Show one product per row on very small screens */
  }

  .pagination {
    flex-direction: column;
  }

  .pagination-left, .pagination-center {
    font-size: 12px;  /* Further reduce font size for very small screens */
  }

  .page-number {
    font-size: 12px;  /* Further reduce font size for very small screens */
  }

  .next {
    font-size: 12px;  /* Further reduce font size for very small screens */
  }
}
  
  </style>
  