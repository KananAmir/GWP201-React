import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api/suppliers";

//get all data
export async function getAllData() {
  try {
    let response = await axios(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    // console.log(err);
    throw error;
  }
}

// get data by id
export async function getDataById(id) {
  try {
    let response = await axios(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    // console.log(err);
    throw error;
  }
}

//delete data by id
export async function deleteById(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    // console.log(err);
    throw error;
  }
}
