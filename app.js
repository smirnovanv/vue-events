const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Smirnova';
    },
  },
  methods: {
    submitForm() {
      alert('submitted');
    },
    resetInput() {
      this.name = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');
