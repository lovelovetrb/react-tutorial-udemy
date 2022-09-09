import React from 'react'


// propsは関数の引数で受け取る
const ColorfulMessage = (props) => {
    // jsの記法：分割代入
    const { color, message } = props;
    const contentStyle = {
        // cssのプロパティはキャメルケースで
        // 変数とプロパティが同じ場合宣言が一つで良い
        color,
        fontSize: '18px'
      }
    if(message !== '' ){
        return(<p style={contentStyle}>{ message }</p>)
    } else {
        return (<p style={contentStyle}>{ props.children }</p>)
    }
};

export default ColorfulMessage;