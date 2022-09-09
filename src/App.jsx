/* eslint react-hooks/exhaustive-deps: off */ 
// ↑ 構文解析ツールのeslintの設定変更（useEffect関連）
// コンポーネントでは.jsxでも良い
// コンポーネントのファイル名はパスカルケース（大文字始まり）で！
import React, {useEffect, useState} from 'react'
import ColorfulMessage from './components/ColorfulMessage';

// JSX記法では返却する要素を一つのタグで囲ってあげる必要がある
// 何も書かないかっこで囲えば良い
function App() {

  // useState
  // 一つ目にステートの変数名
  // 二つ目にステートが変化した時の関数名
  // useStateの引数はステートの初期値
  const [num, setNum] = useState(0);
  const [faceShowFlag,setFaceShowFlag] = useState(false);

    const onClickCountUp = () => {
      setNum(num+1)
    };

  // 第二引数の配列に入っている引数の状態が変化した時のみ，第一引数の関数の中の処理が行われるようになる
  // 配列の中身が空だと初めの一回の読み込みのみ関心を持つようになり関数の中を処理し，再レンダリングする
  useEffect(() => {
    if(num > 0){
      if(num % 3 === 0 ){
        // too many rendersが出た場合，レンダリング周りをチェックする
        faceShowFlag || setFaceShowFlag(true)
      } else {
        faceShowFlag && setFaceShowFlag(false)
      }
    }
  }, [num]);
  
    

    const cheangeFlag = () => {
      setFaceShowFlag(!faceShowFlag);
    };


    return (
    <>
    {/* cssはオブジェクトとして指定できる */}
    <h1 style={{ color: 'red' }}>こんにちは</h1>
    {/* Propsを使用する際はタグの中にプロップス名と値を記述する */}
    <ColorfulMessage color="Blue" message="">
      お元気ですか
    </ColorfulMessage>
    <ColorfulMessage color="Pink" message="元気です" />
    <button onClick={onClickCountUp}>カウントアップ</button>
    <p>{num}</p>
    <button onClick={cheangeFlag}>on/off</button>
    {faceShowFlag && <p>😏</p>}
    </>
    )
};

export default App