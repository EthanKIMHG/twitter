import { FiImage } from "react-icons/fi"
import { Postprops } from "./types"
import { Link } from "react-router-dom"
import { FaComment, FaHeart, FaUserCircle } from "react-icons/fa"

const posts: Postprops[] = [
  {
    id: "1",
    email: "testuser@test.com",
    content: "loremloremlorem",
    createdAt: "2024.01.01",
    uid: "1232"
  },
  {
    id: "2",
    email: "testuser@test.com",
    content: "loremloremlorem",
    createdAt: "2024.01.01",
    uid: "1232"
  },
  {
    id: "3",
    email: "testuser@test.com",
    content: "loremloremlorem",
    createdAt: "2024.01.01",
    uid: "1232"
  },
  {
    id: "4",
    email: "testuser@test.com",
    content: "loremloremlorem",
    createdAt: "2024.01.01",
    uid: "1232"
  },
  
]

export default function Home () {
  const handleFileUpload = () => {

  }
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For you</div>
        <div className="home__tab">Follwing</div>
      </div>
      {/* Post Form */}
      <form className="post-form" action="">
        <textarea className="post-form__textarea" required name="content" id="content" placeholder="What is happening?" />
        <div className="post-form__submit-area">
          <label htmlFor="file-input" className="post-form__file">
            <FiImage className="post-form__file-icon"/>
          </label>
          <input type="file" name="file-input" accept="image/*" onChange={handleFileUpload} hidden/>
          <input type="submit" value="Tweet" className="post-form__submit-button" />
        </div>
      </form>
      {/* Tweet Posts */}
      <div className="post">
        {posts?.map((posts) => (
          <div className="post__box" key={posts?.id}>
            <Link to={`/posts/${posts?.id}`} >
            <div className="post__box-profile">
              {posts?.profileUrl 
              ? <img src={posts.profileUrl} alt="profile" className="post__box-profile-image"/> 
              : <FaUserCircle className="post__box-profile-usericon"/>}
              <div className="post__box-email">{posts?.email}</div>
              <div className="post__box-createdAt">{posts?.createdAt}</div>
            </div>
            <div className="post__box-content">{posts?.content}</div>
            </Link>
            <div className="post__box-footer">
              <button className="post__delete">Delete</button>
              <button className="post__edit"><Link to={`/posts/edit/${posts?.id}`}>Edit</Link></button>
              <button className="post__likes">
                <FaHeart/>
                {posts?.likeCount ? posts.likeCount : 0}
              </button>
              <button className="post__commments">
                <FaComment />
                {posts?.comments ? posts.comments : 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}