// src/api/api.js

// GET: Fetch all data
export const getPosts = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  // POST: Create a new post
  export const createPost = async (url, postData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  // PUT: Update a post
  export const updatePost = async (url, id, postData) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Failed to update post');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  // DELETE: Delete a post
  export const deletePost = async (url, id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      return id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  