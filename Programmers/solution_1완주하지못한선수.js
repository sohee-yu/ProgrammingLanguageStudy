/*function solution(participant, completion) {
    
    var answer = '';
    let hashed = []
    participant.forEach(entry => {
        hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1        
    })
    completion.forEach(entry => {
        hashed[entry] = hashed[entry] - 1
    })
 
    for (var key in hashed) {
        if (hashed[key] >= 1) return key
    }
    
    return answer;
    
    

}*/
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );
