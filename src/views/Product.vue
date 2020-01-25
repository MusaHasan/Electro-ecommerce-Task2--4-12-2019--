<template>
  <div class="product">
    <h1 class="subtitle-1 grey--text">Product page</h1>
    
    <v-container class="my-3">
      <h1>Please checkout out latest product </h1>

      <v-row>
        <v-col md="8">
          
        </v-col>
        <v-col md='4'>
          <h3 class="currencyTitle">change currency: </h3>
          <select v-model="selected" v-on:change="changeItem" id="selectCurrency">
            <option value="">BDT</option>
            <option>INR</option>
            <option>USD</option>
            <option>AUD</option>
            <option>EUR</option>
            <option>HKD</option>
            <option>IDR</option>
            <option>KRW</option>
            <option>MYR</option>
            <option>RUB</option>
            <option>SGD</option>
            <option>THB</option>
            <option>VND</option>
          </select>
        </v-col>
      </v-row>

      <v-row>
        <Products v-for="product in products" :key="product.title" :product="product" /> 
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
  import Products from '../../src/components/ProductModel'
  export default {
    components:{
      Products
    },

    data: () => ({
      products: [
        { id:1, image: 'product1.png', title: 'product 1', name: 'Watch', price:'1', currency: 'BDT', tag: 'tk'},
        { id:2, image: 'product2.png', title: 'product 2', name: 'Watch', price:'2', currency: 'BDT', tag: 'tk'},
        { id:3, image: 'product3.png', title: 'product 3', name: 'Monitor', price:'3', currency: 'BDT', tag: 'tk'},
        { id:4, image: 'product4.png', title: 'product 4', name: 'Ipod', price:'9', currency: 'BDT', tag: 'tk'},
        { id:5, image: 'product5.jpg', title: 'product 5', name: 'Gaming', price:'8', currency: 'BDT', tag: 'tk'},
        { id:6, image: 'product6.png', title: 'product 6', name: 'Laptop', price:'7', currency: 'BDT', tag: 'tk'}
      ],
      selected: ''
      }),

    methods: {
      changeItem: function(){
        var selectItem = document.getElementById('selectCurrency');
        var destinationCurrency = selectItem.options[selectItem.selectedIndex].text;
        this.$root.changeCurrencyRoot = destinationCurrency;  
      }
    }   
  }
</script>
<style scoped>
.currencyTitle{
  display: inline;
}
</style>

