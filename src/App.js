
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Home';
import { QuizProvider } from './components/QuizContext';
import Questions from './screens/Questions';
import Result from './screens/Result';
import Instructons from './screens/Instructons';
import Login from './screens/login';
import SignUp from './screens/signup';
import PrevQuiz from './screens/PrevQuiz';


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login />},
    { path: "/createuser", element: <SignUp/> },
    { path: "/test", element: <Questions /> },
    {path:"/testResult", element:<Result/>},
    {path:"/prevQuiz", element:<PrevQuiz />},

    {path:"/testInstruction", element:<Instructons />},
    
  ])

  return (
    <QuizProvider>
      <div>
         <RouterProvider router={router} />
      </div>
      </QuizProvider>
  );
}

export default App;
