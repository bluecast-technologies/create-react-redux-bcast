import { Util } from "./util";
const apiStack = [];

export class Api {

    static doGet(url, accessToken = true) {
        const headers = {};

        // Set the access token stored in local storage to headers
        if (accessToken) {
            headers['Authorization'] = localStorage.getItem('accessToken');
        }

        const conf = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        };
        if (url.indexOf("notifications/all") <= 0) {
            Util.toggleHeaderLoader(true);
            apiStack.push(1);

        }
        return fetch(url, conf).then((resp) => {
            const errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }

            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });;
    }

    static doGetWithOutAuth(url, accessToken = true) {
        const headers = {};
        headers['Content-Type'] = 'application/json';

        const conf = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        };
        if (url.indexOf("notifications/all") <= 0) {
            Util.toggleHeaderLoader(true);
            apiStack.push(1);
        }
        return fetch(url, conf).then((resp) => {
            const errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }

            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });;
    }

    static doUploadMultipart(url, payload, headers = {}) {
        payload = payload || {};
        headers['Authorization'] = localStorage.getItem('accessToken');
        // headers['Content-Type'] = 'multipart/form-data; boundary=CUSTOM';
        const conf = {
            method: 'post',
            headers: headers,
            body: payload
        };
        Util.toggleHeaderLoader(true);
        return fetch(url, conf).then((resp) => {
            const errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }

            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });
    }

    static doDownload(url, payload, headers = {}) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = '*';
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Authorization'] = localStorage.getItem('accessToken');
        payload = payload || {};
        const conf = {
            method: 'post',
            headers: headers,
            mode: 'cors',
            datatype: "JSONP",
            body: JSON.stringify(payload)
        };
        Util.toggleHeaderLoader(true);
        return fetch(url, conf).then((resp) => {
            const errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }

            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });
    }

    static doPost(url, payload, headers = {}, accessToken = true) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = '*';
        headers['Access-Control-Allow-Origin'] = '*';
        if (accessToken) {
            headers['Authorization'] = localStorage.getItem('accessToken');
        }
        payload = payload || {};
        const conf = {
            method: 'post',
            headers: headers,
            mode: 'cors',
            datatype: "JSONP",
            body: JSON.stringify(payload)
        };
        Util.toggleHeaderLoader(true);
        return fetch(url, conf).then((resp) => {
            const errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }

            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });
    }

    static doPut(url, payload, headers = {}, accessToken = true) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = '*';
        headers['Access-Control-Allow-Origin'] = '*';
        if (accessToken) {
            headers['Authorization'] = localStorage.getItem('accessToken');
        }
        const conf = {
            method: 'put',
            headers: headers,
            mode: 'cors',
            body: JSON.stringify(payload)
        };
        Util.toggleHeaderLoader(true);
        return fetch(url, conf).then((resp) => {
            let errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }

            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });;
    }

    static doDelete(url, headers = {}, accessToken = true) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = '*';
        headers['Access-Control-Allow-Origin'] = '*';
        if (accessToken) {
            headers['Authorization'] = localStorage.getItem('accessToken');
        }
        const conf = {
            method: 'delete',
            headers: headers,
            mode: 'cors'
        };
        Util.toggleHeaderLoader(true);
        return fetch(url, conf).then((resp) => {
            let errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            apiStack.pop();
            if (apiStack.length <= 0) {
                Util.toggleHeaderLoader(false);
            }
            if (resp.ok) {
                return resp.json();
            } else if (resp.status == "401") {
                errorResponse.status_code = 401;
                errorResponse.network_error = true;
                errorResponse.status_message = "Your session has expired";
                // TODO : Replace with toast
                console.log(errorResponse.status_message)
                Util.clearLoggedInUserData();
                localStorage.clear();
                window.location.href = "/#/login/Your-session-expired";
            }
            throw errorResponse;
        })
            .catch((error) => {
                apiStack.pop();
                if (apiStack.length <= 0) {
                    Util.toggleHeaderLoader(false);
                }
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });;
    }

    static getAuthToken(url, payload, headers = {}) {
        headers['Accept'] = '*';
        headers['Access-Control-Allow-Origin'] = '*';
        payload = payload || {};
        const conf = {
            method: 'post',
            headers: headers,
            mode: 'cors',
            body: payload
        }

        return fetch(url, conf).then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            const errorResponse = {
                network_error: true,
                status_code: 500,
                status_message: "Something went wrong in network"
            };
            throw errorResponse;
        })
            .catch((error) => {
                const errorResponse = {
                    network_error: true,
                    status_code: 500,
                    status_message: "Something went wrong in network"
                };
                throw errorResponse;
            });;
    }

}