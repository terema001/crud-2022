import React, {useState, useEffect} from "react"
import { useForm } from "react-hook-form";
import postsList from "../data/posts.json";
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import swal from 'sweetalert';


function PostList() {
  const [posts, setPosts] = useState(postsList);
  const [title, setTitle] = useState("Pavadinimas");
  const [aprasas, setAprasas] = useState("Aprasymas");
  const [matomas, setMatomas] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts"

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Jeigu yra Back-end
  // const getPosts = async () => {
  //     const response = await fetch(url);
  //     const posts = await response.json();
  //     setPosts(posts);
  // }

  // useEffect(() => {
  //     getPosts();
  // }, []);
  


  function formosPatvirtinimas(data){
    let copy = [...posts];
    data.id =  copy[copy.length-1].id + 1;
    copy.push(data);          
    setPosts(copy);
    console.log(copy);
  }


  function deletePost(i){
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
        let copy=[...posts];       
        copy=copy.filter(e=>e.id!=i);
        setPosts(copy);
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}

  const sarasas = posts.map(post => {
    return (<tr key={post.id}>
    <td> {post.id} </td>
    <td> {post.title} </td>
    <td> {post.body} </td>
    <td> <button onClick={()=>setMatomas(!matomas)}><AiFillEdit/></button></td>
    <td> <button onClick={()=>deletePost(post.id)}><AiTwotoneDelete/></button></td>
    </tr>)
  })

  const redaguoti=(e)=>{
    setAprasas();
    setMatomas(false)
  }

return (
  <div>
    <form onSubmit={e=>redaguoti(e)} style={{visibility: matomas?"visible":"hidden"}}  {...register("c")}>      
    </form>/<form onSubmit={handleSubmit(redaguoti)} style={{visibility: matomas?"visible":"hidden"}}  {...register("c")}>
      <input defaultValue={title} onChange={e=>setTitle(e.target.value)} />
      <input defaultValue={aprasas} onChange={e=>setAprasas(e.target.value)} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>


    <form onSubmit={handleSubmit(formosPatvirtinimas)}>

      <input defaultValue="abc" {...register("title", { required: true })} />
      {errors.title && <p>This field is required</p>} 

      <input defaultValue="Aprašymas" {...register("body", { required: true })} /> 
      {errors.body && <p>This field is required</p>} 

      <input type="submit" />
    </form>

    <table>
      <tbody>
        {/* lentelės antraštė */}
      <tr>
        <td>
          <h3>ID</h3>
        </td>
        <td>
          <h3>Title</h3>
        </td>
        <td>
          <h3>Body</h3>
        </td>
        <td>
          <h3>Edit</h3>
        </td>
        <td>
          <h3>Delete</h3>
        </td>
      </tr>
      {/* įkeliamas sąrašas */}
        {sarasas}
      </tbody>
    </table>


  </div>
)
}
export default PostList

