import './coments.css'

export default function Coment ({item: {name, email, body,id, postId }}) {


    return (
        <div className={'coment'}>
        <h3>{postId}</h3>
      <h4> {id}  - {name}</h4>
            <h5>{email}</h5>
            <p>{body}</p>

        </div>
    )
}