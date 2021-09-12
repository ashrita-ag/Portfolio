AOS.init()

const experiencecards = document.querySelector('.experience-cards')
const exp = [
  {
    title: 'Software Development Internship',
    cardImage: 'assets/images/experience-page/jpm.jpg',
    place: 'JPMorgan Chase and Co.',
    time: '(May, 2021 - July,2021)',
    desp: '<li>Developed a Java-Spring Boot application based on microservices infrastructure and used Mockito in conjunction with JUnit for test-driven development.</li><li>Worked on performance testing of Oracle database services in the cloud. Developed and deployed a Java-Spring Boot application to test the performance of optimized PL/SQL queries.</li><li>Used Jira, Bitbucket, Confluence, and Splunk for continuous integration and application monitoring.</li>',
  },
]

const showCards = () => {
  let output = ''
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h4>${title}</h4>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  )
  experiencecards.innerHTML = output
}
document.addEventListener('DOMContentLoaded', showCards)
