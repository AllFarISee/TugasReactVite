import '../components/style/moviecard.css'

const MovieCard = ({image, title}) => {
  return (
    <div>
        <div className='movie-card'>
            <img className="movie-image" src={image}/>
            <p className='movie-title'>{title}</p>
        </div>
    </div>
  )
}

export default MovieCard
