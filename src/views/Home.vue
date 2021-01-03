<template>
  <div class="home">
    <h1>Problems list</h1>
    <p>Search names: <input type="list" v-model='search_name' label='names'></p>
    <p>Search grades: <select name="grades" id="grades" v-model='search_grade'>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
      </select>
    </p>
    <hr>
     <div v-for="problem in filterBy(filterBy(problems, search_name , 'prob_name'), search_grade , 'grade')">
      <p><strong>Name:</strong> {{problem.prob_name}}</p>
      <p><strong>Grade:</strong> {{problem.grade}}</p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      problems: [],
      prob_name: "",
      grade: "",
      search_name: "",
      search_grade: "",
    };
  },
  created: function () {
    this.problemsIndex();
  },
  methods: {
    problemsIndex: function () {
      axios.get("/api/problems").then((response) => {
        console.log(response.data);
        this.problems = response.data;
      });
    },
  },
};
</script>
