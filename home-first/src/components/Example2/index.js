import cat from '../../assets/img/cat.jpg'

const Example2 = (props) => {
    return (
        <h3>
            This is {props.name}
            <img src={cat} alt="logo" />
        </h3>
    );
}

export default Example2;