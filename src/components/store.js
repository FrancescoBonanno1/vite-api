import { reactive } from 'vue'

export const store = reactive({
    Text: "",
    apiUrl: "https://api.openbrewerydb.org/v1/breweries?by_country=austria&per_page=10",
    Info: []
});