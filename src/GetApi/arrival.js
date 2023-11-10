import axiosClient from "@/axiosClient";
import fakeApi from "@/fakeApi";
const Arrival = {
  getAll: (params = null) => {
    return fakeApi.listNewArrival;
  },
  getAllInsta: (params=null) => {
    return fakeApi.listImgInsta;
  },
};
export default Arrival;
