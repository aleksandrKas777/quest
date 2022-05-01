export const Modal = ({textModal}) => {

    return (
        <div className={'position-fixed vw-100 vh-100 d-flex justify-content-center align-items-start p-1 modal'}
             style={{backgroundColor: 'rgba(85,85,85,0.59)'}}>
            <div style={{
                border: '4px solid rgba(57,0,225,0.76)',
                borderRadius: '10px',
                padding: '30px',
                backgroundColor: 'whitesmoke',
                marginTop: '100px',
                position: 'relative'
            }}>

                <div>{textModal}</div>
                <div style={{color: 'rgba(57,0,225,0.76)'}}>123</div>
            </div>

        </div>
    )
}