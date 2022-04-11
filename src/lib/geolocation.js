var api = "https://api.postcodes.io/postcodes";

function PostcodetoLatLong (postcode) {
    return PostcodeConvert(postcode).then(function(data){
        console.log(data);
        let data1 = Object.assign({},data);
        return JSON.parse(JSON.stringify(data1));
    });
}

function LatLongtoPostcode (latitude, longitude) {
    return LatLongConvert(latitude, longitude).then(function(data){
        console.log(data);
        let data1 = Object.assign({},data);
        return JSON.parse(JSON.stringify(data1));
    });
}

async function PostcodeConvert (postcode) {
    let response = await fetch(api+"/"+postcode);
    let data0 = await response.json();
    let data = JSON.parse(JSON.stringify(data0));
    console.log(data);
    //console.log(data.result.latitude);
    //console.log(data.result.longitude);
    return [data.result.latitude, data.result.longitude];
}

async function LatLongConvert (latitude, longitude) {
    let response = await fetch(api+"?lon="+longitude+"&lat="+latitude);
    let data0 = await response.json();
    let data = JSON.parse(JSON.stringify(data0));
    console.log(data);
    //console.log(data.result.postcode);
    return data.result.postcode;
}

export { PostcodetoLatLong, LatLongtoPostcode }