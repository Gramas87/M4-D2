import books from '../data/scifi.json'
import SingleBook from './SingleBook'

const LatestRelease = () => {
  return (<div className="bg-dark row">{books.map((book)=>{return <SingleBook key={book.asin} bookData={book} />})}</div>)
    }

export default LatestRelease


