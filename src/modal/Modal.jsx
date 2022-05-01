export const Modal = ({textModal, setShowModal}) => {

    return (
        <div className={'position-fixed vw-100 vh-100 d-flex justify-content-center align-items-start p-1'}
             style={{backgroundColor: 'rgba(85,85,85,0.39)'}}>
            <div style={{
                border: '2px solid #7952b3',
                borderRadius: '10px',
                padding: '30px',
                backgroundColor: 'whitesmoke',
                marginTop: '100px',
                position: 'relative'
            }}>

                <button className={'btn btn-close position-absolute top-0 end-0'} onClick={() => setShowModal(false)}/>

                <div>{textModal}</div>

            </div>

        </div>
    )
}