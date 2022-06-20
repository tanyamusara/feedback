import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

//main function
function App() {


    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
            <Routes>
            <Route exact path='/' element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            </>
            }> 
            </Route>
            <Route path='/about' element={<AboutPage />}/>   
            </Routes>

            <AboutIconLink/>
        </div>
    </Router>
    </FeedbackProvider>
    )
}


// ##############################################################################
//redudant code
/**
 * const title = 'Blog Post';
const body = 'This is my blog post';
const comments = [
    {id:1, text: 'Comment one'},
    {id:2, text: 'Comment two'},
    {id:3, text: 'Comment three'},
];

const loading = false;

const showComments = true;

const commentBlock = (  <div className="comments">
<h3>Comments ({comments.length})</h3>
<ul>
   {comments.map((comment, index) => (
      <li key={index}>{comment.text}</li>
   ))} 
</ul>
</div>);

if (loading) return <h1>Loading...</h1> 
 */
// ##############################################################################

export default App;