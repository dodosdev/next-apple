


export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'] //상품 3개

  // let 어레이 = [2, 3, 4]
  // let b = 어레이.map((a) =>{
  //   return 10// console.log(a);
  // })
  // // console.log(i); //반복될때마다 0부터 1씩 커지는 정수
  // console.log(b);
  
  
  return (
    <div>
      <h4  className="title">상품목록</h4>
      {
        상품.map((a, i)=> {  //i는 index를 가져옴 반복문 돌때마다 0 1 2 3
          //map반복문 사용시 key={유니크한값}을 넣어줘야함
          return (
          <div className="food" key={i}> 
            <img src={`/ny${i}.png`}  className="food-img"/>
            <h4>{a} $40</h4> 
          </div>
          //{`/ny${i}.png`} 0부터 순서대로 출력됨
          )
        })
      }
    </div>
  );
}


