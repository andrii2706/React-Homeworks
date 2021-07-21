export default function Views({books}){
return (
    <tr key={books.isbn}>
        <td>{books.isbn}</td>
        <td>{books.title}</td>
        <td>{books.author}</td>
        <td>{books.category}</td>
    </tr>
)

}