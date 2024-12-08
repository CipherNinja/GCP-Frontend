<template>
  <div>
    <p class="m-head">Get In Touch</p>
    <p class="m-txt">We are here for you! How can we help?</p> 
  </div>  
  <div class="main">

    <div class="form">
      <!--Form-->
      <div class="user-faq">
        <form >
          <div class="user-form">
            <textarea v-model="userQuestion" placeholder="Ask us what you want to know..." required></textarea>
          </div>
                
        </form>
      </div>
    </div>
    <div class="map">
      <p class="company">GRIP CHAIN PACKTECH PVT LTD.</p> 
      <p class="address"> <i class="fa fa-map-marker" aria-hidden="true"></i>
        K-77 SITE V KASNA,SURAJPUR INDUSTRIAL AREA,
        Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, India-201306
      </p> 
      <p class="number"> <i class="fa fa-phone" aria-hidden="true"></i> +91 99682 02373 </p>
      <!-- Embed Map --> 
      <iframe 
      src="https://www.google.com/maps/embed?location=46.414382,10.013988" 
      class="map-show" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy">
      </iframe>
    </div>
  </div>
</template>


<script>
export default { 
  name: 'Contactus' 
}
</script>

<style scoped>

.m-head{
  font-family: Outfit;
  font-size: 38px;
  font-weight: 700;
  line-height: 22.68px;
  letter-spacing: 0.02em;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding-left: 5%;
  padding-top: 25px;
}

.m-txt{
  font-family: Outfit;
  font-size: 24px;
  font-weight: 400;
  line-height: 17.64px;
  letter-spacing: 0.02em;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding-top: 15px;
  padding-left: 5%;
}

.main{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-self: center;
  width: 100%;
  padding: 3%;
}

.form, .map{
  display: flex;
  flex-direction: column;
}
.form{  width: 65%;  } .map{  width: 35%;  }

.map-show{
  width: 100%;
  height: 300px;
  margin-right: 8px; /* Adds some space between the icon and the text */ 
}

.company {
  font-family: Outfit;
  font-size: 27px;
  font-weight: 600;
  line-height: 27.16px;
  letter-spacing: 0.04em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.address{
  font-family: Outfit;
  font-size: 17.53px;
  font-weight: 400;
  line-height: 17.57px;
  letter-spacing: 0.04em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.number{
  font-family: Outfit;
  font-size: 17.53px;
  font-weight: 400;
  line-height: 17.57px;
  letter-spacing: 0.04em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

@media (max-width: 450px) { 
  .main { flex-direction: column; } 
  .form, .map { width: 100%; /* Each div takes full width */ } }

</style>