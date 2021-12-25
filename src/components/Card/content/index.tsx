import { Component, ReactNode } from 'react'
import './styles.css'

export default class Content extends Component<Props>{
    render(): ReactNode {
        const { id, title, body } = this.props.post
        return(
            <div className="content" key={id}>
                <p className="title">{title}</p>
                <p className="body">{body}</p>
            </div>
        )
    }
}

interface Props {
    post: {
        id: string,
        title: string
        body: string
    }
}