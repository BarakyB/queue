import './App.css';
import * as React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import { AiFillLike } from 'react-icons/ai';
import Dropzone from 'react-dropzone'

class PostsPage extends React.Component {
    state = {
        token: "",
        content: "",
        posts: []
    }

    componentDidMount() {
        this.getAllPosts()
    }

    onTextChange = (e) => {
        let content = e.target.value;
        this.setState({
            content: content
        })
    }

    addPost = () => {
        const cookies = new Cookies();
        let data = new FormData();
        if (this.state.file) {
            data.append("file", this.state.file, this.state.file.name);
        }
        data.append("token", cookies.get("logged_in"));
        data.append("content", this.state.content);
        axios.post("http://localhost:8989/add-post", data, {
            headers: {'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p'}
        }).then((response) => {
                if (response.data) {
                    const currentPosts = this.state.posts;
                    currentPosts.unshift({
                        content: this.state.content,
                        date: "Few moments ago..."
                    })
                    this.setState({
                        posts: currentPosts
                    })
                } else {
                    alert("couldn't add post")
                }
            })
    }


    getAllPosts = () => {
        const cookies = new Cookies();
        axios.get("http://localhost:8989/get-posts", {
            params: {
                token: cookies.get("logged_in")
            }
        })
            .then((response) => {
                this.setState({
                    posts: response.data
                })
            })
    }

    removePost = (postId) => {
        const cookies = new Cookies();
        axios.get("http://localhost:8989/remove-post", {
            params: {
                token: cookies.get("logged_in"),
                postId
            }
        })
            .then((response) => {
                const currentPosts = this.state.posts;
                this.setState({
                    posts: currentPosts.filter((item) => {
                        return item.id != postId
                    })
                })
            })
    }

    onDrop(accepted, rejected) {
        if (accepted && accepted.length > 0) {
            this.setState({
                file: accepted[0]
            })

        }
    };

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => {
                        return (
                            <div style={{borderBottom: "1px solid black", padding: "10px", width: "300px"}}>
                                {/*<img src={"http://localhost:8989/get-post-image?postId=1"} width={50} height={50}/>*/}

                                <i style={{fontSize: "12px"}}>
                                    {post.content}
                                </i>
                                <p style={{fontSize: "8px"}}>
                                    {post.date}
                                </p>
                                <h1><AiFillLike color={"blue"}/></h1>
                                <button style={{fontSize: "5px"}} onClick={() => this.removePost(post.id)}>
                                    X
                                </button>
                            </div>
                        )
                    })
                }

                <div style={{marginTop: "30px"}}>
                    <textarea
                        onChange={this.onTextChange}
                        value={this.state.content}
                        placeholder={"Enter post"}
                    /><br/>

                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                        this.state.file ?
                                            <p>{this.state.file.name}</p>
                                            :
                                            <p>Drag 'n' drop some files here, or click to select files</p>

                                    }
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <button onClick={this.addPost}>Submit</button>
                </div>
            </div>
        )
    }
}

export default PostsPage;