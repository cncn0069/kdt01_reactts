import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClocHome from './09/ClocHome'
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';

function App() {
  return (
    <>
        <div className='bg-orange-300 w-full min-h-10 rounded-t-4xl pl-5 pt-2 mt-2'>PNU KD01</div>
        <main className='w-full h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/ClockHome' element={<ClocHome />} ></Route>
            <Route path='/Lotto' element={<Lotto />} ></Route>
            <Route path='/Food' element={<FoodMain />} ></Route>
          </Routes>
        </BrowserRouter>
      </main>
      <footer className="bg-amber-900 w-full min-h-10 flex justify-center items-center">
        이름: KevinJo<br />
        연락처: 010-8888-8888<br />
      </footer>

    </>
  )
}
export default App;