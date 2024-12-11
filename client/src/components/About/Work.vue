<template>
    <div class="work-main bg-black text-white py-5">
        <!-- Header Section -->
        <div class="d-flex justify-content-center align-items-center vh-70vh">
            <div>
                <h1 class="fw-bold">How We Work</h1>
            </div>
        </div>

        <!-- Card Section -->
        <div class="d-flex justify-content-center align-items-center py-5">
            <!-- First Card -->
            <div class="card text-center mx-3 border-0 bg-black text-white" style="width: 18rem;">
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image 1">
                <div class="card-body">
                    <h5 class="card-title">Step 1</h5>
                    <p class="card-text">Description for the first step.</p>
                </div>
            </div>

            <!-- Arrow -->
            <div class="d-flex align-items-center">
                <i class="bi bi-arrow-right display-5 text-white"></i>
            </div>

            <!-- Second Card -->
            <div class="card text-center mx-3 border-0 bg-black text-white" style="width: 18rem;">
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image 2">
                <div class="card-body">
                    <h5 class="card-title">Step 2</h5>
                    <p class="card-text">Description for the second step.</p>
                </div>
            </div>

            <!-- Arrow -->
            <div class="d-flex align-items-center">
                <i class="bi bi-arrow-right display-5 text-white"></i>
            </div>

            <!-- Third Card -->
            <div class="card text-center mx-3 border-0 bg-black text-white" style="width: 18rem;">
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image 3">
                <div class="card-body">
                    <h5 class="card-title">Step 3</h5>
                    <p class="card-text">Description for the third step.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Work",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Love+Light&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Ensures the entire page has a black background */
.work-main {
    min-height: 70vh;
    background-color: black;
    color: white;
    font-family: 'Outfit', sans-serif;
}
</style>
