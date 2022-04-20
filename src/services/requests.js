import axios from  "axios";
import { BASE_URL } from "../constants/urls";

const headers = {
    headers: {
        authorization: "80bb13b8-3180-4529-b5b5-9aed6a957a35"
    }

};

export const createJob = async(obj, resetInput) => {
    const body = {
        title:obj.title,
        description:obj.description,
        price:Number(obj.price),
        paymentMethods:obj.paymentMethods,
        dueDate:obj.dueDate
    };

    try {
        const res = await axios.post(`${BASE_URL}/jobs`, body, headers);
        console.log(res.data)
        resetInput();
    }
    catch (err) {
        console.log(err.response.data)
        alert(err.response.data.message)
    };
};
