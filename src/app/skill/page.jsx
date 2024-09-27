import RatingCriteria from "../../components/RatingCriteria"; // RatingCriteriaをインポート
import SkillList from "@/components/SkillList";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Skill = () => {
  return (
    <div className="container md:p-20 md:pt-0">
      <div className="container mx-auto md:p-8 mb-5">
        <h2 className="text-3xl font-extrabold mb-12 md:m-6 underline text-center text-white">
          My Skills
        </h2>
        <div className="flex justify-center items-center">
          <Link
            href="https://github.com/rei1091"
            className=" md:flex "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="m-1" />
            Git hubはこちら
          </Link>
        </div>

        <SkillList />
      </div>

      <div className="container pt-2 md:p-2 text-center border">
        <h2 className="md:p-4 p-1 text-xl font-semibold text-blue-800 ">
          [評価基準]
        </h2>
        <p className=" text-gray-700">独自の評価基準は以下の通りです。</p>
        <RatingCriteria />
      </div>

      <div className="container pt-4 md:m-5">
        <h2 className="p-4 pt-12 text-2xl md:text-3xl font-semibold text-white underline text-center">
          学習中の技術と目標
        </h2>
        <p className="font-semibold pb-6 pt-2 text-center">
          現在、以下の技術を学んでおり、さらにスキルを向上させたいと考えています。
        </p>
        <div className="container  flex flex-col items-center p-10 md:p-2 md:font-medium">
          <ul className="list-disc text-white text-lg md:text-xl">
            <li>基礎をしっかり固める</li>
            <li>モダンな言語やフレームワークも含めて学習</li>
            <li>
              バックエンド・フロントエンドにこだわらずフルスタック開発に挑戦する
            </li>
            <li>ネットワークやインフラなど幅広い知識を網羅する</li>
            <li>様々なタイプのアプリケーションを構築</li>
            <li>開発環境を学ぶ</li>
            <li>コミュニケーションの円滑な方法を習得する</li>
            <li>ドキュメントをしっかりと読めるようにする</li>
            <li>検索、調査力を上げる</li>
          </ul>
        </div>
        <p className="mt-6 text-center md:font-medium">
          これらの目標を達成するために、日々オンラインコースやプロジェクトに取り組んでいます。
          <br />
          まだまだ補わなければならない知識や技術などがあるので、常にアンテナを立てて情報を活用できるように心がけています。
        </p>
      </div>
    </div>
  );
};

export default Skill;
