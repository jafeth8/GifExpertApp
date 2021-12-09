import "@testing-library/jest-dom"
import {shallow} from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('pruebas en GifGridItem.js', () => {
    const titulo="jibril";
    const url="http://localhost/jibril.jpg";

    test('mostrar correctamente el componente', async () => {
        const wrapper = shallow(<GifGridItem title={titulo} url={url}/>)
        expect(wrapper).toMatchSnapshot()
    })
    
})

