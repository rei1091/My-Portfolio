import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container md:p-20 flex flex-col items-center justify-center text-center">
      <Image
        src="/top.png"
        width={600}
        height={300}
        alt="Basket image"
        className=" p-1 h-auto md:w-1/2"
      />
      <div className="container p-4">
        <h1 className="font-bold text-2xl md:text-3xl md:pt-14">
          毎日の技術の鍛錬
        </h1>
        <div className="container p-2 md:pt-10 md:px-48">
          <p
            className="  font-semibold text-xl md:text-2xl"
            style={{ lineHeight: "2.8" }}
          >
            "自分の挑戦、練習の日々、それぞれの努力が生み出すチームワーク
            <br />
            初めてボールを手にした時のような感覚、うまくいかずに葛藤する日々、
            <br />
            少しずつ身について味わう達成感、それでもまだまだ足りないと藻掻いて
            <br />
            また立ち向かう。
            <br />
            何事もそんな連続なんだと気付かされ、
            <br />
            今度はバスケコートの外で 活躍してみようと思った。"
          </p>
        </div>
      </div>
    </div>
  );
}
