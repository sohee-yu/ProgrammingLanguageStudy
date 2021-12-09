class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int maxRank = 0;
        int minRank = 0;
        //1. lottos 원소들을 판단
        for(int lotto : lottos){

            if(lotto == 0){
                maxRank++;
            }else{
              //3. 현재 알고 있는 lotto 중에 몇개가 당첨됬는지(최소당첨수)
                for(int win: win_nums){
                    if(lotto == win) minRank++;
                }
            }             
        }
        //(미지의 lotto 번호가 모두 당첨됬을 때가 최고 등수)
        maxRank = maxRank + minRank;
        //answer = {최고당첨등수, 최소당첨등수}         
        int[] answer = {rank(maxRank),rank(minRank)};

        return answer;
    }
    //2. 등수 : 낙첨(6등) 이외 7에서 당첨 갯수를 빼면 등수 됨
    public static int rank(int n){        
        if(n>1){
           return 7-n;
        }else{
            return 6;
        }        
    }    
}