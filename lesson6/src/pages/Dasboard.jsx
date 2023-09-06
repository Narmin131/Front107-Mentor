import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveBlog } from "../redux/Actions/Actions";
import { NavLink } from "react-router-dom";

const Dasboard = () => {
  const blogs = useSelector((state) => state.BlogReducer);

  const dispatch = useDispatch()


  return (
    <>
      <div className="container">
        <NavLink to='/addBlog' className='btn btn-success'>Add new blog</NavLink>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt=""
                        style={{ width: "120px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>

                    <td>
                      <button className="btn btn-danger" onClick={()=>dispatch(RemoveBlog(item.id))}>X</button>
                      <NavLink className="btn btn-warning" to={`/editBlog/${item.id}`}>edit</NavLink>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dasboard;
