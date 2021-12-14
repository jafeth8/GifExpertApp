import "@testing-library/jest-dom"
import {shallow} from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('pruebas en GifGridItem.js', () => {
    const titulo="jibril";
    const url="http://localhost/jibril.jpg";
    
    const wrapper = shallow(<GifGridItem title={titulo} url={url}/>)

    test('mostrar correctamente el componente', async () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('parrafo debe mostrar texto correcto', () => {
        const parrafo=wrapper.find('p');
        expect(parrafo.text()).toBe(titulo);
    })
    

    test('propiedad alt y src de imagen correcto', () => {
        const img=wrapper.find('img')
        expect(img.prop('alt')).toBe(titulo);
        //console.log(img.props().src);
        expect(img.props().src).toBe(url);
    })

    test('div debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        let claseDiv=div.prop('className');
        //console.log(claseDiv.includes('animate__fadeIn'));
        expect(claseDiv.includes('animate__fadeIn')).toBe(true);
    })
    
    

    
})

