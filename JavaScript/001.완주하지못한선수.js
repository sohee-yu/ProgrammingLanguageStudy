function solution(participant, completion) {
    var answer = '';
    // 나름 머리 열심히 굴려서 썼는데 시간 초과라고 거절당했다ㅠㅠ
    /*
    var count = 0;
    for ( var i=0 ; i<participant.length ; ) {
        for ( var j=0 ; j<completion.length ; ) {
            if ( participant[i] == completion[j] ) {
                i++;
            }
            count++;
        }
        if ( count == completion.length ) {
            answer = participant[i];
            return answer;
        }
    }
    */
    // 가장 일반적인 방법인 듯. 각 배열을 sort 해서 아예 같은지 비교하고, 다른 걸 answer 변수에 넣는 방식.
    participant.sort();
    completion.sort();
    
    for (var i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            return answer
        }
    }
    // 뭐지... 천잰가...? 이건 map 개념 모르면 절대 못풀듯...
    var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))
}
