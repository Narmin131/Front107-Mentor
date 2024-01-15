import React from "react";
import { useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";

const Blogs = () => {
  const blogs = useSelector((state) => state.BlogReducer);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {blogs.map((item) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-3">
                    <div
                      className="card"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            // isFluidWidth: true,
                            src: item.imageUrl,
                          },
                          largeImage: {
                            src: item.imageUrl,
                            // width: 1200,
                            // height: 1800,
                          },
                        }}
                      />
                      {/* <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt="..."
                      /> */}
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
