function solution(lottos, win_nums) {

    var count = ''; var zero_count = '';
    for (var i=0 ; i<lottos.length ; i++) {
        if ( lottos[i] == 0 ) {
            zero_count++;
        }
        for (var j=0 ; j<win_nums.length ; j++) {
            if ( lottos[i] == win_nums[j] ) {
                count++;
            }
        }
    }
    // 이 부분 뭔가 엄청 바보같이 푼 느낌... 짧게 못줄이나?
    var best = ''; var worst = '';
    if ( zero_count == 6) {
        best = 1 ; worst = 6;
    } else if ( count == 6) {
        best = 1 ; worst = 1;
    } else if ( count == 0 && zero_count == 0 ) {
        best = 6; worst = 6;
    } else {
        best = 7 - (count+zero_count); worst = 7 - count;
    }

    var answer = [ best, worst ];
    return answer;
}
