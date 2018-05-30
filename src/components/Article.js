import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: true
    }
    render() {
        const {article} = this.props
        console.log('---',this.props)
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <div class="img">{article.picture}</div>
                <div class="info">
                    <div class="left">
                        <div class="month">{(new Date(article.date).getMonth()-1)}</div>
                        <div class="day"></div>
                        <div class="cost"></div>
                        <div class="members" ></div>
                        <div class="rate"></div>     
                    </div>
                    <div class="rigth">
                        <div class="heading"></div>
                        <div class="loc-pic"></div>
                        <div class="place"></div>
                        <div class="description"></div>
                    </div>
                </div>
                </div>
    )}
    
    handleClick = () => {
        console.log('---','clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article