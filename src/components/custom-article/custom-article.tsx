import './custom-article.css'

interface articleData {
  title: string,
  text: string[]
}

function CustomArticle(props:articleData) {
  const {title, text} = props

  let isH3: boolean = true;



  return (
    <>
      <div className='card'>
        <div>
          <header className='card-head'>
            <h2>
              {title}
            </h2>
          </header>
          <section className='card-body'>
            {
            text.map((element) => {

                if(element === ''){
                  isH3 = true;
                  return <img className='garden-separator' src='./src/assets/separador.png'/>
                }
                if(isH3){
                  isH3 = false
                  return <section>
                    <h3>
                      {element}
                    </h3>
                  </section>
                }
                return <section>
                  <p>
                    {element}
                  </p>
                </section>

              })
            }
              
          </section>
        </div>
       
      </div>
    </>
  )
}

export default CustomArticle
