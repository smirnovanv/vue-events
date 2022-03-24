const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm() {
      alert('submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, defaultSurname) {
      this.name = event.target.value + ' ' + defaultSurname;
    },
  },
});

app.mount('#events');
