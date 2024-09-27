import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="container md:p-20">
        <div className="container font-semibold flex flex-col md:flex-row justify-center items-center md:text-lg text-center">
          <div className="image-resize">
            <Image
              src="/myPhoto.JPG"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <p className="p-12 text-center">
            はじめまして、長島零です。
            <br />
            私は現在、独学でITエンジニアリングを学んでいます。
            <br />
            まだまだ分からないこともあり発展途上ですが、
            <br />
            新しい知識を吸収し実践することに日々挑戦しています。
            <br />
            <br />
            幅広い分野や言語をさまざま学んでおります。
            <br />
            バスケットボールで培ったチームワークや挑戦する姿勢を、
            <br />
            エンジニアとしての成長にも活かしたいと考えています。
            <br />
            さらに自分の技術力を磨きながら、
            <br />
            チームの一員として成果を出せるように切磋琢磨したい、
            <br />
            また、毎日英語学習もしているため
            <br />
            さまざまなところで活かせるように両立して学んでいます。
          </p>
        </div>
        <div className="mt-12 container font-semibold flex flex-col justify-center items-center md:text-lg text-center md:flex-row-reverse">
          <div className="md:image-resize">
            <Image
              src="/myBasket.JPG"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <p className="p-12 text-center">
            こんにちは、2000年に神奈川県で生まれ、最近茨城県に引っ越してきた24歳です。
            <br />
            小学年生から始めたバスケットボールが今年で、16年ほど経ちます。
            <br />
            最近は人間性を高めたくて読書をしようと思い、
            <br />
            自己成長や新しいことに挑戦する本を読んでいます。
            <br />
            ITエンジニアとしての道を独学で進んでいる最中で、
            <br />
            技術はまだ発展途上ですが、常に挑戦し続けてより良い自分を目指しています。
            <br />
            <br />
            それから、バイクに乗るのも大好きで、風を感じながらのツーリング
            <br />
            バイクに乗りながら見る景色は最高です！
            <br />
            挑戦と成長を楽しみながら、次のステップに進もうとしています。
            <br />
            ITの勉強に集中し、バスケで培ったチームワークや粘り強さを活かしてプロジェクトに挑戦したいです。
            <br />
            まだ学ぶことは多いけど、技術と人とのつながりを大事にしていきたいです！。
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
