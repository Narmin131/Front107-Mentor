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

export const EditBlogFunc = (blog) => {
  return {
    type: "EDIT_BLOG",
    payload: blog,
  };
};

// CRUD
// create, read, update, delete
