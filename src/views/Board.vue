<template>
  <div class="home">
    <table class="board">
      <tr v-for="(row, index1) in holds">
        <td v-for="(hold, index2) in row" v-on:click="changeTo(index1, index2)">
          {{ hold }}
        </td>
      </tr>
    </table>
  </div>
</template>
<style>
table,
th,
td {
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid black;
  border-collapse: collapse;
  height: 40px;
  width: 40px;
}
</style>
<script>
export default {
  data: function () {
    return {
      holds: [
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ],
    };
  },
  created: function () {},
  methods: {
    changeTo: function (index1, index2) {
      console.log(index1, index2);
      this.holds[index1][index2] = "O";
      console.log(this.holds);
      this.$forceUpdate();
      // this.information = thing;
    },
  },
};
</script>