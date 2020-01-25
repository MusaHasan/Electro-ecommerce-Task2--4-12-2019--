<template>
    <v-col md="4">
        <v-card
            class="mx-auto"
            max-width="400">
        
            <v-img
                class="white--text align-end"
                height="200px"
                :src="require(`../../src/assets/${product.image}`)">

                <v-card-title class="nameTxt">
                    {{product.name}}
                </v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
                {{product.title}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
                <div>PRICE</div>

                <div>
                    <p class="price-wrap">
                        <span class="currency">{{ $root.changeCurrencyRoot }} </span>
                        <span class="price" id="pro1">{{ price }} </span>
                        <span class="tag">{{ currencyTag }}</span>
                    </p>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn 
                    color="orange"
                    text
                    @click="notify"
                >
                    {{massage}}
                </v-btn>

                <v-btn
                    color="orange"
                    text
                >
                    View Details
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-col>
</template>

<script>
    import {G_event} from '../main';

export default {
    props: {
        product: Object,
    },
    data: ()=>({
        massage: 'Add To Card',
        BDT: 1,
        USD: 0,
        INR: 0,
        JPY: 0,
        AUD: 0,
        EUR: 0,
        HKD: 0,
        IDR: 0,
        KRW: 0,
        MYR: 0,
        RUB: 0,
        SGD: 0,
        THB: 0,
        VND: 0,

        usdToUsd : 1,
        usdToBd : 85,
        usdToInd : 70.91,
        usdToJPY : 108.66,
        usdToAUD : 1.47,
        usdToEUR : 1.11,
        usdToHKD : 7.83,
        usdToIDR : 14034.54,
        usdToKRW : 1165.17,
        usdToMYR : 4.16,
        usdToRUB : 63.71,
        usdToSGD : 1.36,
        usdToTHB : 30.20,
        usdToVND : 23208.5,

        destinationPrice : 0,
        sourceCurrency: 0,
        finalPrice: 0,
        baseCurrency: 0,

        currencyTag: '',

        productNam: '',
    }),

    computed: {
        price() {
            if ( this.BDT == 1){
                this.sourceCurrency = 85;
                this.BDT = 0;     
            }
            else if (this.INR == 1 ){
                this.sourceCurrency = 70.91;
                this.INR=0;      
            }
            else if (this.USD == 1){
                this.sourceCurrency = 1;
                this.USD=0;
            }
            else if (this.JPY == 1 ){
                this.sourceCurrency = 108.66;
                this.JPY = 0;
            }
            else if (this.AUD == 1){
                this.sourceCurrency = 1.47;
                this.AUD = 0;
            }
            else if (this.EUR == 1 ){
                this.sourceCurrency = 1.11;
                this.EUR = 0;
            }
            else if (this.HKD == 1){
                this.sourceCurrency = 7.83;
                this.HKD = 0;
            }
            else if (this.IDR == 1 ){
                this.sourceCurrency = 14034.54;
                this.IDR = 0;
            }
            else if (this.KRW == 1){
                this.sourceCurrency = 1165.17;
                this.KRW = 0;
            }
            else if (this.MYR == 1 ){
                this.sourceCurrency = 4.16;
                this.MYR = 0;
            }
            else if (this.RUB == 1){
                this.sourceCurrency = 63.71;
                this.RUB = 0;
            }
            else if (this.SGD == 1 ){
                this.sourceCurrency = 1.36;
                this.SGD = 0;
            }
            else if (this.THB == 1){
                this.sourceCurrency = 30.20;
                this.THB = 0;
            }
            else if (this.VND == 1 ){
                this.sourceCurrency = 23208.50;
                this.VND = 0;
            }

            if(this.$root.changeCurrencyRoot == 'BDT'){
                this.destinationPrice = this.usdToBd;
                this.BDT = 1;
                 this.currencyTag= 'tk' ;
            }
            else if (this.$root.changeCurrencyRoot == "INR"){
                this.destinationPrice = this.usdToInd;
                this.INR = 1;
                 this.currencyTag= 'Rp' ;
            }
            else if (this.$root.changeCurrencyRoot == "USD"){
                this.destinationPrice = this.usdToUsd;
                this.USD = 1; 
                 this.currencyTag= '$' ; 
            }else if (this.$root.changeCurrencyRoot == "JPY"){
                this.destinationPrice = this.usdToJPY;
                this.JPY = 1;
                this.currencyTag= '¥' ;
            }else if (this.$root.changeCurrencyRoot == "AUD"){
                this.destinationPrice = this.usdToAUD;
                this.AUD = 1;
                this.currencyTag= '$' ;
            }else if (this.$root.changeCurrencyRoot == "EUR"){
                this.destinationPrice = this.usdToEUR;
                this.EUR = 1;
                this.currencyTag= '€' ;
            }else if (this.$root.changeCurrencyRoot == "HKD"){
                this.destinationPrice = this.usdToHKD;
                this.HKD = 1;
                this.currencyTag= '$' ;
            }else if (this.$root.changeCurrencyRoot == "IDR"){
                this.destinationPrice = this.usdToIDR;
                this.IDR = 1;
                this.currencyTag= 'RP' ;
            }else if (this.$root.changeCurrencyRoot == "KRW"){
                this.destinationPrice = this.usdToKRW;
                this.KRW = 1;
                this.currencyTag= '₩' ;
            }else if (this.$root.changeCurrencyRoot == "MYR"){
                this.destinationPrice = this.usdToMYR;
                this.MYR = 1;
                this.currencyTag= 'RM' ;
            }else if (this.$root.changeCurrencyRoot == "RUB"){
                this.destinationPrice = this.usdToRUB;
                this.RUB = 1;
                this.currencyTag= 'р.' ;
            }else if (this.$root.changeCurrencyRoot == "SGD"){
                this.destinationPrice = this.usdToSGD;
                this.SGD = 1;
                this.currencyTag= '$' ;
            }else if (this.$root.changeCurrencyRoot == "THB"){
                this.destinationPrice = this.usdToTHB;
                this.THB = 1;
                this.currencyTag= '$' ;
            }else if (this.$root.changeCurrencyRoot == "VND"){
                this.destinationPrice = this.usdToVND;
                this.VND = 1;
                this.currencyTag= '$' ;
            }

            this.productNam = this.product.name;
            var PriceOfProduct = this.product.price;
            this.baseCurrency = PriceOfProduct / this.sourceCurrency;
            this.finalPrice = this.baseCurrency * this.destinationPrice;

            if(this.$root.changeCurrencyRoot=='BDT'){
                this.product.price = this.finalPrice.toFixed(0);
                return this.product.price; 
            }
            else{
                this.product.price = this.finalPrice.toFixed(2);
                return this.product.price;
            }
            
        }
    },
    created(){
        G_event.$on('change',(removedId)=>{
                if(this.product.id == removedId ){
                    this.massage = 'Add To Card';
                }
            });
    },
    methods:{
        notify: function(){
            if(this.massage!='Added'){
                this.massage="Added"
                G_event.$emit('notify', { name: this.productNam, price: this.product.price, id: this.product.id });
            }
            else{ 
                alert('Already Added to Card..')
            }
        }

    }
}
</script>
<style scoped>

    .nameTxt{
        color: rgb(245, 154, 94);
    }
    .nameTxt:hover{
        background-color: rgba(22, 46, 73, 0.603);
    }

</style>