import React from "react";

function BlogSection() {
  const blogs = [
    {
      date: "13",
      month: "Jun, 2019",
      image: "images/homepage-7/blog/blog-01.jpg",
      author: "admin",
      category: "Financial Law",
      title: "How Is Mediation Useful in Family Law?",
      link: "blog-single-view.html",
    },
    {
      date: "13",
      month: "Jun, 2019",
      image: "images/homepage-7/blog/blog-02.jpg",
      author: "admin",
      category: "Criminal Law",
      title: "Allow to miles wound be place the leave.",
      link: "blog-single-view.html",
    },
    {
      date: "13",
      month: "Jun, 2019",
      image: "images/homepage-7/blog/blog-03.jpg",
      author: "admin",
      category: "Employment Law",
      title: "What we are capable of usually gets",
      link: "blog-single-view.html",
    },
    {
      date: "12",
      month: "Jun, 2019",
      image: "images/homepage-7/blog/blog-04.jpg",
      author: "admin",
      category: "Criminal Law",
      title: "Series Stopping Domestic Violence Before It Escalates",
      link: "blog-single-view.html",
    },
  ];

  return (
    <section className="section-md blog-seven">
      <div className="container">
        <div className="row g-0">
          {/* Left Side - Blog Posts */}
          <div className="col-md-12 col-lg-8">
            <div className="blog-seven-box">
              <div className="pbmit-heading-subheading-style-2">
                <h4 className="pbmit-subtitle">Case Studies</h4>
                <h2 className="pbmit-title">Recent Case Studies</h2>
              </div>
              <div className="row">
                {blogs.map((blog, index) => (
                  <div className="col-md-12" key={index}>
                    <article className="pbmit-box-blog pbmit-blogbox-style-4">
                      <div className="post-item">
                        <div className="pbmit-meta-date">
                          <span className="pbmit-meta-day">{blog.date}</span>
                          <span className="pbmit-meta-month">{blog.month}</span>
                        </div>
                        <div className="pbmit-blog-image-with-meta">
                          <div className="pbmit-featured-wrapper pbmit-post-featured-wrapper">
                            <img src={blog.image} className="img-fluid" alt={blog.title} />
                          </div>
                        </div>
                        <div className="pbmit-box-content">
                          <span className="pbmit-meta-line auther-links">
                            <a href="blog-large-image.html" title={`Posted by ${blog.author}`} rel="author">
                              <i className="pbmit-base-icon-user"></i> {blog.author}
                            </a>
                          </span>
                          <span className="pbmit-meta-line cat-links">
                            <i className="demo-icon pbmit-base-icon-category"></i>
                            <a href="blog-large-image.html">{blog.category}</a>
                          </span>
                          <div className="pbmit-box-title">
                            <h4><a href={blog.link}>{blog.title}</a></h4>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-12 col-lg-4">
            <div className="form-seven-box">
              <div className="pbmit-heading-subheading-style-2">
                <h4 className="pbmit-subtitle">PLEASE FILL FORM</h4>
                <h2 className="pbmit-title">Do You Have Any Questions?</h2>
              </div>
              <form>
                <div className="row g-0">
                  <div className="col-md-12">
                    <input type="text" name="name" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-md-12">
                    <input type="email" name="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="phone" className="form-control" placeholder="Phone" />
                  </div>
                  <div className="col-md-12">
                    <textarea name="message" cols="40" rows="4" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="col-md-12 col-lg-7">
                    <input className="pbmit-btn pbmit-btn-global w-100" type="submit" value="SEND MESSAGE" />
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;
