import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const words = ['从 3 月 8 日起', 'à partir du 8 mars', 'ab 8. März', "dall'8 marzo", 'a partir de 8 de março', 'From March 8', "8 मार्च से", 'Mulai 8 Maret', 'Από 8 Μαρτίου', '3월 8일부터', 'Vanaf 8 maart', 'Nga data 8 mars', 'З 8 сакавіка', 'От 8 март', 'Od 8. marta', 'Od 8. marca', 'Alates 8. märtsist', 'Mula Marso 8', 'מה-8 במרץ', 'Március 8-tól', 'Ó 8 Márta', '从 3 月 8 日起', 'No 8. marta', 'Nuo kovo 8 d', 'Од 8 март', 'Mulai 8 Maret', 'از 8 مارس', 'Din 8 martie', 'Od 8. marca', 'Apati 8 mas', 'ከማርች 8 ጀምሮ', 'Dende o 8 de marzo', 'Martın 8-dən', 'Од 8. марта', 'A partir du 8 mars', "Da l'8 di marzu", 'Từ ngày 8 tháng 3', 'Frá 8. mars sl', 'Kuanzia Machi 8', 'ከርች ምሮ', 'Lati Oṣu Kẹta Ọjọ 8', 'Od 8. marta', 'Մարտի 8-ից', '8 наурыздан бастап', "8-марттан баштап", 'Từ ngày 8 tháng 3', 'Mai i te 8 o Maehe', "8 मार्च से", 'Fra 8. mars', 'Kärlek 8 jecel', 'Laga bilaabo Maarso 8', 'Från 8 mars', '8 मार्च से', 'Mula Marso 8', '8 марттан', 'از 8 مارس', 'Fra 8. mars', 'Kusukela ngo-March 8', 'ตั้งแต่วันที่ 8 มีนาคม', "8 Mart'tan itibaren", 'Từ ngày 8 tháng 3', 'פון 8טן מערץ', "'", , "l", 'С 8 марта!'];

  return (
    <div id="ui">
      <Head>
        <title>С 8 марта)</title>
        <meta name="description" content="omg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {words.map(item => {
        return (
          <div className="love" key={item}>
            <div className="love_horizontal">
              <div className="love_vertical">
                <div className="love_word">
                  {item}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
