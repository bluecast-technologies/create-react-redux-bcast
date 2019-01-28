// Util.js contains the basic localstorage functions
export class Util {
    
    headerContext = null;

    // setItem is to set a value into localstorage
    static setAuthToken(token) {
        localStorage.clear();
        return localStorage.setItem("authToken", token);
    }

    // getItem is to get the value stored in localStorage
    static getAuthToken() {
        return localStorage.getItem("authToken");
    }

    // removeItem is to remove a particular value in local storage
    static removeAuthToken() {
        localStorage.removeItem("authToken");
    }

    // clear() clears the localstorage completely
    static clearLocal() {
        localStorage.clear();
    }

    // React loader
    static setHeaderContext(context) {
        this.headerContext = context;
    }
    static getHeaderContext(context) {
        return this.headerContext;
    }
    static toggleHeaderLoader(value) {
        if (this.headerContext) {
            this.headerContext.setState({ showLoader: value });
        }
    }

}