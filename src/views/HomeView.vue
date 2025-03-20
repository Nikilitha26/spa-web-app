<template>
  <div class="landing-page">
    <div class="intro-section">
      <h1 class="intro-title">A Leading Financial Services and Data Provider</h1>
      <p class="intro-description">
        The Sharenet group provides a range of financial services and products. Sharenet services individuals and companies throughout South Africa and Africa.
        The group comprises of 3 operating divisions: <strong>Sharenet Wealth, Sharenet Securities,</strong> and <strong>Sharenet Labs</strong>.
      </p>
    </div>
    <div v-if="groupedPrices.length === 0" class="loading-message">
      Loading data or no data available...
    </div>
    <div v-else>
      <h1 class="title">Spot Prices</h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th @click="sortBy('fullName')">
              Full Name <span v-if="sortKey === 'fullName'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
            </th>
            <th @click="sortBy('price')">
              Price <span v-if="sortKey === 'price'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
            </th>
            <th @click="sortBy('move')">
              Move <span v-if="sortKey === 'move'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
            </th>
            <th @click="sortBy('pmove')">
              Percentage Move <span v-if="sortKey === 'pmove'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
            </th>
            <th @click="sortBy('datetime')">
              Time <span v-if="sortKey === 'datetime'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="groupedPrices.length === 0">
            <td colspan="5">No data available</td>
          </tr>
          <tr
            v-for="(item, index) in sortedPrices"
            :key="index"
            :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
          >
            <td>{{ item.fullName }}</td>
            <td :class="item.price >= 0 ? 'positive-price' : 'negative-price'">R{{ item.price }}</td>
            <td :class="item.move >= 0 ? 'positive-move' : 'negative-move'">{{ item.move }}</td>
            <td :class="item.pmove >= 0 ? 'positive-pmove' : 'negative-pmove'">{{ parseFloat(item.pmove).toFixed(2) }}%</td>
            <td>{{ item.datetime }}</td>
          </tr>
        </tbody>
      </table>
      <nav class="navigation">
        <router-link to="/contactus" class="nav-link">Contact Us</router-link>
        <router-link to="/workshops" class="nav-link">Workshops</router-link>
      </nav>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LandingPage",
  data() {
    return {
      sortKey: "fullName",
      sortOrder: "asc", 
    };
  },
  computed: {
    ...mapGetters(["groupedPrices"]),
    // Sorted Prices based on the selected column and order
    sortedPrices() {
      return [...this.groupedPrices].sort((a, b) => {
        const modifier = this.sortOrder === "asc" ? 1 : -1;
        if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
        if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    ...mapActions(["fetchSpotPrices"]),
    // Sorting function triggered on header click
    sortBy(key) {
      if (this.sortKey === key) {
        // Toggle sort order if the column is already selected
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        // Set the new sorting column and reset to ascending order
        this.sortKey = key;
        this.sortOrder = "asc";
      }
    },
  },
  mounted() {
    this.fetchSpotPrices().then(() => {
      console.log("Data fetched successfully!");
    });
  },
};
</script>


<style scoped>
/* General Page Styles */
.landing-page {
  position: relative;
  top: 80px;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-image: url(https://nikilitha26.github.io/assess-images/globe-work-saxo.b9402ebc.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f9f9f9;
  color: #333;
}

/* Intro Section Styling */
.intro-section {
  background-color: transparent;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.intro-title {
  font-size: 2.5rem; 
  color: #0066cc;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

.intro-description {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.8; 
}

.intro-description strong {
  color: #0066cc;
}

/* Title Styling */
.title {
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Table Styling */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  text-align: left;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.styled-table thead {
  background-color: #0066cc;
  color: #ffffff;
  text-transform: uppercase;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #dddddd;
}

.styled-table th {
  cursor: pointer;
}

.styled-table tbody .odd-row {
  background-color: #f2f2f2;
}

.styled-table tbody .even-row {
  background-color: #ffffff;
}

/* .styled-table tr:hover {
  background-color: #d1ecf1;
} */

/* Positive and Negative Price Styling */
.positive-price, .positive-move, .positive-pmove {
  color: #28a745; 
  font-weight: bold;
}

.negative-price, .negative-move, .negative-pmove {
  color: #dc3545; 
  font-weight: bold;
}

/* Navigation Styling */
.navigation {
  margin-top: 20px;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: #0066cc;
  font-weight: bold;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #004085;
}

/* Loading Message */
.loading-message {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff5e6;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .intro-title {
    font-size: 1.8rem;
  }

  .intro-description {
    font-size: 0.9rem;
  }

  .styled-table th,
  .styled-table td {
    font-size: 0.9rem;
    padding: 10px;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>
