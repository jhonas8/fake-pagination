import { Component, ReactNode } from 'react'
import Content from './content'
import './styles.css'

export default class Card extends Component<Props>{
    render(): ReactNode {
        const { id, title, body, media: { url, title: titleMedia }} = this.props.post
        return(
            <div className='container'>
                <div className="card" key={id}>
                  <img src={url} alt={titleMedia} />
                  <Content post={{id, title, body}}/>
                </div>
            </div>
        )
    }
}

interface Props {
    post: {
        id: string,
        media: { url : string, title: string },
        title: string
        body: string
    }
}
