<template>
  <nav>
    <v-app-bar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn class="titelTxt" text router to="/">electo</v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-items class="caption">
            <v-btn text router to="/team">Team</v-btn>
            <v-btn text router to="/product">Products</v-btn>
        </v-toolbar-items>

      
        <!--Nav Icon-->
        <v-btn icon>
            <v-icon v-bind:class="{ notifi: show }" @click="productsList = !productsList" >{{cardIcon}}</v-icon>
            <p class="countNumber" v-bind:class=" { counter: hide }">{{count}}</p>
        </v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="productsList" app class="indigo" right>
        <v-list>
            <v-list-item v-for="(todo,index) in todos" :key="todo.id">
                <v-list-item-action>
                    <v-icon left class="white--text">mdi-wallet-giftcard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{todo.title}} {{todo.price}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon right class="white--text" @click="removeItem(index,todo.id)">(X)</v-icon>
                </v-list-item-action>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="white--text">
                        tota Item Selected: {{count}} price: {{totalItem}}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>


    <v-navigation-drawer v-model="drawer" app class="indigo">
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon left class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    
  </nav>
</template>

<script>
    import {G_event} from '../main';

    export default{
        data() {
            return {
                cardIcon: 'mdi-cart-off',
                drawer: false,
                productsList: false,
                show: false,
                hide: true,
                productName:'',
                newTodoLi: '',
                addCardTxt: '',
                idForTodo: 1,
                productId: 0,
                count: 0,
                links: [
                    { icon: 'mdi-home-circle', text: 'Home', route: '/'},
                    { icon: 'mdi-wallet-giftcard', text: 'Product', route: '/product'},
                    { icon: 'mdi-account-card-details', text: 'Team', route: '/team'}
                ],
                todos: [
                    // { id: 1, title: 'product 1', completed: false },
                    // { id: 2, title: 'product 2', completed: false },
                    // { id: 3, title: 'product 3', completed: false },
                ],
            }

        },
        created(){
            G_event.$on('notify',(data)=>{
                this.show= true;
                this.hide= false,
                this.cardIcon= 'mdi-cart'
                this.count++;
                this.todos.push({
                    id: data.id,
                    title: data.name,
                    price: data.price,
                    completed: false
                });

            });
        },
        computed: {
            totalItem: function(){
            let sum = 0;
            this.todos.forEach(function(item) {
                sum += (parseFloat(item.price));
            });

            return sum;
        }
        },
        methods: {
            removeItem(index,itmId){
                this.todos.splice(index, 1);
                this.count--;
                if(this.todos==''){
                this.show = false;
                this.hide = true;
                this.cardIcon= 'mdi-cart-off';
                }
                G_event.$emit('change', itmId );
            }
            
        }
    }
</script>

<style lang="scss">
    .notifi{
        font-size: 30px!important;
        color: red!important;
    }
    .countNumber{
        font-size: 15px;
        color: #54350d;
        background-color: #baef67;
        border-radius: 26%;
        padding: 1px;
    }
    .counter{
        display: none;
    }
</style>