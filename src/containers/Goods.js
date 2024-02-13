import { useDispatch } from 'react-redux';
import { addGoods } from '../action';

const Goods = () => {
    const dispatch = useDispatch();
    const formHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addGoods(data.id.value, data.title.value, data.image.value));
    }

    return (
        <>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name="id" defaultValue="28ss7s" />
                </div>
                <div>
                    <input type="text" name="title" defaultValue="Wheels" />
                </div>
                <div>
                    <input type="text" name="image" defaultValue="https://content2.onliner.by/catalog/device/main/cc1dafe020ad0f0f2c874839709e946d.jpeg" />
                </div>
                <div>
                    <button type="submit">Add new goods</button>
                </div>
            </form>
        </>
    )
}

export default Goods
