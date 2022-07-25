// console.log('Hello, Vue')

const app = Vue.createApp({
    data() {
        return {
            showAuthor: true,
            author: "Abdul Kader Zilani",
            designation: 'Sr. Software Engineer',
            experience: "4+",
            age: 30
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
            console.log(e, e.type)
        }
    }
})

app.mount("#app")