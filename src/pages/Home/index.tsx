import { Component, ReactNode } from 'react'
import { fetching_posts_data } from '../../utils/fetchingPosts'
import PaginationButton from '../../components/PaginationButton'
import Posts from '../../components/Posts'
import './styles.css'

const min_card_width = 280
const number_of_rows_to_be_shown = 2
const max_columns_per_row = Math.floor(window.innerWidth/min_card_width)

class Home extends Component<{}>{
  state = {
    posts: [],
    pagination_index: number_of_rows_to_be_shown * max_columns_per_row
  }

  setPosts = (data: any): void => this.setState({
    ...this.state,
    posts: data
  })

  handlePagination = (data: number): void => this.setState({
    ...this.state,
    pagination_index: this.state.pagination_index + data
  })

  componentDidMount(){
    setTimeout( ()=>fetching_posts_data(this.setPosts),3000 )
  }

  render(): ReactNode {
    const { pagination_index, posts } = this.state

    return posts.length //If it's still fetching
    ?(
      <div className='wholePage'>
        <div className="App">
          <Posts 
            pagination_index={pagination_index} 
            posts={posts} 
          />
        </div>
        { pagination_index < posts.length
          && <PaginationButton handlePagination={this.handlePagination}/> } 
      </div>
    )
    :(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default Home
