import React, { Component } from 'react';

const Kitap = props => (
    <div> {props.kitap.isim} - {props.kitap.adet}</div>
);

function App() {
    const kitaplar = [
        {
            isim: "Suç ve Ceza",
            adet: 30
        },
        {
            isim: "Bin Ömrüm Olsa",
            adet: 15
        },
        {
            isim: "Sefiller",
            adet: 10
        },
    ];

    return (
        <div className="App">
            {
                kitaplar.map((item,key) => <Kitap key={key} kitap={item} />)
            }
        </div>
    )
}


export default App;





