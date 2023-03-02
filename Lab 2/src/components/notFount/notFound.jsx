import notFound from '../../assets/images/404.svg';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center mt-3'>
            <img src={notFound} />
        </div>
    )
}

export default NotFound 