import jump from 'jump.js'

class SmoothScroll {
  constructor() {
    this.home = document.getElementById('home')
    this.projects = document.getElementById('projects-link')
    this.process = document.getElementById('process-link')
    this.about = document.getElementById('about-link')
    this.contact = document.getElementById('contact-link')
    this.events()
  }

  events() {

    this.home.addEventListener('click', () => {
      jump('.target')
    })

    this.projects.addEventListener('click', () => {
      jump('.target2', {
        offset: -100
      })
    })

    this.about.addEventListener('click', () => {
      jump('.target3', {
        offset: -100
      })
    })

    this.process.addEventListener('click', () => {
      jump('.target4', {
        offset: -100
      })
    })

    this.contact.addEventListener('click', () => {
      jump('.target5', {
        offset: -100
      })
    })

  }

}




export default SmoothScroll
