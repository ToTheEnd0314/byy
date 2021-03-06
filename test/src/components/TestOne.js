import TestThree from "./TestThree";

export default {
  name: "test-one",

  data: {
    child: "test-one"
  },

  components: {
    "test-three": TestThree
  },

  props: {
    name: "test-one",
    byy: "aaa",
    id: ""
  },

  methods: {
    test(name) {
      this.$emit("clickedFromTestOne", name);
    }
  },

  render(c) {
    return c('div', {
      className: "test-one",
      style: {
        borderBottom: "1px solid red"
      }
    }, [
      c('p', {
        on: {
          "click.stop": [this.test, this.name]
        },
        className: "test-one__three"
      }, [`${this.id}-${this.name}`])
    ])
  }
};