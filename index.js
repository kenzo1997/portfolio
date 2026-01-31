const { createApp } = Vue;
createApp({
  data() {
    return {
      fullText: "Full Stack Software Developer & Digital Architect",
      skills: [
        { name: "Java" }, { name: "PHP" }, { name: "Vue.js" }, 
        { name: "Spring Boot" }, { name: "JavaScript" }, { name: "SQL" }
      ],
      projects: [],
      loading: true
    };
  },
  methods: {
    async fetchProjects() {
      try {
        const res = await fetch('https://api.github.com/users/kenzo1997/repos?sort=updated');
        const data = await res.json();
        this.projects = data.filter(repo => !repo.fork);
      } catch (e) {
        console.error("API error", e);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchProjects();
  }
}).mount("#app");

