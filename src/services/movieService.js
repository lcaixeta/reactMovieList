import api from "./api";

const apikey = "apikey=408deef9";

// const getAll = () => {
//   return api.get("/tutorials");
// };

// const get = id => {
//   return api.get(`&t=${id}`);
// };

// const create = data => {
//   return http.post("/tutorials", data);
// };

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

const findByTitle = ({title, year}) => {

    let url = `?${apikey}`;
    
    if (title !== "") {
        console.log("title");
        url = url + '&s=' + title;
    }

    if (year !== "") {
        console.log("year");
        url = url + '&y=' + year;
    }
    console.log(url);

     return api.get(url);
};

export default {
//   getAll,
//   get,
//   create,
//   update,
//   remove,
//   removeAll,
  findByTitle
};
