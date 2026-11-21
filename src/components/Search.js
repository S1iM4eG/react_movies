import './Search.css';
import React from 'react';

class Search extends React.Component
{
    state =
        {
            search: "",
            type:"all"
        }
    handleKey = (evenet) =>
    {
        if (evenet.key === 'Enter')
        {
            this.props.searchMovie(this.state.search);
        }
    }
    handlerFilter = (event) =>
    {
        //this.setState({ type: event.target.dataset.type });
        //this.props.searchMovie(this.state.search, this.state.type);
        this.setState
        (
            () => ({ type: event.target.dataset.type }),
            () => ({search: this.props.searchMovie(this.state.search, this.state.type)})
        )
        //this.setState
        //(
        //    {
        //        type: event.target.dataset.type,
        //        search: this.props.searchMovie(this.state.search, this.state.type)
        //    }
        //)
        
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
                    <input type="radio" name="category" data-type='all'     checked={this.state.type==='all'}       id="category-all"       onChange={this.handlerFilter} /><lable for="">All</lable>
                    <input type="radio" name="category" data-type='movie'   checked={this.state.type==='movie'}     id="category-movie"     onChange={this.handlerFilter} /><lable for="">Movie</lable>
                    <input type="radio" name="category" data-type='series'  checked={this.state.type==='series'}    id="category-series"    onChange={this.handlerFilter} /><lable for="">Series</lable>
                    <input type="radio" name="category" data-type='game'    checked={this.state.type==='game'}      id="category-game"      onChange={this.handlerFilter} /><lable for="">Game</lable>
                </div>
            </div>
        )
    }
}
export default Search;