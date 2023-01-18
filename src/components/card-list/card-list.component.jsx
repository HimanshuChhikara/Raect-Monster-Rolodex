import './card-list.styles.css';


const CardList = ({monster}) => {
    console.log("This is monster array === ",monster)
    return (
        <div className="card-list">
            {
                monster.map((monster, key) =>
                    <div className="card-container">
                        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
                        <h2>{monster.name}</h2>
                        <h3>{monster.email}</h3>
                    </div>
                )
            }
        </div>
    )
}
// class CardList extends Component {
//     render() {
//         const { monster } = this.props;
//         return (
//             <div className="card-list">
//                 {
//                     monster.map((monster, key) =>
//                         <div className="card-container">
//                             <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
//                             <h2>{monster.name}</h2>
//                             <h3>{monster.email}</h3>
//                         </div>
//                     )
//                 }
//             </div>
//         )

//     }
// }

export default CardList;