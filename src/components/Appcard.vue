<script>
import axios from 'axios';
import { store } from './store';

export default {

    data() {
        return {
            store,
        }

    },
    mounted() {
        this.getinfo();
    },
    methods: {
        getinfo() {
            axios.get(this.store.apiUrl).then(risultato => {
                this.store.Info = risultato.data;

            });


        },
        stampa() {
            axios.get("https://api.openbrewerydb.org/v1/breweries/search?query=" + this.store.Text + "&per_page=10").then((riscrivi) => {
                this.store.Info = riscrivi.data
                console.log(riscrivi);
            }
            )
        }
    }
}


</script>


<template>
    <section id="wrapper">
        <div id="container" v-for="cards in this.store.Info">
            <img :src="cards.id" alt="img">
            <h2>{{ cards.name }}</h2>

            <h3> {{ cards.city }}</h3>

            <p>{{ cards.brewery_type }}</p>

            <p>{{ cards.phone }}</p>

            <span>{{ cards.country }}</span>

        </div>
        <input v-model="store.Text" type="text" placeholder="Cerca per nome...">
        <button @click="stampa(riscrivi)" id="pulsante">Cerca</button>
    </section>
</template>


<style scoped>
#wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: rgb(3, 92, 55);
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

#container {
    display: flex;
    background-color: rgb(191, 192, 192);
    width: 19%;
    height: 30%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid rgb(106, 107, 107);
}
</style>