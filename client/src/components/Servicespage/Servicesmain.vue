<template>
  <div class="service">
    <!-- <img src="path/to/your/image.png" class="floating-image">-->
    <div class="elliptical-gradient"></div>
    <!-- service Section -->
      <div class="service-section">
        <span class="text-wrapper-4">Product</span><br />
        <span class="text-wrapper-3">Designs that reflect the soul of your product.
          <i class="floating-star-1">
                <img src="../../assets/Star.png" class="floating-star" width="80" height="80">
              </i>  
        </span>
        <p class="service-txt">
          <i class="floating-star-3"><img src="../../assets/Star.png" class="floating-star" width="50" height="50"></i>
          <i class="floating-star-2"><img src="../../assets/Star.png" class="floating-star" width="30" height="30"></i>
        </p>
      </div>
  </div>
  <div class="greenmumu">
    <p class="text-wrapper-5">MilkiMu</p>
    <p class="text-wrapper-6">Milkimu: Pure Nutrition, Perfectly Packed.</p>
    <img class="mumu" src="../../assets/services/mumu.png"/>
  </div>

</template>

<script>
export default {
  name: 'service',
};
</script>

<style scoped>
  /* service Section Styles */
  .service {
    background: #000000;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    box-sizing: border-box;
    align-items: center;
    position:relative;
  }

  .elliptical-gradient { 
    position: absolute;
    top: 0px;
    left: 0%;  
    width: 100%;  
    height: 100%; 
    background: radial-gradient(ellipse 25vw 25vw at 50% 50%, #A1CDFF99, #000000); 
    z-index: 3; 
    opacity: 0.6; 
  }

  .floating-star-1 { 
    position: absolute;
    right: 0px;
    top: -55px;
    z-index: 10; 
  }
  .floating-star-2 { 
    position: absolute;
    right: 0px ;
    z-index: 10; 
  }
  .floating-star-3 { 
    position: absolute;
    left: 0px;
    z-index: 10; 
  }

  .service-section{ 
    width: 100%; 
    height: 100%;
    background: #11120400;
    padding: 1px;
    z-index: 10;
    margin-top: 60px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-content: space-between;
    justify-content: center;
    padding: 1px;
    }

  .text-wrapper-3 {
    font-size: 40.1px;
    color: #ffffff;
    font-family: Outfit;
    font-weight: 700;
    line-height: 65.77px;
    letter-spacing: -0.03em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    position: relative; 
  }

  .text-wrapper-4 {
    font-size: 40.1px;
    color: #F0E002;
    font-family: Outfit;
    text-decoration: underline;
    font-weight: 500;
    line-height: 65.77px;
    letter-spacing: -0.03em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .service-txt{
    font-family: Outfit;
    color: #FFFFFFCC;
    width: 100%;
    max-width: 550px;
    font-size: 16.95px;
    font-weight: 400;
    line-height: 15.73px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    padding: 40px;
    position: relative;
  }
  
  .greenmumu{
    width: 100%;
    background-color: #767B5D;
    padding-top: 30px;
  }

  .text-wrapper-5 {
    width: 100%;
    font-size: 50.1px;
    color: #ffffff;
    font-family: Outfit;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  .text-wrapper-6  {
    font-family: Outfit;
    color: #FFFFFF;
    width: 100%;
    font-size: 26.95px;
    font-weight: 400;
    text-align: center;
    justify-content: center;
    padding-top: 0px;
    margin-top: 0px;
  }

  .mumu{
    max-width: 100%;
  }
  
/*Responsive Design*/
  @media (max-width: 799px) {
    .service { padding: 8px; }
    .elliptical-gradient {  background: radial-gradient(ellipse 70vw 70vw at 50% 23%, #A1CDFF99, #111204);  }
    .text-wrapper-4 { font-size: 42px; line-height: 43.77px;  /* Adjust if necessary */ } 
    .text-wrapper-3 { font-size: 45px; line-height: 44.77px;  /* Adjust if necessary */ }
    .service-txt{ padding-bottom: 10px; }
    .service-section { width: 100%;  flex-direction: column; }
  }
</style>