import React, { Component } from 'react'

export default class Navi extends Component {
    render() {
        return (
            <div>
                <h2>NaviComponent</h2>
            </div>
        )
    }
}


//class component : şöyle bir class --->export default class
//export,public anlamına geliyor.Yani diğer taraflardan erişilebilir demek.
//Navi.js in bir component olabilmesi için import "React," { Component } from 'react'" nesnesini extend 
//etmesi gerekir.
//import React, { Component } from 'react'

// export default class Navi extends Component {---->Navi bir componenttirçünkü 'Componenttten' miras almış.
//render ne işe yarıyor?                aslında bu örnekteki return bızım render a denk geliyor
//function App(){
//     return (
//         <div>
//             <h2>Hello from react!!</h2>
//         </div>
//     )
// }
//Peki render ne işe yarıyor? Componentlerde herhangi bir değişiklik olduğunda render ediliyor deriz.
//işte o render o componenti tekrardan çalıştırma,değişen veriye göre yineleme sürecidir.
