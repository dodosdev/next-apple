import 작명 from './data.js';
// import 작명 from './../data.js';//현재 위치에서 상위폴더로 이동

// 'use client' // 이 파일은 client component임을 명시
//component 만들
// next.js컴포넌트는 종류 2가지
// 1. server component - 로딩속도 빠름, 검색엔진 노출 유리, html에 자바스크립트 기능넣기 불가능(useEffect, useState 사용 불가)
// 2. client component - 로딩속도 느림(자바스크립트많이필요), html에 자바스크립트 기능넣기 가능(useEffect, useState 사용 가능), hydration(서버에서 html을 만들어서 클라이언트에 전달하는 것) 필요
// 파일 맨 위에 'use client'를 넣어주면 client component가 됨

// 기능이 필요한곳은 client component로 만들고, 기능이 필요없는곳은 server component로 만들면 됨

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명{작명}</p>
        <p> $40</p>
        <p>1개</p>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}

function CartItem(){
  return (
    <div className="cart-item">
      <p>상품평</p>
      <p>$70</p>
      <p>1개</p>
    </div>
  )
}