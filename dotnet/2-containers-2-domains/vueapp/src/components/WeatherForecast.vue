<template>
  <div>
    <h1>Weather Forecast</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Temp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in weather" :key="row.date">
          <td>{{row.dateFormat}}</td>
          <td>{{row.summary}}</td>
          <td>{{row.temperatureC}}&deg;C / {{row.temperatureF}}&deg;F</td>
        </tr>
      </tbody>
    </table>
    <p style="color: red">{{ exception }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: [],
      exception: ''
    }
  },
  created: async function () {
    this.exception = '';
    try {
      const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/weatherforecast`);
      let data = await response.json();
      data.forEach(row => {
        row.dateFormat = new Date(row.date).toLocaleDateString();
      });
      this.weather = data;
    } catch (err) {
      console.log('error', err);
      this.exception = 'Exception calling backend. See console for details.';
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
table tr {
  margin-bottom: 1px solid #cccccc;
}
table th, table td {
  padding: .5em;
}
</style>
