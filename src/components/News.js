import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News_items from '../News_items'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "WABC-TV"
            },
            "author": null,
            "title": "Travel woes worsen for passengers stranded at NYC-area airports due to cancelled flights - WABC-TV",
            "description": "Hundreds of flights are already canceled as of early Wednesday morning.",
            "url": "https://abc7ny.com/flight-cancellations-lga-newark-airport-jfk/13435476/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/13435536_062823-wabc-flight-img.jpg?w=1600",
            "publishedAt": "2023-06-28T09:11:15Z",
            "content": "EAST ELMHURST, Queens (WABC) -- Hundreds of flights have already been cancelled as of early Wednesday morning, leaving thousands of travelers stranded and frustrated at local airports.\r\nNewark Airpor… [+3228 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Nicole Auerbach, Bruce Feldman, Jeff Zrebiec",
            "title": "Ryan Mallett, former Arkansas star and NFL QB, dies at 35 - The Athletic",
            "description": "A Michigan source confirmed to The Athletic that Mallett had drowned in Florida.",
            "url": "https://theathletic.com/4646091/2023/06/27/ryan-mallett-dead-arkansas/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/06/27193112/GettyImages-104429014-1024x683.jpg",
            "publishedAt": "2023-06-28T05:31:31Z",
            "content": "By Nicole Auerbach, Bruce Feldman and Jeff Zrebiec\r\nFormer NFL quarterback Ryan Mallett died on Tuesday in Florida, according to the school district where he coached high school football. He was 35 y… [+5785 chars]"
        }
    ]

    static defaultProps = {
        pageSize: 9,
        country: "in",
        category: "general"
      }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

   

    async componentDidMount(){
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76d301ebe2b44cefb8fcfa67b1109045&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url) // this is a promise
        let parsedData = await data.json() // this is again a promise
        console.log(data)
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handleNextPage = async() =>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
        {

        }
        else{
            console.log(this.state.page)
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76d301ebe2b44cefb8fcfa67b1109045&page=${this.state.page}&pageSize=${this.props.pageSize}`
            let data = await fetch(url) // this is a promise
            let parsedData = await data.json() // this is again a promise
            console.log(data)
            this.setState({articles: parsedData.articles})
    
            this.setState({page: this.state.page+1})
        }
            
    }

    handlePrevPage = async() =>{
        console.log(this.state.page)

        this.setState({page: this.state.page-1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76d301ebe2b44cefb8fcfa67b1109045&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url) // this is a promise
        let parsedData = await data.json() // this is again a promise
        console.log(data)
        this.setState({articles: parsedData.articles})
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return  <div className="col-md-4 my-4"  key={element.url}>
                        <News_items  title={element.title ? element.title.slice(0, 45): ""} description={element.description ? element.description.slice(0, 88):""} Imageurl={element.urlToImage} newsUrl={element.url} />
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevPage}>Prev</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next</button>
                </div>
                
            </div>
        )
    }
}
