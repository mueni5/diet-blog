import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DietBlog from './DietBlog/DietBlog';
import Blog from './DietBlog/Blog';

function App() {
return (
  <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/blog" element={<DietBlog />} />
            <Route path="/blog/:id" element={<Blog />} />

        </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
