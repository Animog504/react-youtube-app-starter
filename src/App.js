import React, { Component } from "react";
import Search from "./Search";
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";
import key from "./key";
import YouTubeData from "./YouTubeData";

class App extends Component {
  constructor(){
    super()
    this.state = {
      mainVideo: null,
      videoList: [],
      searchTerm: "dog"

    }
  }
  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    console.log("fetching data")
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key.API_KEY}&q=${this.state.searchTerm}&type=video`

    

    // fetch(API_URL)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({
    //     videosList: data,
    //     mainVideo: ""
    //   })
    // })
    console.log(YouTubeData.data.items)
    this.setState({
          videoList: YouTubeData.data.items,
          mainVideo: YouTubeData.data.items[0]
    })  
  }//fetch data

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("handle submit!")
    let newSearch = e.target.children[1].value 

    this.setState({
      searchTerm: newSearch
    }, this.fetchData)
    debugger
  }

  render() {
    return (
      <div>

        <Search handleSubmit={this.handleSubmit}/>
        <table >
          <tr>
            <td><MainVideo mainVideo={this.state.mainVideo}/></td>
            <td><VideoList videoList={this.state.videoList}/></td>
          </tr>
        </table>

        
        


      </div>


    )
  }
}

export default App;
