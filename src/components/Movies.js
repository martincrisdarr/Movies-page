import Kids from './type-movies/Kids'
import Popular from './type-movies/Popular'
import Rated from './type-movies/Rated'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
function Movies() { 
    return (
      <div className='movieContainer'>
      <BrowserRouter>
        <div className='movieRoutes'>
          <Link className='movieLinks' to="/rated-movies">Rated</Link>
          <Link className='movieLinks' to="/">Popular</Link>
          <Link className='movieLinks' to="kids-movies">Kids</Link>
        </div>
        <Routes>
          <Route path='/' element={<Popular />}></Route>
          <Route path='/kids-movies' element={<Kids />}></Route>
          <Route path='/rated-movies' element={<Rated />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }


export default Movies