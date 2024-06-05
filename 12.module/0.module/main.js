// 모듈화
// 각각 파일마다 모듈 별로 캡슐화해서 원하는 것만 외부로 노출하는 방식

import increment from './counter'; // 파일 이름 변경 가능 (단일 내보내기 시 default)
import { increase, getCount } from './counter'; // 파일 이름 변경 불가 (다중 내보내기)
import { increase as increment } from './counter'; // 파일 이름 변경 하고 싶을 경우 as 키워드
import * as counter from './counter'; // 동일한 이름으로 그룹화 해서 가져오기

console.log(count);
increase(); // 모듈화해서 내보내기 -> 출력 시 사용 가능
console.log(count);

counter.increase();
console.log(counter.getCount());
