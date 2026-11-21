import './Search.css';
import React from 'react';

class Search extends React.Component
{
    state =
        {
            search: "",
            type:"All"
        }
    handleKey = (evenet) =>
    {
        if (evenet.key === 'Enter')
        {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }
    handlerFilter = (event) =>
    {
        this.setState({ type: event.target.dataset.type });
        this.props.searchMovie(this.state.search, this.state.type);
    }
    render()
    {
        return (
            <div className="search">
                <input type='search'
                    placeholder="Поиск"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyUp={this.handleKey}
                />
                <button onClick={() => this.props.searchMovie(this.state.search)}>
                    Поиск
                </button>
                <div className='radio'>
                <input type="radio" name="category" id="category-movies" /><lable for="">Movies</lable>
                </div>
            </div>
        )
    }
}
export default Search;