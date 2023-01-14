import { Graddient } from '../../component/graddient/graddient'
import { Form } from '../../component/form/form'
import './search.css'

export function PageSearch({onSubmit}){
    return(
        <>
            <Graddient />
            <div className="page-search">
                <h1 className="title">WEATHER APP</h1>
                <Form onSubmit={onSubmit} />
                <p className="header"><a href="https://github.com/yolber154/">You can watch this page in github</a></p>
            </div>
        </>
    )
}