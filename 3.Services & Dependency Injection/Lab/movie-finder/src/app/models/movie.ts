interface Movie {
    poster_path :string;
    title :string;
    release_date :string;
}

interface Movies {
    results : Array<Movie>
}