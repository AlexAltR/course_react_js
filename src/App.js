import React, { useState, useRef } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import './styles/App.css'

function App() {
  //Создаем состояния
  
  //const [value, setValue] = useState('Текст в инпуте')// Состояние для строки input

  const [posts, setPosts] = useState( [
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript 2', body: 'Description'},
    {id:3, title: 'JavaScript 3', body: 'Description'},
  ])
  
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
     setPosts(posts.filter(p => p.id !== post.id))
  }
  

  return (
    <div className = "App">
      
      <PostForm create = {createPost}/>
      <PostList remove = {removePost} posts = {posts} title = 'Посты про JS'/>
      




    </div>
  );
}

export default App;
