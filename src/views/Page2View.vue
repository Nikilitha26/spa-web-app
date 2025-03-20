<template>
  <div class="contact-us">
    <h1 class="title">Get in Touch</h1>
    <div class="contact-container unified-box">
      <!-- Left: Form for Questions -->
      <div class="form-container">
        <h2>Submit Your Questions</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="form.name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>

      <!-- Right: Map and Contact Details -->
      <div class="details-container">
        <h2>Contact Details</h2>
        <p><strong>Address:</strong> 301, 3rd Floor, Imperial Terraces, Tyger Waterfront, Carl Cronje Drive, Bellville, Cape Town, 7530</p>
        <p><strong>Phone:</strong> +27 (0)21 700 4800</p>
        <p><strong>Email:</strong> <a href="mailto:support@sharenet.co.za">support@sharenet.co.za</a></p>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6297.241936624714!2d18.627029444144004!3d-33.876213242894764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s301%2C%203rd%20Floor%2C%20Imperial%20Terraces%2C%20Tyger%20Waterfront%2C%20Carl%20Cronje%20Drive%2C%20Bellville%2C%20Cape%20Town%2C%207530!5e1!3m2!1sen!2sza!4v1742377320810!5m2!1sen!2sza"
            width="100%"
            height="250"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Popup Message -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>{{ popupMessage }}</p>
        <button @click="closePopup" class="close-btn">Close</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      showPopup: false,
      popupMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      this.popupMessage = "Your message has been submitted!";
      this.showPopup = true; // Display the popup
      console.log(this.form);

      // Reset the form fields
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    closePopup() {
      this.showPopup = false; // Hide the popup
    },
  },
};
</script>


<style scoped>
/* General Styling */
.contact-us {
  position: relative;
  top: 100px;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  background-color: #fafafa;
  color: #333;
}

/* Title Styling */
.title {
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Unified Box for Form and Contact Details */
.unified-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #eeeeee;
}

/* Form Styling */
.form-container {
  flex: 1;
  max-width: 45%;
}

.form-container h2 {
  font-size: 1.8rem;
  color: #0066cc;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fafafa;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0066cc;
  background-color: #ffffff;
}

.submit-button {
  display: inline-block;
  background-color: #0066cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #004085;
}

/* Contact Details Styling */
.details-container {
  flex: 1;
  max-width: 45%;
  text-align: left;
}

.details-container h2 {
  font-size: 1.8rem;
  color: #0066cc;
  margin-bottom: 15px;
}

.details-container p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.details-container a {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}

.details-container a:hover {
  text-decoration: underline;
}

/* Map Styling */
.map iframe {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  border: 2px solid #eeeeee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Popup Styling */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

.popup-content p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.close-btn {
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-btn:hover {
  background-color: #004085;
}

/* Responsive Design */
@media (max-width: 768px) {
  .unified-box {
    flex-direction: column;
    padding: 15px;
  }

  .form-container,
  .details-container {
    max-width: 100%;
  }

  .map iframe {
    height: 200px;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
