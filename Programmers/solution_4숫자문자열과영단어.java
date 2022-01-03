class Solution {
    public int solution(String s) {
        //1. 영단어가 배열로 만들었을때, index 번호와 숫자가 같다는 것 생각남
        String[] eng = {"zero", "one", "two", "three","four","five","six","seven","eight","nine"};
        //2. 처음엔 문자열(s)자체에서 순서대로 필터?나 steam 써서 바꿔줘야 했지만, 
        //그냥 통으로 replace로 index값 (아래에서는 반복문의 i값)으로 넣어줌
        //위에 방법 찾아보다가 나온 solution이기때문에 한문제 더 풀어보기로...
        for (int i = 0 ; i <eng.length; i++){
            s = s.replace(eng[i] , String.valueOf(i));
        }
        //문자열 s값 int 변환
        return Integer.parseInt(s);
    }   
    
}