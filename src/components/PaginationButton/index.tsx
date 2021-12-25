import { Component, ReactNode } from 'react'
import './styles.css'

class PaginationButton extends Component<Props> {
    render(): ReactNode {
        const { handlePagination } = this.props
        const min_card_width = 280
        const amount_of_items_to_add_on_pagination = Math.floor(window.innerWidth/min_card_width)
            //it is the max number of collumns possible to fit in a row, based on the size of the screen
        return(
            <div 
                className="paginationButtonContainer"
            >
                <button
                    className='paginationButton'
                    onClick={()=>handlePagination(amount_of_items_to_add_on_pagination)}
                >   
                    ...
                </button>
            </div>
        )
    }
}

export default PaginationButton

interface Props {
    handlePagination: (data: number) => void
}