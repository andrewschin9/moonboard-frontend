<template>
  <div class="home">
  <button type="button" class="btn btn-dark" v-on:click="selectStart()">Starting Hold(s)</button>
  <button type="button" class="btn btn-dark" v-on:click="selectMiddle()">Middle Hold(s)</button>
  <button type="button" class="btn btn-dark" v-on:click="selectFinish()">Finishing Hold(s)</button>
    <table id="board">
      <tr id="tr" v-for="(row, index1) in holds">
        <td v-for="(hold, index2) in row" v-on:click="changeTo(index1,index2,$event)">
          {{ hold }}
        </td>
      </tr>
    </table>
  </div>
</template>
<style>
button {
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
  width: 120px;
  /* font-size: 13px; */
}
table#board {
  background: url(mbimg.png);
  background-size: cover;
}
table#board,
th,
td {
  table-layout: fixed;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 35px;
  color: blue;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  padding: 1px;
  height: 50px;
  width: 50px;
}
</style>
<script>
export default {
  data: function () {
    return {
      type: "S",
      circleColor: "green",
      holds: [
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
      ],
    };
  },
  created: function () {},
  methods: {
    changeTo: function (index1, index2, element) {
      // console.log(typeof element.target.style.borderColor);
      if (element.target.style.borderColor == "") {
        element.target.style.borderColor = this.circleColor;
      } else if (element.target.style.borderColor !== "") {
        element.target.style.borderColor = "";
      }
      if (!this.holds[index1][index2]) {
        this.holds[index1][index2] = this.type;
      } else if (this.holds[index1][index2] !== "") {
        this.holds[index1][index2] = "";
      }
      console.log(this.holds);
      this.$forceUpdate();
      // this.information = thing;
    },
    selectStart: function () {
      this.type = "S";
      this.circleColor = "green";
    },
    selectMiddle: function () {
      this.type = "M";
      this.circleColor = "Blue";
    },
    selectFinish: function () {
      this.type = "F";
      this.circleColor = "Red";
    },
    log: function () {
      console.log(this.holds);
    },
    // changeColor: function (index2) {
    //   var table = document.getElementById("tr").getElementsByTagName("td");
    //   var td = table[index2];
    //   td.style.borderColor = this.finish;
    // },
  },
};
</script>