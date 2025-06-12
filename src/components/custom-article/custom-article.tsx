import './custom-article.css'

interface articleData {
  title: string,
  text: string[]
}

function CustomArticle(props:articleData) {
  const {title, text} = props
  return (
    <>
      <div className='card'>
        <h2>
          {title}
        </h2>
        {text.map(element => {
          if(element === ''){
            return <hr></hr>
          }
          return <section>
            <p>
              {element}
            </p>
          </section>
        })}
      </div>
    </>
  )
}

export default CustomArticle
