import Posts from "../../components/posts/Posts"
import Stories from "../../components/stories/Stories"
import Login from "../login/Login"
import Register from "../register/Register"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
    <Stories/>
   <Posts/>
    </div>
  )
}

export default Home