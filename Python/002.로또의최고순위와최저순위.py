# 인덴트 에러 죽일까...
def solution(lottos, win_nums):
    count = 0
    zero_count = 0

    for i in range(len(lottos)):
        if (lottos[i] == 0):
            zero_count += 1
        for j in range(len(win_nums)):
            if lottos[i] == win_nums[j]:
                count += 1

    best = 7 - (count + zero_count) if (count != 0 or zero_count != 0) else 6
    worst = 6 if count == 0 else 7 - count

    answer = [best,worst]    
    return answer
  
  # 와 여기도 rank 로 푼 게 가장 인기 많구나... JS 도 그러더니. 익혀둬야지
  def solution(lottos, win_nums):

    rank=[6,6,5,4,3,2,1]

    cnt_0 = lottos.count(0)
    ans = 0
    for x in win_nums:
        if x in lottos:
            ans += 1
    return rank[cnt_0 + ans],rank[ans]
