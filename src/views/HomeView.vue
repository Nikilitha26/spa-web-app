<template>
  <div class="landing-page">
    <div v-if="groupedPrices.length === 0" class="loading-message">
      Loading data or no data available...
    </div>
    <div v-else>
      <h1 class="title">Spot Prices</h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th @click="sortBy('fullName')">Full Name</th>
            <th @click="sortBy('price')">Price</th>
            <th @click="sortBy('move')">Move</th>
            <th @click="sortBy('pmove')">Percentage Move</th>
            <th @click="sortBy('datetime')">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="groupedPrices.length === 0">
            <td colspan="5">No data available</td>
          </tr>
          <tr
            v-for="(item, index) in groupedPrices"
            :key="index"
            :class="index % 2 === 0 ? 'even-row' : 'odd-row'"
          >
            <td>{{ item.fullName }}</td>
            <td>R{{ item.price }}</td>
            <td>{{ item.move }}</td>
            <td>{{ parseFloat(item.pmove).toFixed(2) }}%</td>
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
    sortedPrices() {
      return [...this.groupedPrices].sort((a, b) => {
        const result =
          a[this.sortKey] < b[this.sortKey]
            ? -1
            : a[this.sortKey] > b[this.sortKey]
            ? 1
            : 0;
        return this.sortOrder === "asc" ? result : -result;
      });
    },
  },
  methods: {
    ...mapActions(["fetchSpotPrices"]),
  },
  mounted() {
    this.fetchSpotPrices().then(() => {
      console.log("Data fetched successfully!");
    });
  },
  watch: {
    groupedPrices(newValue) {
      console.log("Grouped Prices updated:", newValue);
    },
  },
};
</script>

<style scoped>
/* General styling for the page */
.landing-page {
  position: relative;
  top: 80px;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
}

/* Title styling */
.title {
  font-size: 2.5rem;
  color: #0066cc;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Table styling */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
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

.styled-table tr:hover {
  background-color: #d1ecf1;
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

/* Loading message styling */
.loading-message {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff5e6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
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
