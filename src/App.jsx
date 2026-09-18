import React from 'react'
import logo from './assets/logo.png'
import library from './assets/library.png'
import basketball from './assets/basketball.png'

const App = () => {
  return (
    <div>

      <section className="header">
          <nav>
            <a href="index.html"> <img src={logo}/></a>
            <div className="nav-links" id="navLinks">
                {/* <i className="fa fa-times" onClick="hideMenu()"></i> */}
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">COURSE</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onClick="ShowMenu()"}></i> */}
          </nav>
          <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>Making website is now one of the easiest things in the world. you just need to learn HTML, CSS,<br/> Javascript and you are good to go.</p>
            <a href="" className="hero-btn">Visit  Us To Know More</a>
          </div>
    </section>
    {/* <!-- Course --> */}
     <section className="course">
        <h1 className="coursehead">Courses we Offer</h1>
        <p className="mainp">Lorem Ipsum dolor amet, consectetur adipising elit</p>
        <div className="row">
            <div className="course-col">
                <h3>Intermediate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum illo at unde sequi animi id eum voluptas repellat nihil, commodi maxime 
                    cupiditate pariatur fugit et ab, error corrupti? Odio ullam tenetur ex ratione culpa neque pariatur nesciunt distinctio placeat consectetur nostrum, 
                    impedit earum saepe, in error quidem laborum labore iusto omnis possimus? Facere perferendis in ut blanditiis beatae quibusdam.</p>
            </div>
            <div className="course-col">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum illo at unde sequi animi id eum voluptas repellat nihil, commodi maxime 
                    cupiditate pariatur fugit et ab, error corrupti? Odio ullam tenetur ex ratione culpa neque pariatur nesciunt distinctio placeat consectetur nostrum, 
                    impedit earum saepe, in error quidem laborum labore iusto omnis possimus? Facere perferendis in ut blanditiis beatae quibusdam.</p>
            </div>
            <div className="course-col">
                <h3>Post Graduate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illum illo at unde sequi animi id eum voluptas repellat nihil, commodi maxime 
                    cupiditate pariatur fugit et ab, error corrupti? Odio ullam tenetur ex ratione culpa neque pariatur nesciunt distinctio placeat consectetur nostrum, 
                    impedit earum saepe, in error quidem laborum labore iusto omnis possimus? Facere perferendis in ut blanditiis beatae quibusdam.</p>
            </div>
        </div>
     </section>
     {/* <!-- Campus --> */}
     <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="campus-col">
                    <img src="./london.png" alt=""/>
                    <div className="layer">
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="./newyork.png" alt=""/>
                    <div className="layer">
                        <h3>NEW YORK</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="./washington.png" alt=""/>
                    <div className="layer">
                        <h3>WASHINGTON</h3>
                    </div>
                </div>
            </div>
     </section>
     {/* <!-- FACILITIES --> */}
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
            <div className="facilities-col">
                <img src={library} alt=""/>
                <h3>World className Library</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="facilities-col">
                <img src={basketball} alt=""/>
                <h3>Largest Play Ground</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="facilities-col">
                <img src="./cafeteria.png" alt=""/>
                <h3>Tasty And Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </section>
      {/* <!-- TESTIMINALS --> */}
      <section className="testimonials">
            <h1>What Our Students Says</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="testimonial-col">
                    <img src="./user1.jpg"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Numquam ut maiores similique suscipit explicabo, dicta, 
                            a non provident aspernatur minus id voluptas omnis amet 
                            temporibus praesentium doloremque quo ratione quos?</p>
                            <h3>Christine Berkley</h3>
                            <i className="fa fa-star"></i>
                             <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                               <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="testimonial-col">
                    <img src="./user2.jpg"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Numquam ut maiores similique suscipit explicabo, dicta, 
                            a non provident aspernatur minus id voluptas omnis amet 
                            temporibus praesentium doloremque quo ratione quos?</p>
                            <h3>David Byer</h3>
                            <i className="fa fa-star"></i>
                             <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                               <i className="fa fa-star"></i>
                               <i className="fa fa-star-half-o"></i>
                    </div>
                </div>
            </div>
      </section>
      {/* <!-- Call To Action --> */}
       <section className="cta">
        <h1>Enroll For Our Various Online Courses <br/>Anywhere From The World.</h1>
        <a href="" className="hero-btn">CONTACT US</a>
       </section>
       {/* <!-- footer --> */}
       <section className="footer">
       <h4>About Us</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Numquam ut maiores similique suscipit explicabo, dicta, 
            a non provident aspernatur minus id voluptas omnis amet<br/> 
            temporibus praesentium doloremque quo ratione quos?</p>
            <div className="icons">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-linkedin"></i>
            </div>
            <p>Made With <i className="fa fa-heart-o"></i>By Easy Tutorials</p>
        </section>

    </div>
  )
}

export default App