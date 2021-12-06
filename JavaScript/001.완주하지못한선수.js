function solution(participant, completion) {
    var answer = '';
    // 오롯이 내가 풀어 본 건데... 나름 머리 열심히 굴려서 썼는데 시간 초과라고 채점 자체를 거절당했다ㅠㅠ
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
    
    // 가장 일반적인 방법인 듯. 각 배열을 sort 해서 아예 같은지 비교하고, 다른 걸 answer 변수에 넣는 방식.
    participant.sort();
    completion.sort();
    
    for (var i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            return answer
        }
    }
    
    // map 을 사용해서 풀이한 좋은 코드라고 한다! map 부분 공부하면 이해할 수 있도록 주석 붙여놔야지
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }
    
    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';

    // 뭐지... 천잰가...?
    var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))
}
