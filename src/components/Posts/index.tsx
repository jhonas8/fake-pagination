import { Component, ReactNode } from 'react'
import Card from '../Card'

export default class Posts extends Component<Props>{
    render(): ReactNode {
        const { posts, pagination_index } = this.props
        return(
            <>
                {posts
                    .slice(0,pagination_index)
                    .map(
                    (post: any) =>(
                        <Card post={post}/>
                        )
                    )
                }
            </>
        )
    }
}


interface Props {
    posts: any
    pagination_index: number
}