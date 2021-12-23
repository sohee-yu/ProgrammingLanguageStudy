class Solution {
    public String solution(String new_id) {
        String answer = "";
        
        String id = new_id.toLowerCase(); // 소문자로 
        id = id.replaceAll("[^-_.a-z0-9]", ""); //-_. 영문자 숫자만 남김 
        id = id.replaceAll("[.]{2,}", "."); // .2개 이상 .으로 
        id = id.replaceAll("^[.]|[.]$", ""); // 처음과 끝 . 제거 

        if(id.equals("")) // 빈 문자열이라면 a 추가 
            id += "a";
            
        if(id.length() >= 16){ // 16자 이상이면 15자로 
            id = id.substring(0, 15);
            id = id.replaceAll("^[.]|[.]$", ""); // 끝 . 제거 
        }
        if(id.length() <= 2) // 2자 이하라면 3자까지 마지막 문자추가 
            while(id.length() < 3)
                id += id.charAt(id.length() - 1);

        answer = id;        

        return answer;
    }
}
/*
테스트 1 〉	통과 (0.17ms, 74.7MB)
테스트 2 〉	통과 (9.86ms, 77.6MB)
테스트 3 〉	통과 (8.76ms, 81MB)
테스트 4 〉	통과 (0.23ms, 77.7MB)
테스트 5 〉	통과 (0.21ms, 71.5MB)
테스트 6 〉	통과 (0.18ms, 73.1MB)
테스트 7 〉	통과 (0.18ms, 75.4MB)
테스트 8 〉	통과 (0.24ms, 72MB)
테스트 9 〉	통과 (9.00ms, 79.2MB)
테스트 10 〉	통과 (0.16ms, 75.2MB)
테스트 11 〉	통과 (0.19ms, 74.8MB)
테스트 12 〉	통과 (0.35ms, 71.6MB)
테스트 13 〉	통과 (9.34ms, 79.4MB)
테스트 14 〉	통과 (0.26ms, 84.8MB)
테스트 15 〉	통과 (0.30ms, 77.6MB)
테스트 16 〉	통과 (0.50ms, 75.4MB)
테스트 17 〉	통과 (1.01ms, 85.6MB)
테스트 18 〉	통과 (1.84ms, 75.3MB)
테스트 19 〉	통과 (1.85ms, 67.1MB)
테스트 20 〉	통과 (2.75ms, 74.7MB)
테스트 21 〉	통과 (2.81ms, 74.6MB)
테스트 22 〉	통과 (15.52ms, 76.5MB)
테스트 23 〉	통과 (11.80ms, 85.1MB)
테스트 24 〉	통과 (2.21ms, 69.9MB)
테스트 25 〉	통과 (1.39ms, 81.2MB)
테스트 26 〉	통과 (1.17ms, 72.4MB)

*/