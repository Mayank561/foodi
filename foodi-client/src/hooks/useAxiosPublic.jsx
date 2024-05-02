import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://food-app-9vsf.onrender.com/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
