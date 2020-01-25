<template>
    <v-col md="3" class="memberBody">
        <v-card class="memberCrd">
            <v-avatar class="mt-2" size="190" min-width="-webkit-fill-available"  height="220">
                <img class="memberImage"  :src="require(`../../src/assets/${member.image}`)" alt="">
            </v-avatar>
            
            <v-card-title class="justify-center">
                    {{member.name}}
            </v-card-title>
            <v-card-text>
                <div class="grey--text px-3" align="center">{{member.position}}</div>
            </v-card-text>
            <v-col align="center">
                <v-icon right>mdi-github-face</v-icon>
                <v-icon right>mdi-linkedin</v-icon>
                <v-icon right>mdi-twitter</v-icon>
            </v-col>

        </v-card>
    </v-col>
</template>

<script>
export default {
    props:{
        member: Object
    }
}
</script>

<style>

    .memberImage{
    border-radius: 50% !important;
    border: 1px solid rgba(0, 139, 139, 0.589);
    height: 226px;
    padding: 2px;
    }
    .memberBody{
        flex: 0 0 20%;
        max-width: 25%;
    }
    .memberCrd:hover{
        border: 1px solid rgb(13, 107, 201);
        height: 100%;
        box-shadow: 1rem 1rem 1rem #2563406e;;
    }
</style>   