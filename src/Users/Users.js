
import User from "./User"
export default function Users({items, selectUser}){
    // console.log(items);

    return(
    <div>
        {items.map(user => <User key={user.id} item={user} selectUser={selectUser}/>)}
    </div>
)
}