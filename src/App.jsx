import { Header } from "./components/Header";
import { Post } from "./Post";

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Arthur Pereira Machado" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo fuga excepturi ducimus. Excepturi sequi repellendus assumenda quaerat voluptatibus beatae iure ab praesentium quas qui fuga fugit, nihil, rem omnis officia?"
      />
      <Post 
        author="Teste" 
        content="Um conteudo de teste para exibição"
      />
    </div>
  )
}