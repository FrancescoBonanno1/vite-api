<script>
import axios from 'axios';
import { store } from './store';

export default {

    data() {
        return {
            store
        }

    },
    mounted() {
        this.getinfo();
    },
    methods: {
        getinfo() {
            axios.get(this.store.apiUrl).then(risultato => {
                console.log(risultato);
            });
        },
    }
}


</script>


<template>
    <div>

    </div>
</template>


<style scoped></style>