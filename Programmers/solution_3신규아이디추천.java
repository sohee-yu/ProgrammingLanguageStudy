class Solution {
     public String solution(String new_id) {
        String answer = "";
        
     answer = step1(new_id);
     answer = step2(answer)

        return answer;
    }
    //1. 모든 대문자를 대응되는 소문자로 치환
    public static String step1(String id){        

        id = id.toLowerCase(); //소문자치환

        return id;        
    }

    //2. 특수문자 제거
    public static String step2(String id){
        Sting new_id = "";

        // for 반복문을 선언해서 문자 한글자씩 확인 실시
		for(int i=0; i<id.length(); i++) {			
			if (String.valueOf(id.charAt(i)).matches("^[a-zA-Z0-9]*$")) { // 지정된 패턴 형식 문자열인 경우
				new_id += id.charAt(i); // 문자열 추가
			}
		}
		
		// 공백까지 제거해서 결과 반환 시 사용
		new_id = new_id.replaceAll(" ", "");

        return new_id;  
    }    
}
