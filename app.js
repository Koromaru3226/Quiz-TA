// 問題、選択肢、解答を定義
const quiz = [
  {
    exam:'アジャイル開発のテストの計画はいつ開始するか？',
    answers: [
      'a.プロジェクト開始時',
      'b.テスト分析時',
      'c.ステークスホルダーとの会議時',
      'd.テスト実行時に計画～実行まで同時に行う'
    ],
    correct:'a.プロジェクト開始時',
    kaisetu:'【解説】アジャイル開発もシーケンシャル開発もテスト計画はプロジェクト開始時に行います。開始時は開始時と覚えましょう！'
  },{
    exam:'システムテストのテスト環境実装はいつ開始するか？（複数回答可）',
    answers: [
      'a.テスト設計時',
      'b.コンポーネントテスト時',
      'c.コーディング時',
      'd.テスト実装時'
    ],
    correct:['a.テスト設計時','b.コンポーネントテスト時','c.コーディング時'],
    kaisetu:'【解説】環境実装は「テスト設計」「コンポーネントテスト」「コーディング」と同時に行います'
  },{
    exam:'テスト分析の活動内容として適切なものはどれか？',
    answers: [
      'a.プロダクトを検証して、仕様に関する欠落がないかを確認する',
      'b.テスト技法を選択する',
      'c.テストケースとテストベースの双方向にトレーサビリティを構築する',
      'd.プロジェクトで展開されたテストベースを分析する'
    ],
    correct:'d.プロジェクトで展開されたテストベースを分析する',
    kaisetu:'【解説】aはテスト実装、bはテスト計画、cはテスト設計'
  },{
    exam:'テストオラクルとして最も適切なものはどれか？',
    answers: [
      'a.テストベースから分析した内容を手動で抽出する',
      'b.エラーがないように極力自動化して、作成する',
      'c.テストベースに記載されていることをステークホルダーに確認する',
      'd.高度に自動化されたテスト実行ログを基に作成する'
    ],
    correct:'b.エラーがないように極力自動化して、作成する',
    kaisetu:'【解説】aはエラーしやすい、cはテストベースに記載されていないことを確認することでテストオラクルになります、dはリリース前のプロダクトではテストオラクルになりません'
  },{
    exam:'テスト分析の開始基準として適切なものはどれか？（複数回答可）',
    answers: [
      'a.ステークホルダーにテスト要求されたテストベースが揃っていること',
      'b.展開されたテストベースにプロダクトの体系的な知識が搭載されていること',
      'c.以降のテストプロセスの工数が十分に確保されていないこと',
      'd.テストベースのレビューが完了していること'
    ],
    correct:'b.展開されたテストベースにプロダクトの体系的な知識が搭載されていること',
    kaisetu:'【解説】aはテスト要求部分だけではない、cは以降の工数は確保する必要があります、dはレビューが完了ではなく、適切なレビューで合格していること'
  },{
    exam:'テスト設計の活動内容として適切なものはどれか？',
    answers: [
      'a.テスト技法を適用する',
      'b.テスト技法を選択する',
      'c.テスト技法を決定する',
      'd.テスト技法を分析する'
    ],
    correct:'c.テスト技法を決定する',
    kaisetu:'【解説】aはテスト分析、bはテスト計画、dはテスト技法は分析するものではありません。決まったやり方があります'
  }
]

const quizlength = quiz.length;
let quizindex = 0;
let score = 0;
  

const $button = document.getElementsByTagName('button');
const buttonlength = $button.length;

// ボタンの文字を取得して、問題、選択肢、解答にそれぞれ書き換えて、HTMLへ反映
const setupexam = () => {
  document.getElementById('question-container').textContent= quiz[quizindex].exam;
  let buttonindex = 0;
  while(buttonindex < buttonlength){
    $button[buttonindex].textContent= quiz[quizindex].answers[buttonindex];
    buttonindex++;
  }
}
setupexam();

// ボタンを押したときの判定
const clickhandler = (e) => {
  if(quiz[quizindex].correct === e.target.textContent){
    alert('正解！おめでとうございます！');
    score++;
 }else{
    alert('不正解！解説参照');
    window.alert(quiz[quizindex].kaisetu);
 }

quizindex++;
if(quizindex < quizlength){
  setupexam();
}else{
  window.alert('終了！お疲れ様でした！');
  window.alert('あなたの正解数は' + score + '/' + quizlength + 'です！');
}

};

 // 各ボタンを押したときの判定
let handleindex = 0;
while (handleindex < buttonlength) {
  $button[handleindex].addEventListener('click', (e) => {
    clickhandler(e);
    });
    handleindex++;
}


// particlesJS.load('particles-js', 'assets/particles.json', function() {
// console.log('callback - particles.js config loaded');
//   });