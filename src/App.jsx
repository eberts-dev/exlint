import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import AskedQuestions from '@components/main/AskedQuestions'
import BestPractices from '@components/main/BestPractices'
import Conventions from '@components/main/Conventions'
import Quality from '@components/main/Quality'
import ShareConventions from '@components/main/ShareConventions'
import Sprite from '@components/Sprite'

import React from 'react'

function App() {

  return (
    <>
    <Sprite/>
    <Header />
    <Conventions/>
    <ShareConventions/>
    <BestPractices/>
    <Quality/>
    <AskedQuestions/>
    <Footer/>
    </>
  )
}

export default App
