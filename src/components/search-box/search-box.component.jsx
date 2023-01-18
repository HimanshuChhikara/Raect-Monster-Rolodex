import './search-box.styles.css';


const SearchBox = ({className,placeHolder,onChangeHandler}) => {
    return(
    <input className={className}
        type='search'
        placeholder={placeHolder}
        onChange={onChangeHandler}>
    </input>
    )   
}
// class SearchBox extends Component {
//     render() {
//         return (
//             <input className= {this.props.className}
//                 type='search'
//                 placeholder={this.props.placeHolder}
//                 onChange={this.props.onChangeHandler}>
//             </input>
//         )
//     }
// }

export default SearchBox