export const AddBlogFunc = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};

export const RemoveBlog = (id) => {
  return {
    type: "REMOVE_BLOG",
    payload: id,
  };
};


// CRUD
// create, read, update, delete