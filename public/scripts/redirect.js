var urlCurrent = location.href

var queryString = urlCurrent.substr(28);

setTimeout(() =>{
    location.href = `/study${queryString}` 
}, 5000)


