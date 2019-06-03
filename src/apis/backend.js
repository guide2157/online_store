import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://n57b4qag5a.execute-api.us-west-2.amazonaws.com/dev/tane'
    }
);