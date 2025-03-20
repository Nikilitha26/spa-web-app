<template>
  <div id="app" class="workshops-page">
    <h1 class="title">Available Workshops</h1>
    <div class="filter-section">
      <label for="available-only" class="filter-label">Show only available dates:</label>
      <input type="checkbox" id="available-only" v-model="showAvailableOnly" class="filter-checkbox" />
    </div>

    <div v-if="workshops.length" class="workshops-container">
      <div v-for="workshop in filteredWorkshops" :key="workshop.workshop_id" class="workshop-card">
        <h2 class="workshop-venue">{{ workshop.venue }}</h2>
        <div v-for="date in workshop.dates" :key="date.date" class="workshop-date">
          <div v-if="!showAvailableOnly || date.seatsAvailable > 0" class="date-info">
            <p>{{ formatDate(date.date) }} - <span class="seats">{{ date.seatsAvailable }}</span> seats left</p>
            <button
              :disabled="date.seatsAvailable <= 0"
              @click="bookWorkshop(date.date_id)"
              class="book-btn"
            >
              {{ date.seatsAvailable > 0 ? 'Book Now' : 'Sold Out' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-data-message">
      <p>No workshops available</p>
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
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const showAvailableOnly = ref(false);

    const workshops = computed(() => store.state.workshops);
    const filteredWorkshops = computed(() =>
      store.getters.filteredWorkshops(showAvailableOnly.value)
    );

    const showPopup = ref(false);
    const popupMessage = ref('');

    const bookWorkshop = async (dateId) => {
      try {
        await store.dispatch('bookWorkshop', dateId);
        popupMessage.value = 'Booking successful!';
        showPopup.value = true; 
      } catch (error) {
        popupMessage.value = 'An error occurred during booking.';
        showPopup.value = true;
      }
    };

    const closePopup = () => {
      showPopup.value = false;
    };

    const formatDate = (rawDate) => {
      const dateObj = new Date(rawDate);
      return dateObj.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    onMounted(() => {
      store.dispatch('fetchWorkshops');
    });

    return {
      workshops,
      filteredWorkshops,
      showAvailableOnly,
      bookWorkshop,
      formatDate,
      showPopup,
      popupMessage,
      closePopup,
    };
  },
};
</script>


<style scoped>
/* General Styles */
.workshops-page {
  position: relative;
  top: 100px;
  font-family: 'Poppins', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
  text-align: center;
}

/* Title Styling */
.title {
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Filter Section */
.filter-section {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-label {
  font-size: 1rem;
  margin-right: 10px;
  color: #444;
}

.filter-checkbox {
  transform: scale(1.2);
  cursor: pointer;
}

/* Workshops Container */
.workshops-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  justify-items: center;
}


.workshop-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 100%; 
  max-width: 400px; 
  text-align: left;
  transition: transform 0.3s ease;
}

.workshop-card:hover {
  transform: translateY(-5px);
}

.workshop-venue {
  font-size: 1.5rem;
  color: #0066cc;
  margin-bottom: 10px;
  text-transform: capitalize;
}

/* Date Info */
.workshop-date .date-info {
  margin-bottom: 10px;
}

.workshop-date .seats {
  font-weight: bold;
  color: #0066cc;
}

/* Buttons */
.book-btn {
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover {
  background-color: #004085;
}

.book-btn:disabled {
  background-color: #dc3545; 
  color: #fff;
  cursor: not-allowed;
}

/* No Data Message */
.no-data-message {
  font-size: 1.2rem;
  color: #777;
  margin-top: 20px;
}

/* Popup Styles */
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
  .title {
    font-size: 2rem;
  }

  .workshop-card {
    width: 100%; 
  }

  .book-btn {
    width: 100%;
  }
}
</style>
