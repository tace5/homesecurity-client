/**
 * Created by Linus Bein Fahlander on 2018-02-12.
 */

const API_SETTINGS = {
    api: {
        root: "hs.linusbf.com/api",
    },
    requests:{
        name: {
            api_uid: "user",
            post_data:{
                "username": -1,
                "device_token": -1,
            },
            display:{
                title: "Your name",
            }
        },
        email: {
            api_uid: "email",
            post_data:{
                "email": -1,
                "device_token": -1,
            },
            display:{
                title: "Alert Email(s)",
            }
        },
        phone: {
            api_uid: "phone",
            post_data:{
                "number": -1,
                "device_token": -1,
            },
            display:{
                title: "Alert Number(s)",
            }
        },
    },
};

export default API_SETTINGS;
