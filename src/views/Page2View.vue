<template>
  <div class="contact-us">
    <h1 class="title">Get in Touch</h1>
    <div class="contact-details">
      <p><strong>Address:</strong> 301, 3rd Floor, Imperial Terraces, Tyger Waterfront, Carl Cronje Drive, Bellville, Cape Town, 7530</p>
      <p><strong>Phone:</strong> +27 (0)21 700 4800</p>
      <p><strong>Email:</strong> <a href="mailto:support@sharenet.co.za">support@sharenet.co.za</a></p>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6297.241936624714!2d18.627029444144004!3d-33.876213242894764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s301%2C%203rd%20Floor%2C%20Imperial%20Terraces%2C%20Tyger%20Waterfront%2C%20Carl%20Cronje%20Drive%2C%20Bellville%2C%20Cape%20Town%2C%207530!5e1!3m2!1sen!2sza!4v1742377320810!5m2!1sen!2sza"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="back-link">
      <router-link to="/">⟵ Back to Home Page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
/* General Styling */
.contact-us {
  position: relative;
  top: 80px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #fafafa;
  color: #333;
  text-align: center;
}

/* Title Styling */
.title {
  font-size: 2.2rem;
  color: #0066cc;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Contact Details Styling */
.contact-details {
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.contact-details a {
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
}

.contact-details a:hover {
  color: #0066cc;
  text-decoration: underline;
}

/* Map Styling */
.map iframe {
  width: 100%;
  max-width: 800px;
  height: 450px;
  border-radius: 12px;
  border: 3px solid #eeeeee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

/* Back Link Styling */
.back-link {
  margin-top: 20px;
  text-align: center;
}

.back-link a {
  text-decoration: none;
  font-size: 1rem;
  color: #0066cc;
  font-weight: bold;
  transition: color 0.3s ease;
}

.back-link a:hover {
  color: #004085;
}

/* Responsive Design */
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }

  .contact-details {
    font-size: 0.9rem;
  }

  .map iframe {
    height: 300px;
  }

  .back-link a {
    font-size: 0.9rem;
  }
}
</style>
