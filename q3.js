const Tsionet = {
  Cteacher: "haim",
  JSteacher: "elias",
  id: 5566,
  teachers() {
    console.log(`${this.Cteacher} and ${this.JSteacher} are the best!`);
  },
};

console.log(Tsionet);
Tsionet.teachers();
