// console.log('Hello, Vue')

const app = Vue.createApp({
    data() {
        return {
            showAuthor: true,
            authors: [
                {name: "Abdul Kader Zilani", designation: "Sr. Software Engineer", experience: "4+ years"},
                {name: "Abdul", designation: "Software Engineer", experience: "5+ years"},
                {name: "Kader", designation: "Sr. Engineer", experience: "6+ years"},
                {name: "Zilani", designation: "Engineer", experience: "7+ years"},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeDesignation() {
            this.designation = "Lead Software Engineer"
        },
        toggleAuthor() {
            this.showAuthor= !this.showAuthor
        },
        handleEvents(e) {
            console.log(e, e.type)
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
            console.log(e, e.type)
        }
    }
})

app.mount("#app")