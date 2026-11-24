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
            () => this.props.searchMovie(this.state.search, this.state.type)
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
            <div>
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
                </div>
                <div className='radio'>
                    <lable><input type="radio" name="category" data-type='all'     checked={this.state.type==='all'}     onChange={this.handlerFilter} />   All</lable>
                    <lable><input type="radio" name="category" data-type='movie'   checked={this.state.type==='movie'}   onChange={this.handlerFilter} />   Movie</lable>
                    <lable><input type="radio" name="category" data-type='series'  checked={this.state.type==='series'}  onChange={this.handlerFilter} />   Series</lable>
                    <lable><input type="radio" name="category" data-type='game'    checked={this.state.type==='game'}    onChange={this.handlerFilter} />   Game</lable>
                </div>
            </div>
        )
    }
}
export default Search;