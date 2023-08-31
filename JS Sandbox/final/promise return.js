
var main = function(){
  var jwt;
  var promise = getJWT()//calling promise
  .then (function(response){
  jwt = response.body.jwt;
  return jwt
  })
  .then (function(){
  var options ={
    uri: 'link',
    headers: {
      'x-mts-ssid':jwt,
      'Host':'somehost.com'
    },
      resolveWithFullResponse: true,
      json: true
    };
    //console.log (request.get(options))
    return request.get(options);
  })
return promise
}
main();//result will be request.get(options);
