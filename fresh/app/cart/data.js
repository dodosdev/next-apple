let age = 20;
export default age;  //다른곳에서 이 데이터를 사용하려면 export 내보내기 export default를 해줘야함

//여러개를 내보내고 싶으면 export default를 빼고 export만 사용하면됨
//export {age, age2} //여러개를 내보내기
// import {age, age2} from './data.js' //여러개를 가져오기