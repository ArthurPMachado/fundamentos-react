import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Post } from "./components/Post";

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Arthur Pereira Machado" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo fuga excepturi ducimus. Excepturi sequi repellendus assumenda quaerat voluptatibus beatae iure ab praesentium quas qui fuga fugit, nihil, rem omnis officia?"
          />
          <Post 
            author="Teste" 
            content="Um conteudo de teste para exibição"
          />
        </main>
      </div>
    </div>
  )
}