// import {sayNiceThings} from "./say-hello.js";
const {sayNiceThings, tellMeYouLoveMe} = require('./say-hello');

{
    // const $ = import('jquery');
    const $ = require('jquery');


    $(document).ready(() => {
        "use strict";

        let sayHello = () => {
            console.log("hello");
        };

        $('h1').css('background-color', 'red').css('font-size', '48px');
        sayHello();
    });

    tellMeYouLoveMe();
    sayNiceThings();

}
