// 푸는 중
function solution(lottos, win_nums) {
	var answer = [];
	var count = '';
	var zero_count = '';
	for (i=0 ; i<lottos.length ; i++ ) {
		if ( lottos[i] == 0 ) {
			zero_count++;
		}
		for (j=0 ; j<win_nums.length ; j++) {
			if ( lottos[i] == win_nums[j] ) {
				couut++;
			}
		}
	}

    return answer;
}
