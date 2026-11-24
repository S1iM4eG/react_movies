import React from 'react';
import './Main.css';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component
{
    state =
    {
        movies: [],
        count:0
    }
    componentDidMount()
    {
        //Эта функция неявно вызывается всякий раз, когда компонент сгенирировался на страницу
        fetch('http://www.omdbapi.com/?s=The%20Transporter&apikey=e6b33c05')
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search, count: data.totalResults}))
    }
    searchMovie = (str, type='all', page) =>
    { 
        fetch(`http://www.omdbapi.com/?s=${str}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}&apikey=e6b33c05`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, count: data.totalResults }));
    }
    render()
    {
        
        return(
            <main>
                <Search searchMovie={ this.searchMovie } totalItems={ this.state.count } />
                {
                    this.state.movies == null ? <h1>Введите поисковый запрос</h1> :
                    this.state.movies.length == 0 ?
                    <div className="preloader-wrapper">
                        <Preloader />
                    </div> :
                    <MovieList movies={this.state.movies} />
                }
            </main>
        )
    }
}
export default Main;