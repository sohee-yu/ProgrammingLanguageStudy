## JS 에서 푼 거 그대로 python 으로 구현하려고 했는데 똑같이는 안돌아가더라...
def solution(participant, completion):
    answer = ''
    
    participant.sort()
    completion.sort()
    
    for i in range(len(completion)):
        if (participant[i] != completion[i]):
            answer = participant[i];
            return answer
          
    ## 마지막에 끝까지 안맞을 경우에는 마지막 요소의 이름이 완주하지 못한 선수라는 코드도 넣어줘야 했음
    answer = participant[-1];
    return answer

##  해시함수로 구현한 거라고! 이게 가장 문제에 적합한 답이라는데 JS 는 map, python 은 해시 공부해야지
def solution(participant, completion):
    answer = ''
    temp = 0
    dic = {}
    for part in participant:
        dic[hash(part)] = part
        temp += int(hash(part))
    for com in completion:
        temp -= hash(com)
    answer = dic[temp]

    return answer

## collections 랑 counter 가 뭐죠...
import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
