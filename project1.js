
// let a;
// let hours;
// let minutes;
// let seconds;
// let date;
// let time;
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// setInterval(() => {
    
//     a = new Date();
//     console.log(a);

//     hours = a.getHours();
//     minutes = a.getMinutes();
//     seconds = a.getSeconds();
//     date = a.toLocaleDateString(undefined , options);


//     time = hours + ":" + minutes + ":" + seconds;
//     document.getElementById("time").innerHTML = time + "<br>" + date;
//     document.getElementById("NYtime").textContent = newYorkTime;
// }, 1000);

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded Event: The "DOMContentLoaded" event is fired by the browser when the HTML document (the DOM, or Document Object Model) has been completely loaded and parsed. This means that all HTML elements in the document are available for manipulation via JavaScript.
    // Event Listener: addEventListener is a method that allows you to register a function (the event handler) to be executed when a specified event occurs on a specified element or object. In this case, we're registering an event listener on the document object.
    //Function as Event Handler: The second argument to addEventListener is an anonymous function, which serves as the event handler. This function contains the code that you want to execute when the "DOMContentLoaded" event occurs.
    //So, when you see document.addEventListener("DOMContentLoaded", function () { /* code here */ });, it means that the code within the anonymous function will run as soon as the HTML document is fully loaded by the browser. This is a common practice in web development because it ensures that your JavaScript code runs after the HTML is ready, which is important to avoid issues where JavaScript interacts with HTML elements that haven't been created or parsed yet.

    let a;
    let hours;
    let minutes;
    let seconds;
    let localDate;
    let localTime;
    let newYorkDate; // To store the formatted New York date
    let newYorkTime; // To store the formatted New York time
    let GMTDate;
    let GMTTime;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   
    const newYorkOptions = {
    timeZone: 'America/New_York',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };
    
    const GMTOptions = {
    timeZone: 'GMT',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };

    const BSTOptions = {
    timeZone: 'Europe/London',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };

    // Function to update the times
    function updateTimes() {
        a = new Date();
        // console.log(a);

        hours = a.getHours();
        minutes = a.getMinutes();
        seconds = a.getSeconds();
        
        // Calculate the local date and time
        localDate = a.toLocaleDateString(undefined, options);
        localTime = hours + ":" + minutes + ":" + seconds;
        
        // Calculate New York time and date
        // const newYorkOptions = { timeZone: 'America/New_York', ...options }; // Include timeZone option
        
        //`...options`: This is the spread syntax (`...`) used to copy the properties of the `options` object into the new `newYorkOptions` object. It effectively merges the properties of `options` into the new object.
        //So, the resulting `newYorkOptions` object contains all the properties and values of the `options` object, but with an additional property `timeZone` set to `'America/New_York'`. This is useful when you want to include some default options (`options`) and then add or override specific options (`timeZone`) for a particular use case.

        //newYorkDate = new Date().toLocaleDateString(undefined, newYorkOptions);
        //newYorkTime = new Date().toLocaleTimeString(undefined, { timeZone: 'America/New_York' });

        newYorkDate = new Date().toLocaleString(undefined, newYorkOptions);
        newYorkTime = new Date().toLocaleTimeString(undefined, { timeZone: 'America/New_York', hour12: false });

        GMTDate = new Date().toLocaleString(undefined, GMTOptions);
        GMTTime = new Date().toLocaleTimeString(undefined, { timeZone: 'GMT', hour12: false  });

        BSTDate = new Date().toLocaleString(undefined, BSTOptions);
        BSTTime = new Date().toLocaleTimeString(undefined, { timeZone: 'Europe/London', hour12: false });
        
        // Update the displayed times
        document.getElementById("time").innerHTML = localTime + "<br>" + localDate;
        document.getElementById("NYtime").innerHTML = newYorkTime + "<br>" + newYorkDate;
        document.getElementById("GMTTime").innerHTML = GMTTime + "<br>" + GMTDate;
        document.getElementById("BSTtime").innerHTML = BSTTime + "<br>" + BSTDate;
    }

    // Set an interval to update the times every second
    setInterval(updateTimes, 1000);

    // Handle "Browse Time" button click to initially update the times
    document.querySelector(".btn-primary").addEventListener("click", updateTimes);
});
