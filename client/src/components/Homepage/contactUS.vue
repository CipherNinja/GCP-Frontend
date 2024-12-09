<template>
  <div>
    <p class="m-head">Get In Touch</p>
    <p class="m-txt">We are here for you! How can we help?</p> 
  </div>  
  <div class="main">

    <div class="form">
      <!--Form-->
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Enter Your Name"
          v-model="formData.name"
          :class="{'input-error': !formData.name && submitted}"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          v-model="formData.email"
          @input="validateEmail"
          :class="{'input-error': (!formData.email && submitted) || !emailValid}"
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          v-model="formData.phone"
          @input="validatePhone"
          :class="{'input-error': (!formData.phone && submitted) || !phoneValid}"
        />
        <select
          v-model="formData.country"
          :class="{'input-error': !formData.country && submitted}"
        >
          <option value="">Select Your Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="France">South Korea</option>
          <option value="Italy">Italy</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
        </select>
        <textarea
          placeholder="Message..."
          v-model="formData.message"
          :class="{'input-error': !formData.message && submitted}"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <!-- Error Message -->
      <p v-if="submitted && hasEmptyFields" class="error-message">
        Please fill out all the fields.
      </p>
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
  name: 'Contactus',
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      },
      emailValid: true, // Tracks the validity of the email input
      phoneValid: true, // Tracks the validity of the phone number
      submitted: false, // Flag to track if the form was submitted
    };
  },
  computed: {
    // Check if there are any empty fields
    hasEmptyFields() {
      return !(
        this.formData.name &&
        this.formData.email &&
        this.formData.phone &&
        this.formData.country &&
        this.formData.message
      );
    },
  },
  methods: {
    // Handle form submission
    handleSubmit() {
      this.submitted = true;

      // Validate phone and email before submission
      this.validatePhone();
      this.validateEmail();

      // Check for empty fields or invalid inputs
      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.phone ||
        !this.formData.country ||
        !this.formData.message ||
        !this.emailValid ||
        !this.phoneValid
      ) {
        return; // Prevent form submission if there are validation errors
      }

      alert("Your response has been recorded.");
      // You can add further logic for form submission here
    },
    // Validate email format
    validateEmail() {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Basic email structure with valid domain
      this.emailValid = emailRegex.test(this.formData.email);
    },
    // Validate phone number (only numeric input)
    validatePhone() {
      const phoneRegex = /^[0-9]+$/; // Allow only numeric characters
      this.phoneValid = phoneRegex.test(this.formData.phone);
      if (!this.phoneValid) {
        this.formData.phone = this.formData.phone.replace(/\D/g, ""); // Remove non-numeric characters
      }
    },
  },
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
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.form, .map{
  display: flex;
  flex-direction: column;
}
.form{  width: 60%;  } .map{  width: 40%;  }

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


.form {
  margin-right: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input,
form select,
form textarea,
form button {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4); /* Box shadow for inputs */
}

form input.input-error,
form select.input-error,
form textarea.input-error {
  border-color: red;
  box-shadow: 0 0 5px red;
}

form button {
  background-color: #fdd835;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7); /* Box shadow for button */
}

form button:hover {
  background-color: #e1c027;
}

form select {
  padding: 12px;
}

form textarea {
  resize: none;
  height: 100px;
}

/* Error message styling */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

/* Responsive Design for smaller screens */
/*@media (max-width: 768px)*/ 


@media (max-width: 450px) { 
  .main { flex-direction: column; } 
  .form, .map { width: 100%; /* Each div takes full width */ } 

  .form {
    padding: 15px;
    max-width: 100%;
    margin-bottom: 20px;
  }

  form input,
  form select,
  form textarea,
  form button {
    font-size: 16px;
  }
}

</style>