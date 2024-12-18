<template>
  <div class="hero">
    <!-- <img src="path/to/your/image.png" class="floating-image"> -->
    <div class="elliptical-gradient"></div>
    <!-- Hero Section -->
      <div class="hero-section">
            <span class="text-wrapper-3">
              Building Brand Image
            </span>
            <span class="text-wrapper-4">Passionately <i class="fa fa-star floating-star-1"></i></span>
              <p class="hero-txt">We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.</p>
              <button class="cta-button" @click="exploreMore">
                <i class="fa fa-star floating-star-3"></i>
                Explore More 
                <i class="fa fa-star floating-star-2"></i>
              </button>
      </div>

    <!-- Brand Box -->
    <div class="brand-container">
      <div class="brand-txt">
        <div class="line-small"></div>
          TRUSTED BY AMAZING BRANDS 
        <div class="line-small"></div>
      </div>
      <div class="brand-box">
        <img src="@/assets/homepage/Hero/1.png">
        <img src="@/assets/homepage/Hero/2.png">
        <img src="@/assets/homepage/Hero/3.png">
        <img src="@/assets/homepage/Hero/4.png">
        <img src="@/assets/homepage/Hero/5.png">
      </div>
    </div>

    <!-- Divider Line -->
      <div class="line"></div>

    <!-- Second Hero Section -->
      <div class="hero-section2">
        <div class="half">
          <h5>How we Work</h5>
          <p class="big">Get a dedicated design team at a fraction of the cost.</p>
        </div>
        <div class="half">
          <p class="normal">
            Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.
          </p>
          <button class="cta-button" @click="exploreMore">See More</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
methods: {
  exploreMore() {
    const target = document.querySelector('.hero-section2');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
};
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  background: #111204;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  position:relative;
}

.elliptical-gradient { 
  position: absolute; /* Absolute positioning within the parent */ 
  top: 0px; /* Adjust top position relative to the parent */ 
  left: 0%; /* Adjust left position relative to the parent */ 
  width: 100%; /* Width of the gradient area */ 
  height: 100%; /* Height of the gradient area */ 
  background: radial-gradient(ellipse 25vw 25vw at 50% 23%, #A1CDFF99, #111204); 
  z-index: 3; /* Ensure it appears on top */ 
  opacity: 0.6; /* Optional: Set opacity for blending effect */ 
}

.floating-star-1 { 
  position: absolute;
  left: 100%;
  margin-left: 5px;
  font-size: 40px; /* Size of the icon */ 
  color: gold; /* Color of the icon */ 
  z-index: 10; /* Ensure it is on top */ 
}
.floating-star-2 { 
  position: absolute;
  left: 100%;
  margin-left: 10vw;
  font-size: 15px; /* Size of the icon */ 
  color: gold; /* Color of the icon */ 
  z-index: 10; /* Ensure it is on top */ 
}
.floating-star-3 { 
  position: absolute;
  right: 100%;
  margin-right: 10vw;
  font-size: 11px; /* Size of the icon */ 
  color: gold; /* Color of the icon */ 
  z-index: 10; /* Ensure it is on top */ 
}

.hero-section{ 
width: 100%; 
height: 24vw;
background: #11120400;
opacity: 0px;
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

.hero-section2 {
flex: 1;
width: 90%;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
align-self: center;
justify-content: space-between;
justify-content: center;
gap: 20px;
padding: 1px;
z-index: 10;
}

.text-wrapper-3 {
  font-size: 77.1px;
  color: #ffffff;
  font-family: Outfit;
  font-weight: 700;
  line-height: 65.77px;
  letter-spacing: -0.03em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.text-wrapper-4 {
  font-size: 77.1px;
  color: #F0E002;
  font-family: Outfit;
  font-style: italic;
  font-weight: 700;
  line-height: 65.77px;
  letter-spacing: -0.03em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  position: relative; /* Relative positioning for the parent */
}

.hero-txt{
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
}

.cta-button {
color: #000000;
border: none;
padding: 12px 25px;
font-size: 1rem;
border-radius: 5px;
cursor: pointer;
background: #F0E002;
transition: all 0.3s ease;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
position: relative;
}

.cta-button:hover {
background: #F0E002;
}

/* Brand-Box */
.brand-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers items horizontally */
  width: 90%;
  z-index: 10;
}

.brand-txt {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  font-family: "Outfit-Bold", Helvetica;
  font-size: 17.8px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 0.3px;
  text-align: center;
  align-items: center;
  width: 100%;
  padding: 1px;
  margin-bottom: 20px;
  justify-content: center; /* Centers text and lines within the container */
}

.brand-box {
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; /* Centers items horizontally */ 
  align-items: center; 
  width: 100%; 
  background-color: #222222; 
  border: 1px solid #333; 
  padding: 2px; 
  margin: 0 0; 
  border-radius: 20px; 
  column-gap: 7vw; /* Gap proportional to the viewport width */ 
  row-gap: 2vw;
} 
.brand-box img { 
  width: 8vw; /* Width proportional to the viewport width */ 
  min-width: 80px; /* Minimum width to ensure images don't get too small */ 
  padding: 1vw; /* Padding proportional to the viewport width */
}

.line {
  border-bottom: 3px solid #F0E002;
  margin: 20px 0;
  width: 90%;
  z-index: 10;
}

.line-small {
  border-bottom: 3px solid #F0E002;
  width: 3vw;
  margin-left: 1vw;
  margin-right: 1vw;
  z-index: 10;
}


/* Second Hero Section */
.half {
flex: 1;
padding: 20px;
}

.hero-section2 h5 {
font-size: 0.8rem;
font-weight: bold;
color: #F0E002;
margin-bottom: 10px;
}

.big {
font-size: 1.9rem;
font-weight: bold;
color: #ffffff;
margin-bottom: 15px;
}

.normal {
font-size: 1rem;
color: #ffffff;
}

/* Responsive Design */
@media (min-width: 569px) and (max-width: 1068px){
  .elliptical-gradient {   background: radial-gradient(ellipse 60vw 60vw at 50% 23%, #A1CDFF99, #111204);  }

}

@media (max-width: 568px) {
  .hero { padding: 8px; }
  .elliptical-gradient {   background: radial-gradient(ellipse 80vw 80vw at 50% 23%, #A1CDFF99, #111204);  }
  .text-wrapper-4 { font-size: 42px; line-height: 43.77px;  /* Adjust if necessary */ } 
  .text-wrapper-3 { font-size: 45px; line-height: 44.77px;  /* Adjust if necessary */ }
  .hero-section, .brand-container { width: 100%; } 
  .brand-box {   column-gap: 2vw; /* Gap proportional to the viewport width */  }
  .brand-box img {   min-width: 70px; /* Minimum width to ensure images don't get too small */ }
  .brand-txt { font-size: calc(13.2px); line-height: calc(9.3px * 0.8); } 
  .hero-section2 h5 { font-size: calc(1.5rem * 0.8); /* Reduce by 20% */ } 
  .big { font-size: calc(2rem * 0.8); } /* Reduce by 20% */

.hero-section, .hero-section2 {
  flex-direction: column;
}

.normal {
  font-size: 1rem;
}

.hero-carousel {
  max-width: 100%;
}

img {
  max-width: 70px;
  max-height: 70px;
  text-align: center;
}
}
</style>