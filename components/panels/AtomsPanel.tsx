export default function AtomsPanel({ letterOpen, toggleLetter, restart }: { letterOpen: boolean; toggleLetter: () => void; restart: () => void }) {
  return (
      <>
        <div className="pnl">
          <p className="kick">Layer 10 / 10 · Atoms</p>
          <div className="bar" />
          <h2 className="ttl">In their words</h2>
          <p className="sub">What everything above is built from</p>
          <div className="item letter">
            <p className="lab" style={{ marginBottom: "14px" }}>Letter of recommendation</p>
            <div className={letterOpen ? 'letter-txt open' : 'letter-txt'} id="letter-txt">
              <p className="body">To Whom It May Concern:</p>
              <p className="body">I am happy to recommend Lefika Moalosi for employment opportunities in engineering and technology. I have known Lefika for approximately two years in my role as his co-op advisor at the University of Cincinnati, and I also had the opportunity to work with him more closely as his instructor during his Experiential Explorations Program (EEP). Over that time, the word I have consistently used to describe Lefika is <em>go-getter</em>. He is someone who is genuinely excited about technology, seeks out opportunities on his own, and is rarely satisfied with simply doing what is required of him.</p>
              {letterOpen && (
                <>
                  <p className="body">One of the things I appreciate most about Lefika is his willingness to challenge himself. During his EEP experience, he chose to spend the semester learning about ray tracing and building a ray tracer in C++. This was not a simple project. He independently worked through the mathematics, graphics concepts, and programming involved in creating virtual cameras, lighting, materials, antialiasing, and realistic light behavior. By the end of the experience, he had developed a functional 3D path tracer and demonstrated a significant amount of technical growth along the way. What stood out to me was not only the final product, but the amount of self-directed learning it took for him to get there.</p>
                  <p className="body">That initiative extends well beyond the classroom. Lefika is constantly finding something new to learn, build, or pursue. His technical interests have ranged from GPU computing and CUDA to artificial intelligence, embedded systems, computer graphics, and full-stack development. He has built projects ranging from a transformer-based language model to a smart waste-sorting system, and during the same semester as his EEP, he independently developed a gamified productivity application during UC's Revolution hackathon. Rather than abandoning that project when the hackathon ended, he continued developing it afterward with the goal of eventually releasing it.</p>
                  <p className="body">I have also watched Lefika approach his professional development with that same persistence. He actively seeks out networking opportunities, technical training, interview preparation, and challenging internship opportunities. He has put significant effort into strengthening his technical interviewing skills and has pursued competitive opportunities in areas that align with his interests in GPU computing and AI. Even when an opportunity has not resulted in the outcome he hoped for, I have seen him respond by continuing to learn and looking for the next opportunity rather than becoming discouraged. That resilience is an important quality in a young engineer.</p>
                  <p className="body">I believe Lefika would be especially valuable to an organization that appreciates employees who are curious, technically ambitious, and willing to take initiative. He is the type of student who does not wait for someone else to tell him what he should learn next; he goes looking for the next challenge himself. I am excited to see where that drive takes him, and I am pleased to recommend him for employment.</p>
                  <p className="body">Please feel free to contact me if I can provide any additional information.</p>
                  <p className="sig">Sincerely,<br />Liz Pawley</p>
                  <p className="byline">Assistant Professor · College of Cooperative Education and Professional Studies · University of Cincinnati</p>
                </>
              )}
            </div>
            <button className="btn letter-more" type="button" onClick={toggleLetter} aria-expanded={letterOpen} aria-controls="letter-txt">{letterOpen ? 'Show less' : 'Show more'}</button>
          </div>
          <div className="item">
            <p className="body" style={{ marginBottom: "14px" }}>That's the whole teardown — from a rack in a datacenter down to single atoms. Want to build something together?</p>
            <div className="cta">
              <a className="btn pri" href="mailto:lefikatmoalosi@gmail.com">Email me</a>
              <a className="btn" href="https://www.linkedin.com/in/lefikamoalosi/" target="_blank" rel="noopener">LinkedIn</a>
              <button className="btn" type="button" onClick={restart}>Reassemble</button>
            </div>
          </div>
        </div>
      </>
  );
}
