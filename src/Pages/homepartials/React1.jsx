import React from 'react'

const React1 = () => {
  return (
     <section className="mix-tape">
          <p className="primary">Responsible AI in Academia</p>
          <p>Balanced Pitch</p>

          <h1>
            From Innovation <br />
            To Iconic
          </h1>

          <div className="tape">
            <div className="strip">
              <img src="/home/strip.png" alt="" />
            </div>
            <div className="tape-img">
              <img src="/home/tape.png" alt="" />
            </div>
          </div>

          <div className="tape-info">
            <p>
              The next generation of data scientists and music creators is
              shaping the AI technologies that will define the future of the
              music industry.
            </p>
            <br />
            <br />
            <p>
              Balanced Pitch collaborates with universities and their music
              programs to promote awareness and establish ethical AI practices.
              We also offer opportunities for aspiring artists and data
              engineers to innovate and thrive in the evolving music landscape.
            </p>

            <div className="sticker">
              <img src="/stickers-dark.png" alt="" />
            </div>
          </div>
        </section>
  )
}

export default React1