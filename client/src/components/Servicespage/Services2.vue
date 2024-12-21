<template>
  <div id="app">
    <!-- Section 1 -->
    <section style="background-color: black; padding: 30px 20px;">
      <!-- Top Logos -->
      <div
        style="display: flex; justify-content: center; align-items: center; gap: 90px; margin-bottom: 30px; flex-wrap: wrap;"
      >
        <div style="display: flex; align-items: center; gap: 10px; color: white;">
          <img src="@/assets/slack.png" alt="Slack" style="width: 40px; height: 40px;" />
          <p style="margin: 0; font-size: 20px;">Slack</p>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; color: white;">
          <img src="@/assets/dropbox.png" alt="Dropbox" style="width: 40px; height: 40px;" />
          <p style="margin: 0; font-size: 20px;">Dropbox</p>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; color: white;">
          <img src="@/assets/shopify.png" alt="Shopify" style="width: 40px; height: 40px;" />
          <p style="margin: 0; font-size: 20px;">Shopify</p>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; color: white;">
          <img src="@/assets/blinkit.png" alt="Blinkit" style="width: 40px; height: 40px;" />
          <p style="margin: 0; font-size: 20px;">Blinkit</p>
        </div>
      </div>

      <!-- Milk Section -->
      <div
        style="display: flex; align-items: center; justify-content: space-around; padding: 40px; gap: 20px; background: linear-gradient(90deg, pink 50%, #fdf1c1 50%); border-radius: 20px; flex-wrap: wrap; width: 90%; margin: 0 auto;"
      >
        <img
          src="@/assets/milk.png"
          alt="Milk"
          style="width: 100%; max-width: 400px; border-radius: 20px;"
        />
        <div style="flex: 1; max-width: 500px;">
          <h2 style="font-size: 36px; font-weight: bold; color: black; margin-bottom: 20px;">
            Quality You Trust, <br />Purity You Deserve
          </h2>
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button
            style="background-color: #ffd700; border: none; padding: 10px 20px; font-size: 16px; font-weight: bold; color: black; cursor: pointer; border-radius: 5px;"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section
      style="background-color: white; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; padding: 20px;"
    >
      <!-- Cookies Section -->
      <img
        src="@/assets/cookies.png"
        alt="Cookies"
        style="width: 100%; max-width: 600px; border-radius: 10px; margin: auto;"
      />
      <div style="flex: 1; max-width: 400px; margin: auto; text-align: left;">
        <h2 style="font-size: 32px; font-weight: bold; color: black; margin-bottom: 20px;">
          Custom Design<br />And Print Services
        </h2>
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div
            style="display: flex; align-items: center; justify-content: space-between; background-color: black; border-radius: 10px; padding: 10px 15px; color: white;"
          >
            <div style="text-align: left;">
              <p style="font-size: 16px; font-weight: bold; margin: 0;">Burger Box</p>
              <button
                style="background-color: transparent; border: none; color: white; font-size: 12px; margin-top: 5px; text-decoration: underline; cursor: pointer;"
              >
                View More...
              </button>
            </div>
            <img
              src="@/assets/burger.jpg"
              alt="Burger Box"
              style="width: 70px; height: 70px; border-radius: 5px;"
            />
          </div>
          <div
            style="display: flex; align-items: center; justify-content: space-between; background-color: black; border-radius: 10px; padding: 10px 15px; color: white;"
          >
            <div style="text-align: left;">
              <p style="font-size: 16px; font-weight: bold; margin: 0;">Pizza Box</p>
              <button
                style="background-color: transparent; border: none; color: white; font-size: 12px; margin-top: 5px; text-decoration: underline; cursor: pointer;"
              >
                View More...
              </button>
            </div>
            <img
              src="@/assets/pizza.jpg"
              alt="Pizza Box"
              style="width: 70px; height: 70px; border-radius: 5px;"
            />
          </div>
          <div
            style="display: flex; align-items: center; justify-content: space-between; background-color: #ffd700; border-radius: 10px; padding: 10px 15px; color: black; width: 130px; text-align: center;"
          >
            <button
              style="background-color: transparent; border: none; padding: 5px 15px; font-size: 14px; font-weight: bold; cursor: pointer; width: auto; text-align: left; margin-left: 10px;"
            >
              View All
            </button>
          </div>
        </div>
      </div> 
    </section>
  </div>
</template>

<script>
export default {
  name: 'service',
};
</script>

<style scoped>



</style>