import React from "react";

const RatingCriteria = () => {
  const ratings = [
    {
      id: 1,
      index: "学習中",
      content: "本や公式ドキュメントで、基本的な概念や文法について学習中",
    },
    {
      id: 2,
      index: "基礎理解",
      content:
        " 基本的な文法や概念を理解している。簡単なプログラムやスクリプトを書くことができる。",
    },
    {
      id: 3,
      index: "実践経験",
      content: "いくつかの簡単な学習プロジェクトやタスクを完了している。",
    },
    {
      id: 4,
      index: "専門知識の習得",
      content:
        "複数のプロジェクトでの経験があり、特定の領域での深い知識を持ち始めている。",
    },
    {
      id: 5,
      index: "実用的なデプロイ",
      content: "実際にユーザーがいる、実用的なものを独力でデプロイした。",
    },
  ];
  return (
    <>
      {ratings.map((rating, index) => (
        <div
          key={rating.id}
          className="container md:flex  items-center list-none md:p-4 border-b pb-2"
        >
          <ul className="text-black font-medium ">
            <icon className="text-yellow-400 pr-2">{"★".repeat(index + 1)}</icon>
            {rating.index}
          </ul>
          <li className="text-sm md:text-base md:pl-2">{rating.content}</li>
        </div>
      ))}
    </>
  );
};

export default RatingCriteria;
