import propertiesList from "./properties.json";

// apiUrlConstants file is to keep all the api url's used
// in the entire application. Here we combine the base
// url, and the Api url to give the complete url passed in api calls
export class ApiUrlConstant {

    static BASE_URL = propertiesList.apiServer;

    static API_URLS = {
        login: "user/login",
    };

    // getApiUrl function is called from service file by passing the
    // unique key to fetch the url values => 
    // Function will return the complete API URL
    static getApiUrl(key) {
        return this.BASE_URL + this.API_URLS[key];
    }
}