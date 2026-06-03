import { axiosinstance } from "../../../../config/AxiosInstance"




export let getAllEmployees = async ({
  page = 1,
  limit = 20,
  role = "",
  status = "active",
  department = "",
  search = "",
}) => {
  try {
    let res = await axiosinstance.get(
      `/employee?page=${page}&limit=${limit}&search=${search}&role=${role}&department=${department}&status=${status}`
    );
    return res.data.data;
  } catch (error) {
    console.log("error in all employee api", error);
  }
};

export let createEmployee = async (data) => {
  try {
    let res = await axiosinstance.post("/employee/create", data);
    
    return res.data.data;
  } catch (error) {
    console.log("error in create emp api", error);
  }
};

export let updateEmployee = async (empId, data) => {
  try {
    let res = await axiosinstance.patch(`/employee/update/${empId}`, data);
    
    return res;
  } catch (error) {
    console.log("Error in update employee api", error);
  }
};

