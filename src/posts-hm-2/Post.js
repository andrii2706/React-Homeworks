export default function Post({item}){
    return(
        <div className={'function'}>
            <h2 className={'header-2'}>{item.id}</h2>
                <h3 className={'header-3'}>
                    {item.title}
                </h3>
            <p className={'body'}>
                {item.body}
            </p>
            <button onClick={() =>{} }>
            click here</button>
        </div>
    )
}