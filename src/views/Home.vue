<template>
    <div class="home">

      <v-img src="../assets/banner.ed54c86f.png">
        <h1 class="subtitle-1 text-right black--text">Home Page</h1>
        
        <v-row align="center" color="red" class="text-center lightbox black--text pa-2 fill-height">
          
          <v-col>
            <div class="display-2">Electo</div>
          </v-col>

        </v-row>

      </v-img>

      <v-container>

        <v-row>
          <v-col md="12" class="productsHead">
            <h2> Products We Provide </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores,</p>
          </v-col>

          <v-row cols="12" md="12">
            <v-col md="6">
              <v-img class="watchImg"
              src="../assets/product1.png"
              width="80%"
              >
              </v-img>
            </v-col>
        
            <v-col md="6"  class="itemsTxt">
              <v-list-item-group class="listitem" >
                <v-list-item
                  v-for="item in items"
                  :key="item.text"
                  class="singItem"
                >
                  <span><hr class="line"></span>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    

      <v-container>

        <v-row>

          <v-col cols="12" md="6">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium corporis necessitatibus soluta harum beatae magnam.</p>
            
            <v-row align="center" justify="center">
              <v-img
                src="../assets/product5.jpg"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="500"
                max-height="300"
              ></v-img>
            </v-row>

          </v-col>

          <v-col cols="12" md="6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iure quia deleniti eligendi architecto</p>
            
            <v-row align="center" justify="center">
              <v-img
                  src="../assets/product6.png"
                  lazy-src="https://picsum.photos/id/11/10/6"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-width="500"
                  max-height="300"
              ></v-img>
            </v-row>

          </v-col>

        </v-row>

      </v-container>

    </div>

</template>

<script>
// @ is an alias to /src


  export default {
    data:()=>({
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    })
  }
</script>

<style lang="scss">
.productsHead{
  text-align: center;
  h2{ 
    font-size: 3rem;
    font-weight: lighter;
  }
  p{
    font-size: 1rem;
    font-weight: 300;
  }
}

.watchImg{
  margin-left: 3rem;
}
  .itemsTxt{
    width: 100%;
    position: relative;
  }
  .listitem{
    background-color: rgba(56, 163, 163, 0.007);
    position: relative;
    left: -140px;
    .singItem{
      margin: 4rem 0;
    }

    .v-list-item{
          font-size: 1.5rem;
          font-weight: 200;
        }
    .singItem:first-child{
        left: 70px;
      }
      .singItem:nth-child(2){
        left: 121px;
      }
      .singItem:nth-child(3){
        left: 140px;
      }
    .line{
      width: 140px;
      height: 2px;
      margin-right: 25px;
    }
  }

</style>
