import {shallow} from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en </GifGridItem>',()=>{
    // tecla u para actualizar el spapshot
    const title = 'A title'
    const url = 'https://localhost/images/image.jpg'
    const wrapper = shallow( <GifGridItem  
        title={title}
        url={url}/>)
    test('should show the comoneny as expected', () => { 
        expect(wrapper).toMatchSnapshot()
    })


    test('Debe de tener un parrafo con el title', () => { 
        const p = wrapper.find('p')
        expect( p.text().trim()).toBe(title)
     })

     test('Debe de obtener la imagen igual a url y a los props', () => { 
         
        const img = wrapper.find('img')
        //console.log(img.html());
       // console.log(img.props().src);
       expect(img.props().src).toBe(url)
       expect(img.props().alt).toBe(title)        
    })

    test('debe tener animate__fadeIn', () => { 
        const div = wrapper.find('div')
        const className = div.props().className
        expect(className.includes('animate__fadeIn')).toBe(true)
     })
})