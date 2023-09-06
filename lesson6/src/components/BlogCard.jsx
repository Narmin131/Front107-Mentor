import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-3">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={blog.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.description}</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BlogCard;
