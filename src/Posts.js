import { useState } from "react";

const Posts = ({posts,setPosts}) => {
    const [like,setLike]=useState(undefined);
    const [dislike,setDislike]=useState(undefined);

    const handleClickLike=()=>{

        if(document.getElementById('thumbUp').innerHTML==='<i class="bi bi-hand-thumbs-up"></i>'){
            document.getElementById('thumbUp').innerHTML='<i class="bi bi-hand-thumbs-up-fill"></i>';
            if(document.getElementById('thumbDown').innerHTML==='<i class="bi bi-hand-thumbs-down-fill"></i>'){
                document.getElementById('thumbDown').innerHTML='<i class="bi bi-hand-thumbs-down"></i>';
                if(dislike===1){
                    setDislike(undefined);
                }
                else{
                    setDislike(dislike-1);
                }
            }
            if(like===undefined){
                setLike(1);
            }
            else{
                setLike(like+1);
            }
        }
        else{
            document.getElementById('thumbUp').innerHTML='<i class="bi bi-hand-thumbs-up"></i>';
            if(like===1){
                setLike(undefined);
            }
            else{
                setLike(like-1);
            }
        }
    }
    const handleClickDislike=()=>{


            if(document.getElementById('thumbDown').innerHTML==='<i class="bi bi-hand-thumbs-down"></i>'){
                document.getElementById('thumbDown').innerHTML='<i class="bi bi-hand-thumbs-down-fill"></i>';
                if(document.getElementById('thumbUp').innerHTML==='<i class="bi bi-hand-thumbs-up-fill"></i>'){
                    document.getElementById('thumbUp').innerHTML='<i class="bi bi-hand-thumbs-up"></i>';
                    if(like===1){
                        setLike(undefined);
                    }
                    else{
                        setLike(like-1);
                    }
                }
                if(dislike===undefined){
                    setDislike(1);
                }
                else{
                    setDislike(dislike+1);
                }
            }
            else{
                document.getElementById('thumbDown').innerHTML='<i class="bi bi-hand-thumbs-down"></i>';
                if(dislike===1){
                    setDislike(undefined);
                }
                else{
                    setDislike(dislike-1);
                }
            }
    }
    const handleDelete=(id)=>{
        const newPosts=posts.filter((e)=>e.id!==id);
        setPosts(newPosts);
    }


    return (
        <div className="post-detail">
            {posts.map(e=>(
                <div className="content" key={posts.id}>
                    <h4>{e.name}</h4>
                    <img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/344/external-person-female-avatar-color-line-others-cattaleeya-thongsriphong-6.png" alt="DP" />
                    <div className="change">
                        <i class="bi bi-trash3-fill" onClick={()=>handleDelete(e.id)}></i>
                        <i class="bi bi-pencil-square"></i>
                    </div>
                    <div className="like-dislike">
                        <span id="thumbUp" onClick={()=>handleClickLike()}><i class="bi bi-hand-thumbs-up"></i></span>
                        <span id="like">{like}</span>
                        <span id="thumbDown" onClick={()=>handleClickDislike()}><i class="bi bi-hand-thumbs-down"></i></span>
                        <span id="dislike">{dislike}</span>
                    </div>
                    <p>{e.post}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Posts;