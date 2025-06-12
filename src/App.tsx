import CustomArticle from './components/custom-article/custom-article'
import './App.css'
import { dataCurso } from './data'

function App() {

  return (
    <>
      <div className='main-layout'>
        <CustomArticle 
          title={dataCurso[0].title}
          text={dataCurso[0].texto}
        />
        <CustomArticle 
          title={dataCurso[1].title}
          text={dataCurso[1].texto}
        />
        <CustomArticle 
          title={dataCurso[2].title}
          text={dataCurso[2].texto}
        />
        <CustomArticle 
          title={dataCurso[3].title}
          text={dataCurso[3].texto}
        />
        <CustomArticle 
          title={dataCurso[4].title}
          text={dataCurso[4].texto}
        />
        <CustomArticle 
          title={dataCurso[5].title}
          text={dataCurso[5].texto}
        />
        <CustomArticle 
          title={dataCurso[6].title}
          text={dataCurso[6].texto}
        />
        <CustomArticle 
          title={dataCurso[7].title}
          text={dataCurso[7].texto}
        />
      </div>
    </>
  )
}

export default App
