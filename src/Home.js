import { useState } from "react";
import Navbar from "./Navbar";
import Posts from "./Posts";

const Home = () => {
    const name='Sandeep';
    const placeholder=name+', type your post...';
    const [input,setInput]=useState('');
    const [posts,setPosts]=useState([
        {
            "like":undefined,
            "dislike":undefined,
            "name":name,
            "post":"Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nWhere can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            "id":1
        },
        {
            "like":undefined,
            "dislike":undefined,
            "name":name,
            "post":"hello",
            "id":2
        }
    ]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const add={
            "like":undefined,
            "dislike":undefined,
            "post":input,
            "name":'Harsh'
        };
        setPosts([...posts,add]);
        console.log(input);
    }

    return (
        <div className="Home">
            <img src="https://img.icons8.com/bubbles/344/pick-colors-female.png" id="Dp" alt="icon"/>
            <div id="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="nav"><Navbar/></div>
            <div className="content">
                <img src="https://img.icons8.com/fluency/344/person-male.png" alt="Dp"/>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <textarea name="Post" placeholder={placeholder} value={input} onChange={e=>{setInput(e.target.value)}}></textarea>
                    <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                    <div className="addon">
                        <i class="bi bi-images"></i>
                        <i class="bi bi-geo-alt-fill"></i>
                        <i class="bi bi-tags-fill"></i>
                    </div>
                </form>
                <div className="posts">
                    <Posts posts={posts} setPosts={setPosts}/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;