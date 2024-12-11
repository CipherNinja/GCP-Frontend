<template>
    <div class="main-container">
        <!-- Render the Header component -->
        <Header />

        <!-- Render the API response in a paragraph -->
        <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

        <!-- Render other components -->

        <Work />
        <!-- Render the Footer component -->
        <Footer />
    </div>
</template>

<script>
// Import the component
import Header from '@/components/Homepage/Header.vue';
import Footer from '@/components/Homepage/Footer.vue';

// Import Axios
import axios from 'axios';
import Work from '@/components/About/Work.vue';


export default {
    name: 'HomePageView',
    components: {
        Header,
        Work,
        Footer
    },
    data() {
        return {
            message: null, // This will hold the message fetched from the API
        };
    },
    methods: {
        // Method to fetch data from the API
        fetchMessage() {
            axios.get('/api/message') // This will be proxied to http://localhost:7000/api/message
                .then(response => {
                    this.message = response.data.message; // Set the message data from the API
                })
                .catch(error => {
                    console.error('Error fetching the message:', error);
                });
        },
    },
    created() {
        // Call the fetchMessage method when the component is created
        this.fetchMessage();
    },
};
</script>

<style scoped>
/* Ensuring the footer stays at the bottom */
.main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Ensures the container takes up full height */
}

footer {
    margin-top: auto;
    /* Pushes the footer to the bottom */
}
</style>