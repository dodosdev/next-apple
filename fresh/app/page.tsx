import Link from 'next/link';

export default function Home() {
  let name = 'park'
  return (
    <div>
      <h4  className="title">애플 후레시</h4>
      <p className="title-sub">by dev dodo { name }</p>
      <a href="">링크</a>
    </div>
  );
}
