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
      <button v-on:click="showProblem(problem)">Show problem</button>
      <hr>

      <dialog id="problem-details">
        <form method = "dialog">
          <button>Close</button>
          <p><strong>Name: </strong>{{currentProblem.prob_name}}</p>
          <p><strong>Grade: </strong>{{currentProblem.grade}}</p>
          <table id="board">
            <tr id="tr" v-for="(row, index1) in holds">
              <td v-bind:class="updateHolds(index1,index2)" v-for="(hold, index2) in row">
            {{ hold }}
              </td>
            </tr>
          </table>
        </form>
      </dialog>
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
      currentProblem: {},
      holds: [
        ["", "", "", "F", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "M", "", "", "", ""],
        ["", "", "", "", "", "", "M", "", "", "", ""],
        ["", "", "", "", "", "", "M", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "S", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
      ],
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
    updateHolds: function (index1, index2) {
      console.log(this.currentProblem.holds);
      if (this.holds[index1][index2] === "S") {
        return "green";
      } else if (this.holds[index1][index2] === "M") {
        return "blue";
      } else if (this.holds[index1][index2] === "F") {
        return "red";
      }
    },
    showProblem: function (problem) {
      this.currentProblem = problem;
      console.log(problem);
      document.querySelector("#problem-details").showModal();
    },
  },
};
</script>
