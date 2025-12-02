// BACKEND URL
let BaseURl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// Function For Handling the Responses
/*
converts the json to readable format 
creates an Error object and gives a fallback ui error when there is error in body of json
 */
async function handleRes(res) {
  // If HTTP status is NOT in the 200–299 range
  if (!res.ok) {
    let body = {};

    // Some servers return JSON bodies on failure, some don't.
    // We guard with try/catch so the app never crashes.
    try {
      body = await res.json();
    } catch {
      body = {};
    }

    // Prefer backend message, then fallback messages
    const message =
      body.message || res.statusText || "Something went wrong with the API";

    // Create a clean Error object
    const err = new Error(message);
    err.status = res.status; // attach status for UI/logic use

    throw err; // push error up to the component
  }

  // DELETE operations often return: 204 No Content
  if (res.status === 204) return null;

  // Normal case → return parsed JSON from backend
  return res.json();
}


// functions to Implement The APi calls
export const api = {
  // function to fetch the Data METHOD: GET
  async listUser(signal) {
    //   Create a request to server
    let res = await fetch(`${BaseURl}/users`,{signal});// signal gives info to the Request either to fetch the data or stop

    return handleRes(res);
  },
  // function to create the Data METHOD: POST
  async createUser(user) {
    //   Create a request to server
    let res = await fetch(`${BaseURl}/users`, {
      // makes req to users enpoint for creating the data
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // converts the object format of data into json format to store database
    });
    return handleRes(res);
  },
  // function to update the Data METHOD: PUT (entire object updation) PATCH :(partial object updation)
  async updateUser(id, user) {
    let res = await fetch(`${BaseURl}/users/${id}`, {
      // makes req to users enpoint for updating the data
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), //// converts the object format of data into json format to store database
    });
    return handleRes(res);
  },
  // function to delete the Data METHOD: Delete
  async DeleteUser(userId) {
    let res = await fetch(`${BaseURl}/users/${userId}`, {
      method: "DELETE",
    });
    return handleRes(res);
  },
};
