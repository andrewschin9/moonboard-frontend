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
table.board {
  background: url(mbimg.png);
  background-size: cover;
}
table,
th,
td {
  table-layout: fixed;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 28px;
  color: red;
  align-items: center;
  justify-content: center;
  /* border: 0.5px solid gray;
  border-collapse: collapse; */
  height: 40px;
  width: 40px;
}
</style>
<script>
export default {
  data: function () {
    return {
      holds: [
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
        [, , , , , , , , , , ,],
      ],
    };
  },
  created: function () {},
  methods: {
    changeTo: function (index1, index2) {
      if (!this.holds[index1][index2]) {
        this.holds[index1][index2] = "O";
      } else if (this.holds[index1][index2] == "O") {
        this.holds[index1][index2] = null;
      }
      console.log(this.holds);
      this.$forceUpdate();
      // this.information = thing;
    },
  },
};
</script>