// console.log('Hello, Vue')

const app = Vue.createApp({
    data() {
        return {
            showAuthor: true,
            url: "https://www.linkedin.com/feed/",
            authors: [
                {name: "Abdul Kader Zilani", designation: "Sr. Software Engineer", experience: "4+ years", isFav:true,img:"assets/images/1.jpg"},
                {name: "Abdul", designation: "Software Engineer", experience: "5+ years", isFav:false,img:"assets/images/2.jpg"},
                {name: "Kader", designation: "Sr. Engineer", experience: "6+ years", isFav:true,img:"assets/images/3.jpg"},
                {name: "Zilani", designation: "Engineer", experience: "7+ years", isFav:false,img:"assets/images/1.jpg"},
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
        },
        toggleFav(author) {
            author.isFav = !author.isFav
        }
    },
    computed: {
        filterAuthors() {
            return this.authors.filter((author)=> author.isFav)
        }
    }
})

app.mount("#app")