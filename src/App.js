import './App.css';
// import { Route, Routes } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Error404 from './pages/Error404';
// import LayoutDefault from './Layout/LayoutDefault';
// import Blog from './pages/Blog';
// import BlogNews from './pages/Blog/BlogNews';
// import BlogRelated from './pages/Blog/BlogRelated';
// import BlogAll from './pages/Blog/BlogAll';
// import BlogDetail from './pages/Blog/BlogDetail';
// import InfoUser from './pages/InfoUser';
// import Login from './pages/Login';
// import PrivateRoutes from './components/PrivateRoutes';

function App() {
    return (
        <>
            <AllRoutes/>
            {/* <Routes>
                <Route path='/' element={<LayoutDefault />}>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='blog' element={<Blog />}>
                        <Route index element={<BlogAll />} />
                        <Route path='news' element={<BlogNews />} />
                        <Route path='related' element={<BlogRelated />} />
                        <Route path=':id' element={<BlogDetail />} />
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='*' element={<Error404 />} />

                    <Route element={<PrivateRoutes />}>
                        <Route path='info-user' element={<InfoUser />} />
                    </Route>
                </Route>
            </Routes> */}
        </>
    );
}

export default App;
